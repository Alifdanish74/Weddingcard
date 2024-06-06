import React from "react";
import Image from "next/image";
import ImageLogo from "../assets/LogoJomKahwinFullBlack_clear.png";

type Props = {};

function Footerlogo({}: Props) {
  return (
    <div className="flex flex-col my-4 items-center justify-center">
      <h1 className="text-black my-1 text-xs">Dizahirkan penuh ❤️ oleh</h1>
      <a href="http://wasap.my/601127877926/JomKahwinE-Wedding-Invitation">
        <Image src={ImageLogo} width={150} height={150} alt="Logo Jom Kahwin" />
      </a>
    </div>
  );
}

export default Footerlogo;
