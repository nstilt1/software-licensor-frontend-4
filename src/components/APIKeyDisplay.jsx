import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from './ui/toast';
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
  } from "@/components/ui/context-menu";

  import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from "./ui/dialog";

import { Button } from "@/components/ui/button";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";

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
import { debugLog } from './storesTable';
import LongCopyableTextField from './LongCopyableTextField';
import { Checkbox } from './ui/checkbox';
import CodeSnippetDialog from './CodeSnippet';

const FrequencyTooltip = () => {
    return (
        <p>
            The frequency dictates the minimum amount of time that must pass 
            before a client will try to reconnect with the Service to check 
            on the status of their license(s). This is important in the event 
            that a user regenerates their license code or refunds a purchase: 
            more frequent checks can disable the machine&apos;s license sooner... 
            if it is connected to the internet and makes the API request.
        </p>
    );
}

const ExpirationTooltip = () => {
    return (
    <p>
        The expiration period determines how long a client can go 
        on for without contacting the service. Many end-users would 
        prefer for this to be a long period of time, and the expiration 
        is always reset each time the client connects.
    </p>
    );
}

const APIKeyDisplay = ({ 
    apiKey, 
    configs,
    products,
    updateSettings,
    OLFH, setOLFH,
    PLED, setPLED,
    PLFH, setPLFH,
    SLED, setSLED,
    SLELH, setSLELH,
    SLFH, setSLFH,
    TLED, setTLED,
    TLFH, setTLFH,
    updateVersion,
    updateVersionNewVersion,
    setUpdateVersionStoreId,
    setUpdateVersionProductId,
    setUpdateVersionNewVersion,
    updateVersionDialogOpen,
    setUpdateVersionDialogOpen
}) => {
    const [open, setOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [codeDialogOpen, setCodeDialogOpen] = useState(false);
    const [currentVersion, setCurrentVersion] = useState("");

  const { toast } = useToast();

  const handleCheckboxChange = (product, checked) => {
    if (checked) {
      setSelectedProducts(prev => [...prev, { id: product.id, pubkey: product.pubkey }]);
    } else {
      setSelectedProducts(prev => prev.filter(p => p.id !== product.id));
    }
  };

  if (!apiKey) {
    return <span>Undefined API Key</span>;
  }

  // Create a formatted version with the first 8 characters, ellipsis, and last 4 characters.
  const formattedKey = `${apiKey.slice(0, 8)}...${apiKey.slice(-4)}`;

  // Function to copy the API key and display a toast notification.
  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey)
      .then(() => {
        toast({
          title: 'Copied!',
          description: 'The full API key has been copied to your clipboard.',
          action: (
            <ToastAction altText="Okay">Okay</ToastAction>
          )
        });
      })
      .catch((err) => {
        console.error('Failed to copy the API key: ', err);
        toast({
          title: 'Error',
          description: 'Failed to copy API key. Please try again.',
          action: (
            <ToastAction altText="Okay">Okay</ToastAction>
          )
        });
      });
  };

  return (
    <>
    <ContextMenu>
        <ContextMenuTrigger className="flex items-center justify-center rounded-md border text-sm">
            <span
                onClick={copyToClipboard}
                style={{ cursor: 'pointer', userSelect: 'none' }}
                title="Click to copy full API key"
                >
                {formattedKey}
            </span>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
            <ContextMenuItem inset onSelect={() => setTimeout(() => setOpen(true), 0)}>
                Update Settings
            </ContextMenuItem>
            <ContextMenuItem inset onSelect={() => {
                setSelectedProducts([]);
                setTimeout(() => setProductsOpen(true), 0);
            }}>
                View Products
            </ContextMenuItem>
            
        </ContextMenuContent>
    </ContextMenu>

    {/* Render the Update Store Settings dialog outside of the context menu */}
    {open && (<Dialog open={open} onOpenChange={setOpen}>
        <DialogPortal>
            <DialogOverlay />
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Update Store Settings</DialogTitle>
                    <DialogDescription>
                        
                    </DialogDescription>
                </DialogHeader>
                <div className='dialog-body'>
                    <Table>
                        <TableHeader>
                            <TableRow key="0">
                                <TableHead className="w-[100px]">License Type</TableHead>
                                <TableHead>Setting</TableHead>
                                <TableHead>Current Value</TableHead>
                                <TableHead>Unit</TableHead>
                                <TableHead>Proposed Value</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <TableRow key="1">
                                            <TableCell>Offline</TableCell>
                                            <TableCell>Frequency</TableCell>
                                            <TableCell>{configs?.offline_license_frequency_hours ?? "Not set"}</TableCell>
                                            <TableCell>Hours</TableCell>
                                            <TableCell><input type="number" onChange={(e) => setOLFH(Number(e.target.value))} value={OLFH} /></TableCell>
                                        </TableRow>
                                    </TooltipTrigger>
                                    <TooltipContent className="max-w-[300px] whitespace-normal">
                                        <FrequencyTooltip />
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <TableRow key="2">
                                            <TableCell>Perpetual</TableCell>
                                            <TableCell>Expiration</TableCell>
                                            <TableCell>{configs?.perpetual_license_expiration_days ?? "Not set"}</TableCell>
                                            <TableCell>Days</TableCell>
                                            <TableCell><input type="number" onChange={(e) => setPLED(Number(e.target.value))} value={PLED} /></TableCell>
                                        </TableRow>
                                    </TooltipTrigger>
                                    <TooltipContent className="max-w-[300px] whitespace-normal">
                                        <ExpirationTooltip />
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <TableRow key="3">
                                            <TableCell>Perpetual</TableCell>
                                            <TableCell>Frequency</TableCell>
                                            <TableCell>{configs?.perpetual_license_frequency_hours ?? "Not set"}</TableCell>
                                            <TableCell>Hours</TableCell>
                                            <TableCell><input type="number" onChange={(e) => setPLFH(Number(e.target.value))} value={PLFH} /></TableCell>
                                        </TableRow>
                                    </TooltipTrigger>
                                    <TooltipContent className="max-w-[300px] whitespace-normal">
                                        <FrequencyTooltip />
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <TableRow key="4">
                                            <TableCell>Subscription</TableCell>
                                            <TableCell>Expiration</TableCell>
                                            <TableCell>{configs?.subscription_license_expiration_days ?? "Not set"}</TableCell>
                                            <TableCell>Days</TableCell>
                                            <TableCell><input type="number" onChange={(e) => setSLED(Number(e.target.value))} value={SLED} /></TableCell>
                                        </TableRow>
                                    </TooltipTrigger>
                                    <TooltipContent className="max-w-[300px] whitespace-normal">
                                        <ExpirationTooltip />
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <TableRow key="5">
                                            <TableCell>Subscription</TableCell>
                                            <TableCell>Expiration Leniency</TableCell>
                                            <TableCell>{configs?.subscription_license_expiration_leniency_hours ?? "Not set"}</TableCell>
                                            <TableCell>Hours</TableCell>
                                            <TableCell><input type="number" onChange={(e) => setSLELH(Number(e.target.value))} value={SLELH} /></TableCell>
                                        </TableRow>
                                    </TooltipTrigger>
                                    <TooltipContent className="max-w-[300px] whitespace-normal">
                                        <p>
                                            The expiration leniency for subscriptions adds this amount 
                                            of time to the expiration period. This parameter can help 
                                            ensure that subscription licenses continue to function 
                                            even after a subscription period ends. Don&apos;t worry, the 
                                            client will still try to connect with the Service after the 
                                            period ends, so feel free to set this value to a week.
                                        </p>
                                        <p>
                                            Also, don&apos;t over-think this parameter much because you will 
                                            still need to implement subscription purchases and renewals, 
                                            integrating with the Software Licensor backend. Subscriptions 
                                            aren&apos;t fully implemented due to the WooCommerce Subscriptions 
                                            require a subscription... so it is not fully implemented.
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <TableRow key="6">
                                            <TableCell>Subscription</TableCell>
                                            <TableCell>Frequency</TableCell>
                                            <TableCell>{configs?.subscription_license_frequency_hours ?? "Not set"}</TableCell>
                                            <TableCell>Hours</TableCell>
                                            <TableCell><input type="number" onChange={(e) => setSLFH(Number(e.target.value))} value={SLFH} /></TableCell>
                                        </TableRow>
                                    </TooltipTrigger>
                                    <TooltipContent className="max-w-[300px] whitespace-normal">
                                        <FrequencyTooltip />
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <TableRow key="7">
                                            <TableCell>Trial</TableCell>
                                            <TableCell>Expiration</TableCell>
                                            <TableCell>{configs?.trial_license_expiration_days ?? "Not set"}</TableCell>
                                            <TableCell>Days</TableCell>
                                            <TableCell><input type="number" onChange={(e) => setTLED(Number(e.target.value))} value={TLED} /></TableCell>
                                        </TableRow>
                                    </TooltipTrigger>
                                    <TooltipContent className="max-w-[300px] whitespace-normal">
                                        <ExpirationTooltip />
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <TableRow key="8">
                                            <TableCell>Trial</TableCell>
                                            <TableCell>Frequency</TableCell>
                                            <TableCell>{configs?.trial_license_frequency_hours ?? "Not set"}</TableCell>
                                            <TableCell>Hours</TableCell>
                                            <TableCell><input type="number" onChange={(e) => setTLFH(Number(e.target.value))} value={TLFH} /></TableCell>
                                        </TableRow>
                                    </TooltipTrigger>
                                    <TooltipContent className="max-w-[300px] whitespace-normal">
                                        <FrequencyTooltip />
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </TableBody>
                    </Table>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={(event) => {
                        event.preventDefault();
                        setOpen(false);
                    }}>Close</Button>
                    <Button type="submit" onClick={(event) => {
                        event.preventDefault();
                        updateSettings(apiKey);
                    }}>Update Settings</Button>
                </DialogFooter>
            </DialogContent>
        </DialogPortal>
    </Dialog>
    )}
    {/* Render the View Products dialog outside of the context menu */}
    {productsOpen && (<Dialog open={productsOpen} onOpenChange={setProductsOpen}>
        <DialogPortal>
            <DialogOverlay />
            <DialogContent className="max-w-[800px] md:max-w[800px]">
                <DialogHeader>
                    <DialogTitle>View Products</DialogTitle>
                    <DialogDescription>
                        Here, you can view your store&apos;s products. Note that you 
                        cannot create a product here. That must be done using the 
                        store&apos;s Software Licensor interface. This is because 
                        the product names need to be associated with Product IDs, 
                        and it takes too many API requests to ensure that the Product 
                        IDs are always up to date in the Store&apos;s database.
                    </DialogDescription>
                </DialogHeader>
                <div className='products-table'>
                    <Table>
                        <TableHeader>
                            <TableRow key="0">
                                <TableHead>Select</TableHead>
                                <TableHead className="w-[100px]">Product ID</TableHead>
                                <TableHead>Product Name</TableHead>
                                <TableHead>Product Public Key</TableHead>
                                <TableHead>Offline Allowed?</TableHead>
                                <TableHead>Max Machines per License</TableHead>
                                <TableHead>Version</TableHead>
                                <TableHead>Update Version</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((product) => {
                                return (
                                    <TableRow key={product?.id}>
                                        {debugLog("plugin = " + product)}
                                        {debugLog(product)}
                                        <TableCell>
                                            <Checkbox 
                                                onCheckedChange={(checked) => handleCheckboxChange(product, checked)}
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium"><LongCopyableTextField textToCopy={product?.id} name="Product ID" /></TableCell>
                                        <TableCell>{product?.name}</TableCell>
                                        <TableCell><LongCopyableTextField textToCopy={product?.pubkey} name="public key" /></TableCell>
                                        <TableCell>{product?.offline_allowed ? "true" : "false"}</TableCell>
                                        <TableCell>{product?.max_machines_per_license}</TableCell>
                                        <TableCell>{product?.version}</TableCell>
                                        <TableCell><Button type="submit" onClick={(event) => {
                                            event.preventDefault();
                                            setUpdateVersionDialogOpen(true);
                                            setUpdateVersionStoreId(apiKey);
                                            setUpdateVersionProductId(product?.id);
                                            setCurrentVersion(product?.version);
                                        }}>Update Version</Button></TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={(event) => {
                        event.preventDefault();
                        setProductsOpen(false);
                    }}>Close</Button>
                    <Button 
                        type="submit" 
                        disabled={selectedProducts.length === 0}
                        onClick={(event) => {
                            event.preventDefault();
                            setCodeDialogOpen(true);
                    }}>Generate Code</Button>
                </DialogFooter>
            </DialogContent>
        </DialogPortal>
    </Dialog>
    )}
    <CodeSnippetDialog
        open={codeDialogOpen}
        onOpenChange={setCodeDialogOpen}
        apiKey={apiKey}
        selectedProducts={selectedProducts}
    />
    {updateVersionDialogOpen && (<Dialog open={updateVersionDialogOpen} onOpenChange={setUpdateVersionDialogOpen}>
        <DialogPortal>
            <DialogOverlay />
            <DialogContent className="max-w-[800px] md:max-w[800px]">
                <DialogHeader>
                    <DialogTitle>Update Version</DialogTitle>
                    <DialogDescription>
                        Update the version of your software here.
                    </DialogDescription>
                </DialogHeader>
                <Table>
                    <TableHeader>
                        <TableRow key="0">
                            <TableHead>Current Version</TableHead>
                            <TableHead>New Version</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1">
                            <TableCell>{currentVersion}</TableCell>
                            <TableCell>
                                <input
                                    type="text"
                                    className="appearance-none border-none text-sm leading-tight rounded-md w-full"
                                    placeholder={currentVersion}
                                    value={updateVersionNewVersion}
                                    onChange={(e) => setUpdateVersionNewVersion(e.target.value)}
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                    <DialogFooter>
                        <Button type="submit" onClick={(event) => {
                            event.preventDefault();
                            setUpdateVersionDialogOpen(false);
                        }}>Close</Button>
                        <Button
                            type="submit"
                            disabled={updateVersionNewVersion.length === 0}
                            onClick={async (event) => {
                                event.preventDefault();
                                await updateVersion();
                                setUpdateVersionDialogOpen(false);
                            }}>Update Version</Button>
                    </DialogFooter>
                </Table>
            </DialogContent>
        </DialogPortal>
    </Dialog>)}
    </>
  );
};

export default APIKeyDisplay;
