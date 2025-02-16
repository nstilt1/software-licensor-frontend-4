import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Button } from "@/components/ui/button";

const CodeSnippetDialog = ({ open, onOpenChange, apiKey, selectedProducts }) => {
    const generateCode = () => {
      let code = `
  class MyLicensingStatus : public SoftwareLicensorStatus
  {
  public:
      juce::String getStoreId() override
      {
          return juce::String("${apiKey}"); 
      }
  
      juce::String getCompanyName() override
      {
          // used to pick a license file storage location 
          return juce::String("MyCompanyName");
      }
  
      std::vector<juce::String> getProductIdsAndPubkeys() override
      {
          std::vector<juce::String> productIdsAndPubkeys;`;
      selectedProducts.forEach(product => {
        code += `
          productIdsAndPubkeys.push_back("${product.id};${product.pubkey}");`;
      });
      code += `
          return productIdsAndPubkeys;
      }
  };`.trim();
      return code;
    };
  
    const cppCode = generateCode();
  
    const copyCode = () => {
      navigator.clipboard.writeText(cppCode);
    };
  
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogPortal>
          <DialogOverlay />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>C++ Code Snippet</DialogTitle>
            </DialogHeader>
            <div className="code-container" style={{ marginBottom: '1rem' }}>
              <SyntaxHighlighter language="cpp" style={oneDark}>
                {cppCode}
              </SyntaxHighlighter>
            </div>
            <DialogFooter>
              <Button onClick={copyCode}>Copy Code</Button>
              <Button onClick={() => onOpenChange(false)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    );
  };

export default CodeSnippetDialog;