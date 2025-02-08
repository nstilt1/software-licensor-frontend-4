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
    const [storeData, setStoreDate] = useLocalStorage("storeData", []);

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
                    body: buffer
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}\nmsg: ${response.statusText}`);
                }

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
                
            </CardContent>
            <CardFooter>
                <Button>Create Store</Button>
            </CardFooter>
        </Card>
    );
};

export default StoresTable;