"use client";

import { useState, useEffect } from "react";
import Modal from "./Modal";
import { IoReceiptOutline } from "react-icons/io5";
import { BiMoneyWithdraw } from "react-icons/bi";
import { CiGift } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaRegCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

interface NavbarProps {
  onGuestbookUpdate: () => void; // Define the type of the prop
}

export default function Navbar({ onGuestbookUpdate }: NavbarProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [newModal, setNewModal] = useState<string | null>(null); // To track the new modal to be opened
  const [isClosing, setIsClosing] = useState<boolean>(false); // To track if modal is closing

  const openModal = (modalName: string) => {
    if (activeModal === modalName) {
      setActiveModal(null); // Close the modal if it's already open
    } else {
      setNewModal(modalName); // Set the new modal to be opened
    }
  };

  const closeModal = () => {
    setIsClosing(true); // Set closing animation flag
    setTimeout(() => {
      setIsClosing(false); // Reset closing animation flag after animation duration
      setActiveModal(null); // Close the modal
    }, 200); // Adjust the duration to match the closing animation
  };

  const handleConfirm = (nextModal: string) => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setActiveModal(nextModal);
    }, 200);
  };

  useEffect(() => {
    if (newModal && activeModal) {
      setActiveModal(null); // Close the current modal first
      setNewModal(null); // Reset the new modal
      setTimeout(() => {
        setActiveModal(newModal); // Open the new modal after a delay
      }, 200); // Adjust the delay to match the closing animation duration
    } else if (newModal) {
      setActiveModal(newModal); // Open the new modal if no current modal is open
      setNewModal(null); // Reset the new modal
    }
  }, [newModal, activeModal]);

  return (
    <>
      <motion.div
        initial={{
          y: 30,
          opacity: 0,
        }}
        transition={{ duration: 0.6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="fixed w-full max-w-[400px] text-black bottom-0 flex flex-col justify-center z-50 min-h-16"
      >
        {/* Navbar */}
        <div id="buttondiv" className="main-div bg-white w-full border-t border-gray-200 rounded-t-3xl text-[10px] font-medium flex flex-wrap justify-around items-center p-2 min-h-16">
          <motion.button
            initial={{ opacity: 0.8 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.4, opacity: 1 },
            }}
            onClick={() => openModal("RSVP")}
            className="focus:outline-none flex flex-col items-center"
          >
            <IoReceiptOutline className="text-2xl mb-1" /> RSVP
          </motion.button>
          <motion.button
            initial={{ opacity: 0.8 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.4, opacity: 1 },
            }}
            onClick={() => openModal("Money Gift")}
            className="focus:outline-none flex flex-col items-center"
          >
            <BiMoneyWithdraw className="text-2xl mb-1" /> Money Gift
          </motion.button>
          <motion.button
            initial={{ opacity: 0.8 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.4, opacity: 1 },
            }}
            onClick={() => openModal("Wishlist")}
            className="focus:outline-none flex flex-col items-center"
          >
            <CiGift className="text-2xl mb-1" /> Wishlist
          </motion.button>
          <motion.button
            initial={{ opacity: 0.8 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.4, opacity: 1 },
            }}
            onClick={() => openModal("Contact")}
            className="focus:outline-none flex flex-col items-center"
          >
            <MdOutlineLocalPhone className="text-2xl mb-1" /> Contact
          </motion.button>
          <motion.button
            initial={{ opacity: 0.8 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.4, opacity: 1 },
            }}
            onClick={() => openModal("Location")}
            className="focus:outline-none flex flex-col items-center"
          >
            <SlLocationPin className="text-2xl mb-1" /> Location
          </motion.button>
          <motion.button
            initial={{ opacity: 0.8 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.4, opacity: 1 },
            }}
            onClick={() => openModal("Calendar")}
            className="focus:outline-none flex flex-col items-center"
          >
            <FaRegCalendarAlt className="text-2xl mb-1" /> Calendar
          </motion.button>
          {/* Other buttons */}
        </div>
      </motion.div>

      {/* Modals */}
      <Modal
        isOpen={activeModal !== null}
        onClose={closeModal}
        modalType={activeModal || ""}
        onConfirm={handleConfirm}
        onCancel={closeModal}
        isClosing={isClosing}
        onGuestbookUpdate={onGuestbookUpdate}  // Pass closing animation flag to the Modal component
      />
    </>
  );
}
