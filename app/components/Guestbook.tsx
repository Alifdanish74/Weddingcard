import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../app/fonts.css";

type UcapanData = {
  name: string;
  ucapan: string;
};

interface GuestbookProps {
  guestbookUpdated: boolean;
}

function Guestbook({ guestbookUpdated }: GuestbookProps) {
  const [ucapanData, setUcapanData] = useState<UcapanData[]>([]);

  const fetchGuestbookData = () => {
    fetch("/api/get-ucapan", {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "0",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.ucapan.filter(
          (entry: UcapanData) => entry.ucapan
        );
        setUcapanData(filteredData);
      })
      .catch((error) => console.error("Error fetching ucapan:", error));
  };

  useEffect(() => {
    fetchGuestbookData();
    if (guestbookUpdated) {
      fetchGuestbookData();
      console.log("DATA IS FETCHING AFTER FORM SUBMITTED");
    }
  }, [guestbookUpdated]);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="p-6 pt-3 text-center main-card text-black justify-center items-center">
      <h1 className="pb-3 text-3xl font-['Cinzel']"> GUESTBOOK</h1>
      <div className="p-4">
        <Slider {...settings}>
          {ucapanData.map((data, index) => (
            <div key={index}>
              <p className="text-center p-4 text-lg fontType-4 text-black font-extralight">
                {data.ucapan}
              </p>
              <p className="text-center text-sm text-black font-light">
                -{data.name}-
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Guestbook;
