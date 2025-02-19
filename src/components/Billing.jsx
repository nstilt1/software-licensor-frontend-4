import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";


const Billing = () => {
    return (
    <Card className="w-[750px]">
        <CardHeader>
            <CardTitle>Billing</CardTitle>
            <CardDescription>
                We understand that small companies sometimes struggle to achieve 
                sales. That is why configuring billing is completely optional. 
                The thing is, this licensing service was built in a way such that 
                if you don&apos;t make sales, you won&apos;t cost us much more money, which 
                is why we can afford to allow you to sign up for free. But if 
                you are making plenty of sales using this licensing service, 
                please consider supporting us.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <Button type="submit" variant="outline" onClick={() => window.open("https://buymeacoffee.com/alteredbrainchemistry")}>Buy me a coffee</Button>
        </CardContent>
    </Card>
    );
}

export default Billing;