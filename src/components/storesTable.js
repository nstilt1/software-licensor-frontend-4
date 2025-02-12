import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Amplify } from "aws-amplify";
import { AuthUser, fetchAuthSession } from "aws-amplify/auth";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import TextInput from "./TextInput";
import { Button } from "./ui/button";
import APIKeyDisplay from "./APIKeyDisplay";
import { useEffect } from "react";
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from './ui/toast';
function debugLog(text) {
    if (true) {
        console.log(text);
    }
}

const StoresTable = (user) => {
    // Helper function to sanitize and validate the input
    const sanitizeInput = (value) => {
        // Convert the value to a number and floor it to get a whole number.
        let number = Math.floor(Number(value));
        
        // If the result is NaN, default to 0 (or you could throw an error)
        if (isNaN(number)) {
        number = 0;
        }
        
        // Clamp the value between 0 and 100,000.
        return Math.max(0, Math.min(100000, number));
  };

    const { toast } = useToast();
    // create_store parameters
    const [idPrefix, setIdPrefix] = useLocalStorage("id_prefix", "");
    const [contactFirstName, setContactFirstName] = useLocalStorage("contactFirstName", "Unknown");
    const [contactLastName, setContactLastName] = useLocalStorage("contactLastName", "Unknown");
    const [contactEmail, setContactEmail] = useLocalStorage("contactEmail", "Unknown");
    const [discordUsername, setDiscordUsername] = useLocalStorage("discordUsername", "Unknown");
    const [country, setCountry] = useLocalStorage("country", "Unknown");
    const [storeName, setStoreName] = useLocalStorage("storeName", "Unknown");
    const [storeUrl, setStoreUrl] = useLocalStorage("storeUrl", "Unknown");

    // update_settings parameters
    const [OLFH, setOLFH] = useLocalStorage("OLFH", 1000);
    const [PLED, setPLED] = useLocalStorage("PLED", 1000);
    const [PLFH, setPLFH] = useLocalStorage("PLFH", 1000);
    const [SLED, setSLED] = useLocalStorage("SLED", 1000);
    const [SLELH, setSLELH] = useLocalStorage("SLELH", 1000);
    const [SLFH, setSLFH] = useLocalStorage("SLFH", 1000);
    const [TLED, setTLED] = useLocalStorage("TLED", 1000);
    const [TLFH, setTLFH] = useLocalStorage("TLFH", 1000);

    const now = () => {
        const time = Math.floor(Date.now() / 1000);
        return time;
    }
    const [lastMetricsFetch, setLastMetricsFetch] = useLocalStorage("lastMFetch", 0);

    const [storeData, setStoreData] = useLocalStorage("storeData", []);
    const [totals, setTotals] = useLocalStorage("APITotals", {});

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         updateMetics();
    //     }, 2000);

    //     return () => clearInterval(intervalId);
    // }, []);

    const packRequest = async (obj, url) => {
        try {
            const authSession = await fetchAuthSession();
            const idToken = authSession?.tokens?.idToken;

            if (!idToken) {
                throw new Error("No idToken");
            }
            const token = idToken.toString();

            debugLog("Token: " + token);

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-type": "application/json"
                },
                body: JSON.stringify(obj)
            });
            // Add detailed error logging
            if (!response.ok) {
                const errorText = await response.text();
                console.error('Response status:', response.status);
                console.error('Response headers:', Object.fromEntries(response.headers));
                console.error('Response body:', errorText);
                throw new Error(`HTTP error! status: ${response.status}\nbody: ${errorText}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Full error details:", {
                message: error.message,
                stack: error.stack,
                cause: error.cause
            });
        }
    };

    const createStore = async (event) => {
        event.preventDefault();

        try {
            const reqData = {
                id_prefix: idPrefix,
                contact_first_name: contactFirstName,
                contact_last_name: contactLastName,
                contact_email: contactEmail,
                discord_username: discordUsername,
                country: country,
                store_name: storeName,
                store_url: storeUrl
            };

            let json = await packRequest(reqData, "https://5bl6z5xif1.execute-api.us-east-1.amazonaws.com/v1/create_store");

            const apiKey = json.api_key;
            const configs = json.configs;

            debugLog(apiKey);

            const storeInfo = {
                api_key: apiKey,
                configs: configs,
                metrics: {}
            };


            const newKey = { [apiKey]: storeInfo };
            setStoreData(previous => [...previous, newKey]);
            
        } catch (error) {
            console.error("Full error details:", {
                message: error.message,
                stack: error.stack,
                cause: error.cause
            });
        }

    }

    const updateSettings = async (storeIdInput) => {
        try {
            const reqData = {
                store_id: storeIdInput,
                configs: {
                    offline_license_frequency_hours: sanitizeInput(OLFH),
                    perpetual_license_expiration_days: sanitizeInput(PLED),
                    perpetual_license_frequency_hours: sanitizeInput(PLFH),
                    subscription_license_expiration_days: sanitizeInput(SLED),
                    subscription_license_expiration_leniency_hours: sanitizeInput(SLELH),
                    subscription_license_frequency_hours: sanitizeInput(SLFH),
                    trial_license_expiration_days: sanitizeInput(TLED),
                    trial_license_frequency_hours: sanitizeInput(TLFH),
                }
            };

            let json = await packRequest(reqData, "https://5bl6z5xif1.execute-api.us-east-1.amazonaws.com/v1/update_settings");

            const currentStore = storeData.find(item => Object.keys(item)[0] === storeIdInput);
            const storeInfo = {
                api_key: storeIdInput,
                configs: json.configs,
                metrics: currentStore[storeIdInput].metrics,
            }
            const newKey = { [storeIdInput]: storeInfo };
            setStoreData((previous) => {
                const index = previous.findIndex(item => Object.keys(item)[0] == storeIdInput);
                if (index !== -1) {
                    // store id was found
                    return previous.map((item, i) => 
                        i === index ? { [storeIdInput]: storeInfo } : item
                    );
                }

                // not found
                debugLog("Store id was not found in the array");
            });
        } catch (error) {
            console.error("Full error details:", {
                message: error.message,
                stack: error.stack,
                cause: error.cause
            });
        }
    };

    const updateMetics = async (event) => {
        event.preventDefault();
        if (lastMetricsFetch && lastMetricsFetch + (60*60*4) > now()) {
            debugLog("Last metrics fetch was too recent")
            return;
        }
        try {
            const reqData = {
                message: "Hi"
            };
            let json = await packRequest(reqData, "https://5bl6z5xif1.execute-api.us-east-1.amazonaws.com/v1/get_metrics");
            let storeDataArray = Object.entries(json.store_data).map(([key, data]) => ({
                [key]: data
            }));
            debugLog("response json: " + json);
            setStoreData(storeDataArray);
            setTotals(json.totals);
            setLastMetricsFetch(now());
            debugLog("updated metrics");
        } catch (error) {
            console.error("Full error details:", {
                message: error.message,
                stack: error.stack,
                cause: error.cause
            });
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Stores and API Usage</CardTitle>
                <CardDescription>
                    View your stores and their API usage. You can have up to 10 API Keys. 
                    You cannot delete them, and you can only link them once—so only make 
                    as many as you need.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <Table>
                    <TableCaption>Your stores and their API usage.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">API Key</TableHead>
                            <TableHead># of Products</TableHead>
                            <TableHead># of Licenses</TableHead>
                            <TableHead># of Licensed Machines</TableHead>
                            <TableHead># of Offline Machines</TableHead>
                            <TableHead># of Online Machines</TableHead>
                            <TableHead># of License Activations</TableHead>
                            <TableHead># of License Regens</TableHead>
                            <TableHead># of Machine Deactivations</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {storeData.map((storeItem) => {
                            const dynamicKey = Object.keys(storeItem);
                            const itemData = storeItem[dynamicKey];

                            return (
                                <TableRow key={storeItem.api_key}>
                                    {debugLog("storeData = " + storeData)}
                                    {debugLog("storeItem = " + storeItem)}
                                    {debugLog("storeItem.api_key = " + storeItem.api_key)}
                                    {debugLog("itemData = " + itemData)}
                                    {debugLog("itemData.api_key = " + itemData.api_key)}
                                    <TableCell className="font-medium">
                                        <APIKeyDisplay 
                                            apiKey={itemData?.api_key} 
                                            configs={itemData?.configs} 
                                            updateSettings={updateSettings}
                                            OLFH={OLFH} setOLFH={setOLFH}
                                            PLED={PLED} setPLED={setPLED}
                                            PLFH={PLFH} setPLFH={setPLFH}
                                            SLED={SLED} setSLED={setSLED}
                                            SLELH={SLELH} setSLELH={setSLELH}
                                            SLFH={SLFH} setSLFH={setSLFH}
                                            TLED={TLED} setTLED={setTLED}
                                            TLFH={TLFH} setTLFH={setTLFH}
                                        />
                                    </TableCell>
                                    <TableCell>{itemData?.metrics?.num_products ?? 0}</TableCell>
                                    <TableCell>{itemData?.metrics?.num_licenses ?? 0}</TableCell>
                                    <TableCell>{itemData?.metrics?.num_licensed_machines ?? 0}</TableCell>
                                    <TableCell>{itemData?.metrics?.num_offline_machines ?? 0}</TableCell>
                                    <TableCell>{itemData?.metrics?.num_online_machines ?? 0}</TableCell>
                                    <TableCell>{itemData?.metrics?.num_license_activations ?? 0}</TableCell>
                                    <TableCell>{itemData?.metrics?.num_license_regens ?? 0}</TableCell>
                                    <TableCell>{itemData?.metrics?.num_machine_deactivations ?? 0}</TableCell>                                
                                </TableRow>
                            );
                        })}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell>Totals</TableCell>
                            <TableCell>{totals.num_products ?? 0}</TableCell>
                            <TableCell>{totals.num_licenses ?? 0}</TableCell>
                            <TableCell>{totals.num_licensed_machines ?? 0}</TableCell>
                            <TableCell>{totals.num_offline_machines ?? 0}</TableCell>
                            <TableCell>{totals.num_online_machines ?? 0}</TableCell>
                            <TableCell>{totals.num_license_activations ?? 0}</TableCell>
                            <TableCell>{totals.num_license_regens ?? 0}</TableCell>
                            <TableCell>{totals.num_machine_deactivations ?? 0}</TableCell>   
                        </TableRow>
                    </TableFooter>
                </Table>
            </CardContent>
            <CardFooter>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Create Store</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Create Store</DialogTitle>
                            <DialogDescription>Create a store and an API key here. A single API key can only be used with a single store.</DialogDescription>
                        </DialogHeader>
                        <form onSubmit={createStore}>
                                    <TextInput 
                                        onChange={setIdPrefix}
                                        id="idPrefix"
                                        value={idPrefix}
                                        labelText="Enter your desired API Key prefix"
                                    />
                            <DialogFooter>
                                <Button type="submit">Create Store</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
                <Button disabled={lastMetricsFetch + (60*60*4) > now()} variant="outline" onClick={updateMetics}>Refresh Table</Button>
                
            </CardFooter>
        </Card>
    );
};

export default StoresTable;