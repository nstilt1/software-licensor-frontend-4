import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

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
import SyntaxHighlighter from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Link from "./Link";

const Docs = () => {
    const macosCodeSignCommand = () => {
        let code = `
codesign --sign "Developer ID Application: [name] [ID] *OR* SHA-1 hash" \\
"/path/to/My Plugin.component" \\
"/path/to/My Plugin.vst3" \\
--timestamp --force --options runtime --verbose --deep \\
--entitlements "/path/to/software-licensor-client-side-library/entitlements.plist"
`;
        code = code.trim();
        return code;
    }
    return (
    <Card className="w-[750px]">
        <CardHeader>
            <CardTitle>Documentation</CardTitle>
            <CardDescription>Everything you need to know about this licensing service.</CardDescription>
        </CardHeader>
        <CardContent>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="1">
                    <AccordionTrigger>Using Software Licensor on your WordPress site</AccordionTrigger>
                    <AccordionContent>
                        <Accordion type="single" collapsible className="w-full pl-5 pr-5">
                            <AccordionItem value="1.1">
                                <AccordionTrigger>Store Registration</AccordionTrigger>
                                <AccordionContent>
                        <p>First, you need to create an API key/Store ID.</p>
                        <p>Then you will need to ensure that WooCommerce is installed on your site.</p>
                        <p>
                            Next, you will need to install the Software Licensor 
                            WordPress plugin found <Link href="https://github.com/nstilt1/software-licensor-wordpress-plugin">here</Link>.
                        </p>
                        <p>
                            Once the plugin is installed, navigate to your site&apos;s 
                            admin dashboard, and under <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">WooCommerce&gt;Settings&gt;Integration&gt;Software Licensor</span>, 
                            there will be a form for you to fill out. Please input your API key, and 
                            fill in the remaining fields however you want.
                        </p>
                        <p>
                            There is an option to share customer data with Software Licensor. This 
                            only includes their names and their email addresses. The email addresses 
                            are hashed and you can access their name in the client side code.
                        </p>
                        <p>
                            There is also an option for setting up an email message when a user 
                            purchases a license and whether or not to include software names. 
                            At the moment, emails are not implemented.
                        </p>
                        </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="1.2">
                                <AccordionTrigger>Verifying that the store was registered successfully</AccordionTrigger>
                                <AccordionContent>
                        <p>
                            After submitting the form with your API key, navigate from 
                            the admin dashboard to 
                            <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">Software Licensor&gt;Software Licensor</span>. 
                            If the submission was successful, you should see your store ID at 
                            the top of the page. This means that your store now has a private key 
                            for interacting with Software Licensor&apos;s API.
                        </p>
                        <p>
                            You should also see your site&apos;s PHP version. If the PHP version is 
                            less than 8.0, you might run into issues with the API requests. 
                            You will need to update your site&apos;s PHP version to version 8 to use this 
                            plugin if it isn&apos;t working.
                        </p>
                        </AccordionContent>
                            </AccordionItem>
                        <AccordionItem value="1.3">
                            <AccordionTrigger>Creating products</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    Navigate to <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">Software Licensor&gt;Create/Update Licensed Product</span>. 
                                    Here, you can create different Product IDs. Offline unlocks are not yet 
                                    implemented, so it is okay for you to disable offline unlocks for 
                                    now.  The product names will be used in your store&apos;s license tables. 
                                    Don&apos;t worry about backslashes in the 
                                    displayed names, as they are removed in the license tables.
                                </p>
                                <p>
                                    In this menu, you can also set the product&apos;s version, which will be 
                                    fetched every time a client reconnects with Software Licensor.
                                </p>
                                <p>
                                    You will need the product IDs and their public keys in the client-side 
                                    code, but you can also see these values in the Dashboard here at 
                                    dashboard.softwarelicensor.com. Navigate to the <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">Stores</span> 
                                    table, then click <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">Refresh Table</span>,
                                    then right click on your store&apos;s API key, and choose <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">View Products</span>. 
                                    Now, you can select the product IDs and generate a code snippet to 
                                    use later in the C++ code.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="1.4">
                            <AccordionTrigger>Configuring licensed products for sales</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    Before you can make any sales, you need to configure your products. 
                                    There are two ways to do this. You can either make &quot;simple products,&quot; 
                                    one for a trial and one for a perpetual license, or you can make 
                                    a &quot;variable&quot; product. Variable products offer a dropdown for users 
                                    to select either a trial or a perpetual license.
                                </p>
                                <h3>Simple Products</h3>
                                <p>
                                    To make a &quot;simple product&quot; with a trial license, add a new product, 
                                    then scroll down to the Product Data section. Select &quot;Attributes&quot; and 
                                    then add two attributes:
                                </p>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Value</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>software_licensor_id</TableCell>
                                            <TableCell>Insert the product ID here</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>license_type</TableCell>
                                            <TableCell>&quot;trial&quot; or &quot;perpetual&quot;</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <h3>Variable Products</h3>
                                <p>
                                    To make a &quot;variable product&quot; with a trial license and a 
                                    perpetual license, we first need to add some attributes. Go to 
                                    <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">Products&gt;Attributes</span>, 
                                    and then add one attribute called <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">License Type</span> 
                                    with <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">license_type</span> 
                                    for the slug, and then click on &quot;Add Attribute&quot;.
                                </p>
                                <p>
                                    Next, click on the newly create attribute, and add a new license type by 
                                    putting &quot;Trial&quot; for the name and &quot;trial&quot; for the slug, and make a new one 
                                    called &quot;Perpetual&quot; with &quot;perpetual&quot; for the slug. Feel free to add a description 
                                    for these license types.
                                </p>
                                <p>
                                    Now that our license type attribute exists, we can proceed with creating a 
                                    product. Navigate to <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">Products&gt;Add New</span>, 
                                    then scroll down to &quot;Product Data&quot;. Next, click the dropdown that says 
                                    &quot;Simple Product&quot; and choose &quot;Variable Product.&quot; Go to the attributes, select 
                                    &quot;Add existing&quot; and select &quot;License type.&quot; Now choose the license types that you want 
                                    for this product such as Trial and Perpetual, and ensure that &quot;Used for variations&quot; is checked. 
                                    Go ahead and add another attribute called <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">software_licensor_id</span> 
                                    and put the product ID there. Ensure that &quot;Visible on the product page&quot; is unselected, as well 
                                    as &quot;Used for variations.&quot;
                                </p>
                                <p>
                                    When you&apos;re done with the attributes, click on &quot;Save Attributes&quot; and then 
                                    navigate to &quot;Variations&quot; and click on &quot;Generate variations.&quot; 
                                    This should populate with as many variations as you have license types. Proceed 
                                    to fill out the description and the rest of the product information, and now this 
                                    product will be ready.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="1.5">
                            <AccordionTrigger>Displaying a user&apos;s licenses</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    Licenses can be displayed in three different places. The first place 
                                    license information will be displayed is in a customer&apos;s order information. 
                                    You don&apos;t need to worry about implementing click-to-copy license codes, because 
                                    they are already click-to-copy.
                                </p>
                                <p>
                                    The second place that licenses are displayed is in the user&apos;s profile. 
                                    The Software Licensor Plugin adds a section to the user profile/dashboard 
                                    page that shows the user&apos;s licenses, and when a product in the table is 
                                    clicked, it will show the machines that are using that product&apos;s license.
                                </p>
                                <p>
                                    The last place that licenses are displayed are on any page with the following 
                                    shortcode: <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">[software_licensor_licenses_page]</span>
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="1.6">
                            <AccordionTrigger>Migrating Hosts</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    Sometimes, you find out that your host sucks, or is too expensive. 
                                    It happens sometimes, and sometimes you can switch. With Software 
                                    Licensor, API keys can only be used to register a store once, but 
                                    it is possible to migrate your site with Software Licensor.
                                </p>
                                <p>
                                    First, you&apos;ll want to use a mechanism to back up your site. All-in-One WP 
                                    Migration can get the job done.
                                </p>
                                <p>
                                    But Software Licensor won&apos;t work out of the box after a migration because 
                                    the plugin encrypts some data using some keys and salts that are stored in 
                                    the wp-config.php file, which should be different with every host. So, you have 
                                    to navigate to <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">Software Licensor&gt;Import/Export Private Key</span>, 
                                    and then in this menu, you need to use your current admin password to encrypt the 
                                    private key before it is downloaded. When importing the private key at the new host, it will need to be decrypted 
                                    using the same password. I have tested this process myself, and it worked.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="1.7">
                            <AccordionTrigger>Implementing Offline Unlocking</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    Offline unlocking is currently only implemented in the backend&apos;s API, 
                                    but not in the WordPress plugin or the client-side C++ code. This is 
                                    because the process that I have chosen is a little bit tricky.
                                </p>
                                <p>
                                    The client side software needs to generate a file, either a protobuf message or 
                                    json file, that contains some information relevant to unlocking the software. To 
                                    be exact, it needs to at the very least contain the Machine ID, but preferably, it 
                                    should contain some optional hardware information that the user should decide whether or not to 
                                    provide.
                                </p>
                                <p>
                                    Next, the user needs to upload this file to your site inside an Offline Activation 
                                    form.
                                </p>
                                <p>
                                    The site needs to parse the data and send a <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">license_activation_refactor</span> API 
                                    request to Software Licensor, filling in data from the store&apos;s database 
                                    regarding all of the Product IDs that the user has a license for. 
                                    The site needs to sign the request with its private key, and also add in the 
                                    4-digit &quot;offline_code&quot; for the user&apos;s license, appended to the license code in 
                                    the API request.
                                </p>
                                <p>
                                    See <Link href="https://github.com/nstilt1/software-licensor-wordpress-plugin/blob/master/software-licensor-wp-plugin/includes/protobufs/protos/license_activation.proto">license_activation.proto</Link> for details.
                                </p>
                                <p>
                                    The site then needs to take the response and provide it to the user. The user then 
                                    needs to open their software and select the server&apos;s response file.
                                </p>
                                <p>
                                    I know this process is a little tedious, but offline unlocks are serious.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="1.8">
                            <AccordionTrigger>Implementing subscription licenses</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    Subscription licenses are currently only implemented in the backend API. 
                                    If you want to sell subscriptions, you&apos;ll need to implement it. The reason 
                                    I haven&apos;t implemented it in the WordPress plugin is because WooCommerce 
                                    subscriptions requires a subscription, and the documentation I have found 
                                    for it was lacking.
                                </p>
                                <p>
                                    All you would need to do is call the <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">create_license_refactor</span> 
                                    API method whenever the user purchases a subscription, and when the subscription is renewed.
                                </p>
                                <p>
                                    The main thing that you need to look at is <Link href="https://github.com/nstilt1/software-licensor-wordpress-plugin/blob/master/software-licensor-wp-plugin/includes/protobufs/protos/create_license.proto">create_license.proto</Link> 
                                    and create a Subscription entry for the product that is being licensed. 
                                    The Subscription message can accept either an end timestamp, or it can also take 
                                    an amount of seconds to add to the user&apos;s end timestamp.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        </Accordion>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="2">
                    <AccordionTrigger>Using Software Licensor on your Non-WordPress Site</AccordionTrigger>
                    <AccordionContent>
                        <p>
                            It is possible to use Software Licensor on a non-WordPress site, but 
                            you&apos;ll need to implement some methods to interact with the API.
                        </p>
                        <p>
                            Software Licensor uses protocol buffers to package requests, and NIST-P384 
                            for cryptography. The .proto files can be found <Link href="https://github.com/nstilt1/software-licensor-wordpress-plugin/tree/master/software-licensor-wp-plugin/includes/protobufs/protos">here</Link>, 
                            and an example implementation in PHP can be found <Link href="https://github.com/nstilt1/software-licensor-wordpress-plugin/tree/master/software-licensor-wp-plugin/includes/api">here</Link>.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="2-5">
                    <AccordionTrigger>Selling license bundles</AccordionTrigger>
                    <AccordionContent>
                        It is possible to bundle your software together for licensing. To do this, create 
                        a product for the bundle(s), then create a product for your individual 
                        product (if you wish to license it individually as well), then in the 
                        client-side code, include all of the product IDs and product public keys 
                        for the bundle(s) and individual products.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="3">
                    <AccordionTrigger>Using Software Licensor in your Software</AccordionTrigger>
                    <AccordionContent>
                        <Accordion type="single" collapsible className="w-full pl-5 pr-5">
                            <AccordionItem value="3.1">
                                <AccordionTrigger>Building the client-side Rust library</AccordionTrigger>
                                <AccordionContent>
                                    <p>
                                        We use Rust in a static library to handle protocol buffers, as well 
                                        as cryptography and POST requests. The client side library can be 
                                        found <Link href="https://github.com/nstilt1/software-licensor-client-side-library/tree/master/software_licensor_static_rust_lib">here</Link>, 
                                        along with some JUCE code that interfaces with it.
                                    </p>
                                    <p>
                                        To build the static library, you will need to have Rust installed, then cd into the static library&apos;s directory and use  
                                        <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">cargo build --release --target x86_64-pc-windows-msvc</span> for 
                                        Windows, and <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">./build_mac.sh</span> to build 
                                        a binary for macOS.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="3.2">
                                <AccordionTrigger>Using the Software Licensor JUCE library</AccordionTrigger>
                                <AccordionContent>
                                    <p>
                                        Unfortunately, I have not found a reliable way to create a JUCE 
                                        module that uses the static library automatically. I have been 
                                        using JUCE v7.0.7 because parameter context menus are broken on 
                                        v7.0.8 on Windows, so I am unsure if JUCE Modules with static 
                                        libraries work on newer versions of JUCE.
                                    </p>
                                    <p>
                                        The way that I have used the library was by copying the headers 
                                        and cpp files into my audio plugin&apos;s modules folder. The files 
                                        can be found <Link href="https://github.com/nstilt1/software-licensor-client-side-library/tree/master/SoftwareLicensorJUCE/Source">here</Link>. 
                                    </p>
                                    <p>
                                        To use this <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">SoftwareLicensorStatus</span> class, 
                                        you must create a new class that inherits this class. You can actually generate 
                                        the new class by navigating to the Stores table within this dashboard, 
                                        then right-click the store&apos;s API key, choose <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">View Products</span>, then 
                                        select the product IDs that should be used to unlock your product. Note that you can 
                                        use one Product as a &quot;Bundle&quot; that unlocks multiple products, or you 
                                        could use a Product as an individual product. After selecting the relevant 
                                        product IDs, click <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">Generate code</span> at 
                                        the bottom to generate the C++ class that inherits <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">SoftwareLicensorStatus</span>.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="3.3">
                                <AccordionTrigger>Building a JUCE Application on Windows</AccordionTrigger>
                                <AccordionContent>
                                    <p>
                                        After building the static library, you will need to link it when 
                                        compiling your JUCE code. These instructions only cover building 
                                        the code via Visual Studio, but you can alternatively use CMake. 
                                        We will not provide instructions for building JUCE code with 
                                        CMake.
                                    </p>
                                    <h3>Visual Studio 2022 on Windows</h3>
                                    <ol>
                                        <li>Right-click the project in the IDE. In my case, it was the VST3 project.</li>
                                        <li>Ensure that it is set up as the startup project.</li>
                                        <li>Select Properties, then select build configuration in the top left.</li>
                                        <li>Select <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">Linker&gt;Input&gt;Additional Dependencies</span>, then add these on separate lines:
                                            <ul>
                                            <li>Userenv.lib</li>
                                            <li>Ntdll.lib</li>
                                            <li>software_licensor_static_rust_lib.lib</li>
                                            <li>Bcrypt.lib</li>
                                            <li>Ws2_32.lib</li>
                                            </ul></li>
                                        <li>Select <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">Linker&gt;General&gt;Additional Library Dependencies</span> and 
                                        ensure that the path to the client side Rust library is there, ending with this: <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">software-licensor-client-side-library\software_licensor_static_rust_lib\target\x86_64-pc-windows-msvc\release</span></li>
                                        <li>Apply the changes and build in the configuration that you specified.</li>
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="3.4">
                                <AccordionTrigger>Building a JUCE Application on macOS</AccordionTrigger>
                                <AccordionContent>
                                    <p>
                                        After building the static library, you&apos;ll want to first make sure that 
                                        you aren&apos;t using the JUCE v7.0.7 Projucer. If you want to use v7.0.7, 
                                        you&apos;ll want to use the v7.0.8 Projucer or later because 7.0.7 has 
                                        an issue with XCode project generation. Then,
                                    </p>
                                    <ol>
                                        <li>Open the project navigator by clicking the folder-looking icon towards the top left corner of the window, in the left-most tab.</li>
                                        <li>Select your project with the blue icon to the left of it.</li>
                                        <li>Choose <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">File&gt;Add Files to &quot;Your Project Name&quot;</span>.</li>
                                        <li>Ensure that the proper targets are selected before adding this file, then locate the universal library file in <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">software_licensor_static_rust_lib/target/universal</span> 
                                        and select it, or select its parent folder if you are unable to select the file itself.</li>
                                        <li>Select a desired scheme in <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">Product&gt;Scheme</span> and build it.</li>
                                    </ol>
                                    <p>
                                        If there are any issues with the build, consider adding the path to <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">software_licensor_static_rust_lib/target/universal</span> 
                                        into <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">Projucer&gt;Exporters&gt;XCode&gt;Debug/Release&gt;Extra Library Search Paths</span>.
                                    </p>
                                    <p>
                                        If you get a ridiculous build error and you are trying to get XCode to automatically 
                                        code-sign the built product, try to turn off that automatic signing feature and see if 
                                        that fixes it. I was unable to build this with automatic code signing.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="3.5">
                                <AccordionTrigger>Code Signing on Mac</AccordionTrigger>
                                <AccordionContent>
                                    <p>
                                        Code signing is not very straightforward on Mac. For me, at least, 
                                        I was unable to use the built-in code-signing feature in XCode, so 
                                        I had to sign all of my software from the command line.
                                    </p>
                                    <p>
                                        When code signing, you need to use something like the following:
                                    </p>
                                    <SyntaxHighlighter
                                        language="sh"
                                        style={oneDark}
                                        wrapLongLines={true}
                                    >
                                        {macosCodeSignCommand()}
                                    </SyntaxHighlighter>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="3.6">
                                <AccordionTrigger>Building non-JUCE applications with the client side Rust library</AccordionTrigger>
                                <AccordionContent>
                                    If you are able to use the static Rust library in your project, 
                                    it handles all of the Protobuf, file system 
                                    access, and cryptography required to interact with the Software 
                                    Licensor API. But it only works on Windows, macOS, 
                                    and Linux as of now, due to how it saves license files. You can, 
                                    of course, implement the file IO for those other platforms, but 
                                    generally, the mobile app stores are good enough at DRM.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="4">
                    <AccordionTrigger>Local license file locations</AccordionTrigger>
                    <AccordionContent>
                        <p>
                            Once you set up Software Licensor, and when a customer activates 
                            their license, two files will be created on their machine. One 
                            file is at <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">C:\ProgramData\Company Name\license.bin</span> or 
                            <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">~/Library/Application Support/com.Company Name/license.bin</span> on macOS
                            and the other file is stored at 
                            <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">C:\ProgramData\HyperformanceSolutions\hwinfo.bin</span> or 
                            <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">~/Library/Application Support/com.HyperformanceSolutions/hwinfo.bin</span>. 
                        </p>
                        <p>
                            <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">license.bin</span> stores 
                            that machine&apos;s license data for your site. All of your software should supply the same company 
                            name so that minimal API requests are made per customer. When activating a license, 
                            the Rust library will automatically renew the expiration for all of that store&apos;s 
                            software.
                        </p>
                        <p>
                        <span class="font-mono bg-gray-200 text-gray-800 px-1 rounded">hwinfo.bin</span> on the 
                        other hand stores some generic hardware information that will be populated 
                        if the end user consents to sharing their hardware information. If at any time 
                        the user wants to cancel their consent, they are welcome to delete this file, and 
                        in the next automatic license activation request, their machine stats will be 
                        deleted from our database. Once Software Licensor has enough data to analyze, we 
                        will make a new menu that shows anonymized hardware statistics: things like 
                        how many CPU cores people have, how much RAM people have, and what SIMD instruction sets 
                        are available on the average machine.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </CardContent>
    </Card>
    );
}

export default Docs;