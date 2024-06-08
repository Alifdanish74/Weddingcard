// components/ModalComponentContact.js
import React from "react";
import Contact from "./Contact";
import "react-toastify/dist/ReactToastify.css";

interface ModalComponentContactProps {

}

const ModalComponentContact: React.FC<ModalComponentContactProps> = () => {
  return (
    <>
      <div className="flex flex-col mb-5 min-h-[30vh]">
        <h2 className="text-lg mb-4 text-center font-bold text-gray-500">
          Contact
        </h2>
        {/* Contact 1 */}
        <Contact
          contactName="Arshad"
          phoneNumber="0123157930"
          wsLink="http://wasap.my/601123268530/WalimatulurusDanish&Iqkriany"
        />

        {/* Contact 2 */}
        <Contact
          contactName="Rohayu"
          phoneNumber="0196224566"
          wsLink="http://wasap.my/60196224566/WalimatulurusDanish&Iqkriany"
        />
        {/* Contact 3 */}
        <Contact
          contactName="Nor Azean"
          phoneNumber="0193582242"
          wsLink="http://wasap.my/60193582242/WalimatulurusDanish&Iqkriany"
        />
      </div>
    </>
  );
};

export default ModalComponentContact;
