'use client'
import React, { useState, useEffect } from "react";
import Base from "./components/Base";
import { BeatLoader } from "react-spinners";
import Head from "next/head";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const runtime = 'edge'

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a data fetch or some async operation
  useEffect(() => {
    // Simulate a delay to showcase the spinner
    setTimeout(() => {
      setLoading(false);
    }, 400); // Adjust the delay as needed
  }, []);

  return (
    <div className="bg-white h-screen overflow-auto overflow-y-scroll">
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer />
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <BeatLoader color={"#123abc"} loading={loading} size={30} />
        </div>
      ) : (
        <Base />
      )}
    </div>
  );
};

export default HomePage;
