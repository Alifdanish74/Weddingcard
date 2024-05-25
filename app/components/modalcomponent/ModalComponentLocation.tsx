// components/ModalComponentLocation.js
import React from "react";
import { TbMap2 } from "react-icons/tb";
import { FaWaze } from "react-icons/fa";

interface ModalComponentLocationProps {
}

const ModalComponentLocation: React.FC<ModalComponentLocationProps> = () => {
  return (
    <>
      <div className="flex flex-col mb-5 min-h-[70vh]">
        <h2 className="text-lg mb-4 text-center font-bold text-gray-500">
          Location
        </h2>
        <h2 className="text-lg text-center font-semibold text-gray-700">
          BIZMILLA @ GAMUDA GARDENS
        </h2>
        <h2 className="text-md mb-4 text-center font-medium text-gray-700">
          Persiaran Gamuda Gardens Gamuda Gardens, 48050 Rawang, Selangor
        </h2>

        <div className="border-2 border-slate-500">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.271219041866!2d101.53559487478375!3d3.2828043966921463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4379d6043fe7%3A0x5625f38f186d59a9!2sBIZMILLA%20%40%20GAMUDA%20GARDENS!5e0!3m2!1sen!2smy!4v1716219423390!5m2!1sen!2smy"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="mt-4 flex space-x-4 text-base font-semibold justify-center items-center">
          <button className="flex items-center bg-transparent text-gray-800 px-3 py-2 rounded hover:bg-gray-200 transition-colors">
            <a
              href="https://maps.app.goo.gl/UYzkgvmfF2KmX6RP8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <TbMap2 className="mr-2 text-2xl" />
              Google Maps
            </a>
          </button>
          <button className="flex items-center bg-transparent text-gray-800 px-3 py-2 rounded hover:bg-gray-200 transition-colors">
            <a
              href="https://ul.waze.com/ul?place=ChIJ5z8E1nlDzDERqVltGI_zJVY&ll=3.28280440%2C101.53816980&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaWaze className="mr-2 text-2xl" />
              Waze
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalComponentLocation;
