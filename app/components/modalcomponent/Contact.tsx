// components/Contact.tsx
'use client'
import Image from "next/image";
import { FiCopy } from "react-icons/fi";
import { FaWhatsapp  } from "react-icons/fa";
import { FC, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ContactProps {
  contactName: string;
  phoneNumber: string;
  wsLink: string;
}

interface CopyButtonProps {
    text: string;
  }
  
  const CopyButton = ({ text }: CopyButtonProps) => {
    // const [copied, setCopied] = useState(false);
    const notify = () => toast.success("Copied to clipboard",
    {
      autoClose: 800,
      position: 'top-center',
      closeOnClick: true,
    }
  );
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(text);
      // setCopied(true);
      // setTimeout(() => {
      //   setCopied(false);
      // }, 800);
      notify()
    };
  
    return (
      <button onClick={copyToClipboard} className="ml-2 font-black flex flex-row items-center">
        <FiCopy className="text-black" />
        {/* {copied ? (
          <span className="ml-1 text-center justify-center items-center text-gray-500">
            Copied!
          </span>
        ) : null} */}
      </button>
    );
  };


const Contact: FC<ContactProps> = ({ contactName, phoneNumber, wsLink }) => {
  return (
    <div className="flex items-center justify-center border rounded-lg p-2 my-1 bg-white shadow-md">
      <div className="grid grid-cols-3 gap-4">
        <h3 className="text-base text-balance font-normal text-gray-800">
          {contactName}
        </h3>
        <h3 className="flex flex-row text-base text-balance font-normal text-gray-800">
          {phoneNumber}
          <CopyButton text={phoneNumber} />
        </h3>

        <a 
          href={wsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-end text-black"
        >
          <FaWhatsapp className="mr-2" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
