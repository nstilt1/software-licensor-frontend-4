import React from "react";

const Navbar = ({signOut}) => {
    return (
        <nav className="bg-gray-800 text-white py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left: Logo text linking to home */}
        <a href="https://softwarelicensor.com/" className="text-lg font-semibold">
          Software Licensor
        </a>
        {/* Right: Navigation links */}
        <div className="space-x-4">
          <a href="https://softwarelicensor.com/" className="hover:underline">
            Home
          </a>
            <a onClick={signOut} className="hover:underline">
              Sign Out
            </a>
          </div>
          </div>
        </nav>
    );
};
    
export default Navbar;