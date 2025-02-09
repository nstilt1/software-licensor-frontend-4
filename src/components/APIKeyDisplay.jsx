import React from 'react';
import { useToast } from '@/components/hooks/use-toast';

const APIKeyDisplay = ({ apiKey }) => {
  const { toast } = useToast();

  // Create a formatted version with the first 8 characters, ellipsis, and last 4 characters.
  const formattedKey = `${apiKey.slice(0, 8)}...${apiKey.slice(-4)}`;

  // Function to copy the API key and display a toast notification.
  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey)
      .then(() => {
        toast({
          title: 'Copied!',
          description: 'The full API key has been copied to your clipboard.',
        });
      })
      .catch((err) => {
        console.error('Failed to copy the API key: ', err);
        toast({
          title: 'Error',
          description: 'Failed to copy API key. Please try again.',
        });
      });
  };

  return (
    <span
      onClick={copyToClipboard}
      style={{ cursor: 'pointer', userSelect: 'none' }}
      title="Click to copy full API key"
    >
      {formattedKey}
    </span>
  );
};

export default APIKeyDisplay;
