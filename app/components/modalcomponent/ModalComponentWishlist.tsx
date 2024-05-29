// components/ModalComponentWishlist.tsx
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { BeatLoader } from "react-spinners";
import useSWR from "swr";

interface Booking {
  name: string;
  phone: string;
  item: string;
}

interface ModalComponentWishlistProps {
  onConfirmBook: (nextModal: string, title: string, image: string) => void;
  shouldFetchBookings: boolean;
  setShouldFetchBookings: (value: boolean) => void;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ModalComponentWishlist: React.FC<ModalComponentWishlistProps> = ({
  onConfirmBook,
  shouldFetchBookings,
  setShouldFetchBookings,
}) => {
  const { data, error, mutate } = useSWR("/api/get-booking", fetcher, {
    revalidateOnFocus: false,
  });

  const [loading, setLoading] = useState(true);

  if (error) {
    console.error("Error fetching bookings:", error);
  }

  const bookings: Booking[] = data
    ? data.bookings.map((booking: any) => ({
        name: booking[0],
        phone: booking[1],
        item: booking[2],
      }))
    : [];

  if (shouldFetchBookings) {
    mutate(); // Re-fetch the data
    setShouldFetchBookings(false);
  }

  if (loading && !data) {
    return (
      <div className="flex justify-center items-center min-h-[66vh]">
        <BeatLoader color={"#123abc"} loading={loading} size={15} />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col mb-5 max-h-[66vh]">
        <h2 className="text-lg mb-4 text-center font-bold text-gray-500">
          Wishlist
        </h2>
        <div className="overflow-y-auto overflow-hidden max-h-[60vh]">
          {/* Item 1 */}
          <ProductCard
            imageSrc="/microwave.jpeg"
            title="SHARP Microwave Oven 20L R207EK"
            itemLink="https://shopee.com.my/SHARP-Microwave-Oven-20L-R207EK-R219EK-R2021GK-Mechanical-Dial-Flatbed-R2121FGK-i.19134170.23860216391?sp_atk=439c3212-4d92-43b2-87ae-ea502bd8749b&xptdk=439c3212-4d92-43b2-87ae-ea502bd8749b"
            onConfirmBook={onConfirmBook}
            isBooked={bookings.some((booking) => booking.item === "SHARP Microwave Oven 20L R207EK")}
          />

          {/* Item 2 */}
          <ProductCard
            imageSrc="/vacuum.jpeg"
            title="PerySmith Cordless Vacuum Cleaner Xtreme Series X20 Pro"
            itemLink="https://shopee.com.my/PerySmith-Cordless-Vacuum-Cleaner-Xtreme-Series-X20-Pro-i.130925376.4116947223?sp_atk=9479ea04-db53-4978-b5b5-a6f37b541c0e&xptdk=9479ea04-db53-4978-b5b5-a6f37b541c0e"
            onConfirmBook={onConfirmBook}
            isBooked={bookings.some((booking) => booking.item === "PerySmith Cordless Vacuum Cleaner Xtreme Series X20 Pro")}
          />

          {/* Item 3 */}
          <ProductCard
            imageSrc="/dessini.jpeg"
            title="DESSINI ITALY WSB-23-S Cookware Set"
            itemLink="https://shopee.com.my/DESSINI-ITALY-WSB-23-S-Die-Cast-Aluminium-Non-Stick-Casserole-Pot-Bowl-Double-Side-Grill-Pan-Cookware-PERIUK-(23-Pcs)-i.370480745.19409535277?xptdk=1cd6ff1d-a7f0-44db-9844-85848e8b8181"
            onConfirmBook={onConfirmBook}
            isBooked={bookings.some((booking) => booking.item === "DESSINI ITALY WSB-23-S Cookware Set")}
          />

          {/* Item 4 */}
          <ProductCard
            imageSrc="/kettle.jpeg"
            title="DESSINI ITALY Glass Electric Kettle Temperature Control"
            itemLink="https://shopee.com.my/DESSINI-ITALY-Glass-Electric-Kettle-Temperature-Control-Automatic-Cut-Off-Boiler-Jug-Teapot-Cerek-(1.8L-1.1L)-i.370480745.11400243932?sp_atk=e4242e7b-1797-4433-acd5-3de1ab00ffbf&xptdk=e4242e7b-1797-4433-acd5-3de1ab00ffbf"
            onConfirmBook={onConfirmBook}
            isBooked={bookings.some((booking) => booking.item === "DESSINI ITALY Glass Electric Kettle Temperature Control")}
          />
        </div>
      </div>
    </>
  );
};

export default ModalComponentWishlist;
