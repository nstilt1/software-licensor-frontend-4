import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white px-4 py-3 fixed bottom-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-center space-x-6">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </footer>
    );
  };

export default Footer;