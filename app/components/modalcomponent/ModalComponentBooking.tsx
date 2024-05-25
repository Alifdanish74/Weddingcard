import { useState } from "react";
import axios from "axios";
import { IoIosSend } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";

interface ModalComponentBookingProps {
  onConfirm: (nextModal: string) => void;
  onCancel: () => void;
  title: string; // New prop
  image: string;
  onBookingSubmit: () => void; // New prop
}

const ModalComponentBooking: React.FC<ModalComponentBookingProps> = ({
  onConfirm,
  onCancel,
  title,
  image, // New prop
  onBookingSubmit // New prop
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [item, setItem] = useState(title);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const notify = () =>
      toast.success("Your booking has been submitted", {
        autoClose: 1800,
        position: "top-center",
        closeOnClick: true,
      });
    try {
      const form = {
        name,
        phone,
        item,
      };

      const response = await fetch("/api/submit-form-booking", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const content = await response.json();

      setName("");
      setPhone("");
      setItem(title);
      notify();
      onCancel();
      onBookingSubmit(); // Notify parent about the successful booking

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col mb-5 min-h-[35vh]">
        <h2 className="text-lg text-center mb-4 font-bold text-gray-500">
          Booking Wishlist Item
        </h2>
        <div className="flex flex-col items-center border rounded-lg p-4 my-2 bg-white shadow-md">
          <div className="flex-shrink-0 mr-4">
            <Image
              src={image}
              alt="Product Image"
              width={100}
              height={100}
              className="rounded"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-base text-center text-balance font-normal text-gray-800">
              {title}
            </h3>
          </div>
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto p-4 pt-0 text-black"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-center mt-2 text-gray-700 font-bold"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="phone"
                className="block text-center text-gray-700 font-bold"
              >
                Nombor Telefon
              </label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="item"
                className="block text-center text-gray-700 font-bold"
              >
                Item
              </label>
              <input
                type="text"
                id="item"
                value={item}
                onChange={(e) => setItem(title)}
                className="w-full p-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mt-4 flex space-x-4 text-sm font-semibold justify-center items-center">
              <button
                type="submit"
                className="flex items-center bg-gray-100 text-gray-800 px-3 py-2 rounded hover:bg-gray-200 transition-colors"
              >
                <IoIosSend className="mr-2" />
                Submit
              </button>
              <button
                onClick={onCancel}
                className="flex items-center bg-gray-100 text-gray-800 px-3 py-2 rounded hover:bg-gray-200 transition-colors"
              >
                <MdOutlineCancel className="mr-2" />
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalComponentBooking;
