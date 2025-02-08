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
import { Auth } from 'aws-amplify';
import { AuthUser } from "aws-amplify/auth";
import protobuf from "protobufjs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import TextInput from "./TextInput";

const protobuf = require('protobufjs');

const StoresTable = (user) => {
    // create_store parameters
    const [idPrefix, setIdPrefix] = useLocalStorage("id_prefix", "");
    const [contactFirstName, setContactFirstName] = useLocalStorage("contactFirstName", "");
    const [contactLastName, setContactLastName] = useLocalStorage("contactLastName", "");
    const [contactEmail, setContactEmail] = useLocalStorage("contactEmail", "");
    const [discordUsername, setDiscordUsername] = useLocalStorage("discordUsername", "");
    const [country, setCountry] = useLocalStorage("country", "");
    const [storeName, setStoreName] = useLocalStorage("storeName", "");
    const [storeUrl, setStoreUrl] = useLocalStorage("storeUrl", "");

    const now = () => {
        const time = Math.floor(Date.now() / 1000);
        return time;
    }
    const [lastMetricsFetch, setLastMetricsFetch] = useLocalStorage("lastMFetch", now());
    // might need to change the default value to an empty protobuf message
    const [storeData, setStoreData] = useLocalStorage("storeData", []);
    const [totals, setTotals] = useLocalStorage("APITotals", {});

    const createStore = async (event) => {
        event.preventDefault();

        try {
            Auth.currentSession().then(async res => {
                let jwtToken = res.getIdToken().getJwtToken();

                // const root = await protobuf.load('/create_store.proto');
                // const CreateStoreRequest = root.lookupType("CreateStoreRequest");

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

                // const errMsg = CreateStoreRequest.verify(reqData);
                // if (errMsg) {
                //     throw Error(errMsg);
                // }

                // const message = CreateStoreRequest.create(reqData);
                // const buffer = CreateStoreRequest.encode(message).finish();

                const response = await fetch("https://5bl6z5xif1.execute-api.us-east-1.amazonaws.com/v1/create_store", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${jwtToken}`,
                        "Content-type": "application/x-protobuf"
                    },
                    body: reqData
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}\nmsg: ${response.statusText}`);
                }

                let json = response.json();
                const apiKey = json.api_key;
                const configs = json.configs;

                const storeInfo = {
                    api_key: apiKey,
                    configs: configs,
                    metrics: {}
                };


                const newKey = { [apiKey]: storeInfo };
                setStoreData(previous => [...previous, newKey]);
                

                // const responseBuffer = await response.arrayBuffer();
                // const CreateStoreResponse = root.lookupType("CreateStoreResponse");

                // const decodedMessage = CreateStoreResponse.decode(responseBuffer);
                // console.log(decodedMessage);
            });
        } catch (error) {
            console.error("Error in createStore()", error);
        }

    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Stores and API Usage</CardTitle>
                <CardDescription>
                    View your stores and their API usage.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <Table>
                    <TableCaption>Your stores and their API usage</TableCaption>
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
                        {storeData.map(storeItem => (
                            <TableRow key={storeItem.api_key}>
                                <TableCell className="font-medium">{storeItem.api_key}</TableCell>
                                <TableCell>{storeItem.metrics.num_products ? storeItem.metrics.num_products : 0}</TableCell>
                                <TableCell>{storeItem.metrics.num_licenses ? storeItem.metrics.num_licenses : 0}</TableCell>
                                <TableCell>{storeItem.metrics.num_licensed_machines ? storeItem.metrics.num_licensed_machines : 0}</TableCell>
                                <TableCell>{storeItem.metrics.num_offline_machines ? storeItem.metrics.num_offline_machines : 0}</TableCell>
                                <TableCell>{storeItem.metrics.num_online_machines ? storeItem.metrics.num_online_machines : 0}</TableCell>
                                <TableCell>{storeItem.metrics.num_license_activations ? storeItem.metrics.num_license_activations : 0}</TableCell>
                                <TableCell>{storeItem.metrics.num_license_regens ? storeItem.metrics.num_license_regens : 0}</TableCell>
                                <TableCell>{storeItem.metrics.num_machine_deactivations ? storeItem.metrics.num_machine_deactivations : 0}</TableCell>                                
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell>Totals</TableCell>
                            <TableCell>{totals.num_products ? totals.num_products: 0}</TableCell>
                            <TableCell>{totals.num_licenses ? totals.num_licenses: 0}</TableCell>
                            <TableCell>{totals.num_licensed_machines ? totals.num_licensed_machines: 0}</TableCell>
                            <TableCell>{totals.num_offline_machines ? totals.num_offline_machines: 0}</TableCell>
                            <TableCell>{totals.num_online_machines ? totals.num_online_machines: 0}</TableCell>
                            <TableCell>{totals.num_license_activations ? totals.num_license_activations: 0}</TableCell>
                            <TableCell>{totals.num_license_regens ? totals.num_license_regens: 0}</TableCell>
                            <TableCell>{totals.num_machine_deactivations ? totals.num_machine_deactivations: 0}</TableCell>   
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
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <TextInput 
                                        onChange={setIdPrefix}
                                        id="idPrefix"
                                        value={idPrefix}
                                        labelText="Enter your desired API Key prefix"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <TextInput 
                                        onChange={setContactFirstName}
                                        id="contactFirstName"
                                        value={contactFirstName}
                                        labelText="Enter your first name"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <TextInput 
                                        onChange={setContactLastName}
                                        id="contactLastName"
                                        value={contactLastName}
                                        labelText="Enter your last name"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <TextInput 
                                        onChange={setDiscordUsername}
                                        id="discordUsername"
                                        value={discordUsername}
                                        labelText="Enter your discord username"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <TextInput 
                                        onChange={setCountry}
                                        id="country"
                                        value={country}
                                        labelText="Enter your country"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <TextInput 
                                        onChange={setStoreName}
                                        id="storeName"
                                        value={storeName}
                                        labelText="Enter your store's name"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <TextInput 
                                        onChange={setStoreUrl}
                                        id="storeUrl"
                                        value={storeUrl}
                                        labelText="Enter your store's URL"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Create Store</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
                <Button>Create Store</Button>
            </CardFooter>
        </Card>
    );
};

export default StoresTable;