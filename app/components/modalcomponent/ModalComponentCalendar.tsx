// components/ModalComponentCalendar.js
"use client";
import React, { useState } from "react";
import CalendarComponent from "./Calendar";
import { FaGoogle, FaApple } from "react-icons/fa";

interface ModalComponentCalendarProps {}

const ModalComponentCalendar: React.FC<ModalComponentCalendarProps> = () => {
  return (
    <>
      <div className="flex flex-col mb-5 min-h-[80vh]">
        <h2 className="text-lg mb-2 text-center font-bold text-gray-500">
          Calendar
        </h2>

        <h2 className="text-lg pb-4 text-center font-semibold text-gray-500">
          10 Ogos 2024 , Sabtu
        </h2>

        <div className=" p-4 flex flex-col items-center justify-center">
          <CalendarComponent />
        </div>

        <div className=" flex flex-col space-x-4 text-base font-semibold justify-center items-center">
          <button className="flex items-center bg-transparent text-gray-800 px-3 py-2 rounded hover:bg-gray-200 transition-colors">
            <a
              href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MTIxNGZodG42Z2xsYmcwNTdtcXQwcWY2YmwgYWxpZmRhbmlzaDc0QG0&tmsrc=alifdanish74%40gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaGoogle className="mr-2 text-2xl" />
              Add to Google Calendar
            </a>
          </button>

          {/* <button className="flex items-center bg-transparent text-gray-800 px-3 py-2 rounded hover:bg-gray-200 transition-colors">
            <a
              href="https://maps.app.goo.gl/UYzkgvmfF2KmX6RP8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaApple className="mr-2 text-2xl" />
              Add to Apple Calendar
            </a>
          </button> */}
        </div>
      </div>
    </>
  );
};

export default ModalComponentCalendar;
