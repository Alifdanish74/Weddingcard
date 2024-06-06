// components/ModalComponentRSVPSlot.js
import { useState } from "react";
import axios from "axios";
import { IoIosSend } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ModalComponentRSVPSlotProps {
  onConfirm: (nextModal: string) => void;
  onCancel: () => void;
  onGuestbookUpdate: () => void;
}

const ModalComponentRSVPSlot: React.FC<ModalComponentRSVPSlotProps> = ({
  onCancel,
  onGuestbookUpdate,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dewasa, setDewasa] = useState(1);
  const [kanak, setKanak] = useState(0);
  const [ucapan, setUcapan] = useState("");
  const [timeslot, setTimeSlot] = useState("7:30 PM - 8:30 PM | Saudara-mara");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const notify = () =>
      toast.success("Your RSVP has been submitted", {
        autoClose: 1800,
        position: "top-center",
        closeOnClick: true,
      });
    try {
      const form = {
        name,
        phone,
        dewasa,
        kanak,
        timeslot,
        ucapan,
      };

      const response = await fetch("/api/submit-form", {
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

      console.log(content);

      // alert(content.data.tableRange);

      setName("");
      setPhone("");
      setDewasa(1);
      setKanak(0);
      setTimeSlot("7:30 PM - 9:00 PM | Saudara-mara");
      setUcapan("");

      notify();

      // If form submission is successful, trigger guestbook update in Base component
      onGuestbookUpdate();

      onCancel();

      console.log(form);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col mb-5 min-h-[75vh]">
        <h2 className="text-lg text-center mb-4 font-bold text-gray-500">
          RSVP
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-4 pt-0 text-black bg-white shadow-md border-2 rounded-md"
        >
          {/* Name start */}
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
          {/* Name end */}

          {/* Phone number start */}
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
          {/* Phone number end */}
          {/* Time slot start */}
          <div className="mb-2">
            <label
              htmlFor="timeslot"
              className="block text-center text-gray-700 font-bold mb-2"
            >
              Masa Kehadiran
            </label>
            <select
              id="timeslot"
              value={timeslot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className="w-full p-1 border border-gray-300 rounded-md"
            >
              {[
                "7:30 PM - 9:00 PM | Saudara-mara",
                "9:00 PM - 11:00 PM | Rakan-rakan",
              ].map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          {/* Time slot end */}
          {/* Jumlah dewasa start */}
          <div className="mb-2">
            <label
              htmlFor="dewasa"
              className="block text-center text-gray-700 font-bold "
            >
              Jumlah Dewasa
            </label>
            <select
              id="dewasa"
              value={dewasa}
              onChange={(e) => setDewasa(parseInt(e.target.value))}
              className="w-full p-1 border border-gray-300 rounded-md"
            >
              {[1, 2, 3, 4, 5].map((num1) => (
                <option key={num1} value={num1}>
                  {num1}
                </option>
              ))}
            </select>
          </div>
          {/* dewasa end */}
          {/* Jumlah kanak-kanak start */}
          <div className="mb-2">
            <label
              htmlFor="kanak"
              className="block text-center text-gray-700 font-bold"
            >
              Jumlah Kanak-kanak
            </label>
            <select
              id="kanak"
              value={kanak}
              onChange={(e) => setKanak(parseInt(e.target.value))}
              className="w-full p-1 border border-gray-300 rounded-md"
            >
              {[0, 1, 2, 3, 4].map((num2) => (
                <option key={num2} value={num2}>
                  {num2}
                </option>
              ))}
            </select>
          </div>
          {/* kanak-kanak end */}
          {/* Ucapan start */}
          <div className="mb-2">
            <label
              htmlFor="ucapan"
              className="block text-center text-gray-700 font-bold"
            >
              Ucapan
            </label>
            <textarea
              id="ucapan"
              value={ucapan}
              onChange={(e) => setUcapan(e.target.value)}
              className="w-full p-2 h-20 border border-gray-300 rounded-md"
            />
          </div>
          {/* Ucapan end */}
          {/* <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button> */}
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

        {/* Button */}
      </div>
    </>
  );
};

export default ModalComponentRSVPSlot;
