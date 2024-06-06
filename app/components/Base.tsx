"use client";
import React, { useState, useRef } from "react";
import Content from "./Content";
import WeddingInfo from "./WeddingInfo";
import AudioPlayer from "./audioplayer/AudioPlayer";
import { Border } from "./svgs";
import Navbar from "./Navbar";
import Countdown from "./Countdown";
import Doa from "./Doa";
import Imgprayer from "../assets/bg-prayer.png";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import Entrance from "./Entrance";
import Guestbook from "./Guestbook";

const Base = () => {
  const [showEntrance, setShowEntrance] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [guestbookUpdated, setGuestbookUpdated] = useState(false);

  const handleGuestbookUpdate = () => {
    setGuestbookUpdated(true);
  };

  const handleEntranceClose = () => {
    setShowEntrance(false);
    setIsPlaying(true);
  };

  return (
    <div className="main-div main-card bg-white bg-main_bg_image z-10">
      {showEntrance ? (
        <Entrance onClose={handleEntranceClose} setIsPlaying={setIsPlaying} />
      ) : (
        <>
          <section id="navbar" className="z-20">
            <Navbar onGuestbookUpdate={handleGuestbookUpdate} />
          </section>

          <ToastContainer />
          <section id="content">
            <Content />
          </section>

          <AudioPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />{" "}

          {/* Pass isPlaying and setIsPlaying as props */}
          <div className="bg-card_bg_image pb-16">
            <section id="weddinginfo" className="container mx-auto">
              <WeddingInfo />
            </section>

            <section id="border1" className="container py-5">
              <Border className="pl-5 pr-5 w-full h-5 container" />
            </section>

            <section id="countdown" className="container mx-auto px-10">
              <Countdown />
            </section>

            <section id="border2" className="container py-5">
              <Border className="pl-5 pr-5 w-full h-5 container" />
            </section>

            <section
              id="guestbook"
              className="container justify-center items-center"
            >
              <Guestbook guestbookUpdated={guestbookUpdated} />
            </section>

            <section id="border2" className="container py-5">
              <Border className="pl-5 pr-5 w-full h-5 container" />
            </section>

            <section
              id="prayer"
              className="container flex justify-center items-center"
            >
              <Doa />
            </section>

            <section id="border3" className="container py-5">
              <Border className="pl-5 pr-5 w-full h-5 container" />
            </section>

            <footer
              id="hashtag"
              className="flex content-center justify-center container pt-5 pb-10"
            >
              <h1 className="text-black font-[gormorant] text-xl">
                #DANISH & IQKRIANY
              </h1>
            </footer>
          </div>
        </>
      )}
    </div>
  );
};

export default Base;
