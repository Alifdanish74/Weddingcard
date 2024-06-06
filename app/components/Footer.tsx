import React from "react";
import Footerlogo from "./Footerlogo";
import Lebihlanjut from "./Lebihlanjut";

type Props = {};

function Footer({}: Props) {
  return (
    <footer
      id="hashtag"
      className="flex flex-col text-center content-center justify-center container pt-5"
    >
      <h1 className="text-black font-[gormorant] my-4 text-xl">
        #DANISH & IQKRIANY
      </h1>

      <br></br>
      <Footerlogo />
      <Lebihlanjut />
    </footer>
  );
}

export default Footer;
