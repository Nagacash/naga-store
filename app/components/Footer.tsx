import Link from 'next/link';
import React from 'react';

const links = [
    { name: "Home", href: "/" },
    { name: "Men", href: "/Men" },
    { name: "Women", href: "/Women" },
    // { name: "Teens", href: "/Teens" },
    { name: "Unisex", href: "/Unisex" },
  ];

const Footer: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2 ">
            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
              About
            </a><br/>
            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
              Contact
            </a>
            <br/>
            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
              AGBs
            </a>
          </div>
          <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            GET IN<span className="text-primary">TOUCH</span>
          </h1>
        </Link><br/><br/>
        
        
          {/* Add other navigation links as needed */}
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <a href="#" className="text-black-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              {/* Facebook icon SVG code */}
            </svg>
          </a>
          {/* Add other social media icons as needed */}
        </div>
        
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2024 Naga Apparel, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;