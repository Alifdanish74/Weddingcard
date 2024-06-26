// components/Modal.js
'use client'
import React, { useState } from "react";
import ModalComponentRSVP from "./modalcomponent/ModalComponentRSVP";
import ModalComponentMoneyGift from "./modalcomponent/ModalComponentMoneyGift";
import ModalComponentWishlist from "./modalcomponent/ModalComponentWishlist";
import ModalComponentContact from "./modalcomponent/ModalComponentContact";
import ModalComponentLocation from "./modalcomponent/ModalComponentLocation";
import ModalComponentCalendar from "./modalcomponent/ModalComponentCalendar";
import ModalComponentBooking from "./modalcomponent/ModalComponentBooking";
import ModalComponentRSVPSlot from "./modalcomponent/ModalComponentRSVPSlot";
import ModalComponentRSVPSlotTidakHadir from "./modalcomponent/ModalComponentRSVPSlotTidakHadir";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalType: string; // Added prop to specify which modal component to render
  onConfirm: (nextModal: string) => void;
  onCancel: () => void;
  isClosing: boolean;
  onGuestbookUpdate: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, modalType, onConfirm, onCancel, onGuestbookUpdate   }) => {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const onConfirmBook = (nextModal: string, title: string, image: string) => {
    setTitle(title);
    setImage(image);
    onConfirm(nextModal);
  };

  // const handleBookingSubmit = () => {
  //   setIsBooked(true);
  //   onCancel();
  // };


  const renderModalContent = () => {
    switch (modalType) {
      case 'RSVP':
        return <ModalComponentRSVP onConfirm={onConfirm} />;
      case 'Money Gift':
        return <ModalComponentMoneyGift />;
      case 'Wishlist':
        return <ModalComponentWishlist onConfirmBook={onConfirmBook}/>;
      case 'Contact':
        return <ModalComponentContact  />;
      case 'Location':
        return <ModalComponentLocation />;
      case 'Calendar':
        return <ModalComponentCalendar/>;
      case 'RSVPSlot': // Add case for Booking modal
        return <ModalComponentRSVPSlot onConfirm={onConfirm} onCancel={onCancel} onGuestbookUpdate={onGuestbookUpdate} />;
      case 'RSVPTidakHadir': // Add case for Booking modal
        return <ModalComponentRSVPSlotTidakHadir onConfirm={onConfirm} onCancel={onCancel} onGuestbookUpdate={onGuestbookUpdate} />;
      case 'Booking': // Add case for Booking modal
        return <ModalComponentBooking onCancel={onCancel} title={title} image={image}/>;
      default:
        return null;
    }
  };

  return (
    <div
      className={`fixed inset-0 overflow-y-scroll z-40 bg-gray-600 bg-opacity-50 flex items-end justify-center transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white p-4 rounded-t-xl shadow-lg pb-14 w-full max-w-[400px] mx-auto transition-transform duration-300 transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {renderModalContent()}
      </div>
    </div>
  );
}

export default Modal;