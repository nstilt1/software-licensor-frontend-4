
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from './ui/toast';

const LongCopyableTextField = ({ 
    textToCopy,
    name
}) => {
  const { toast } = useToast();

  if (!textToCopy) {
    return <span>Undefined {name}</span>;
  }

  // Create a formatted version with the first 8 characters, ellipsis, and last 4 characters.
  const formattedKey = `${textToCopy.slice(0, 8)}...${textToCopy.slice(-4)}`;

  // Function to copy the API key and display a toast notification.
  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        toast({
          title: 'Copied!',
          description: `The full ${name} has been copied to your clipboard.`,
          action: (
            <ToastAction altText="Okay">Okay</ToastAction>
          )
        });
      })
      .catch((err) => {
        console.error(`Failed to copy the ${name}: `, err);
        toast({
          title: 'Error',
          description: `Failed to copy ${name}. Please try again.`,
          action: (
            <ToastAction altText="Okay">Okay</ToastAction>
          )
        });
      });
  };
};

export default LongCopyableTextField;