"use client"
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { BeatLoader } from "react-spinners";

export const dynamic = 'force-dynamic';

interface Booking {
  name: string;
  phone: string;
  item: string;
}

interface ModalComponentWishlistProps {
  onConfirmBook: (nextModal: string, title: string, image: string) => void;
}

const ModalComponentWishlist: React.FC<ModalComponentWishlistProps> = ({
  onConfirmBook,
}) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to showcase the spinner
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch("/api/get-booking", {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache",
          Expires: "0",
        },
      });
      const data = await response.json();
      setBookings(
        data.bookings.map((booking: any) => ({
          name: booking[0],
          phone: booking[1],
          item: booking[2],
        }))
      );
      setLoading(false);
      console.log(data)
      console.log("fetch wishlist first time")
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const isItemBooked = (title: string) => {
    return bookings.some((booking) => booking.item === title);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[66vh]">
        <BeatLoader color={"#123abc"} loading={loading} size={15} />
      </div>
    ); // You can replace this with a spinner or loading component
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
            isBooked={isItemBooked("SHARP Microwave Oven 20L R207EK")}
          />

          {/* Item 2 */}
          <ProductCard
            imageSrc="/vacuum.jpeg"
            title="PerySmith Cordless Vacuum Cleaner Xtreme Series X20 Pro"
            itemLink="https://shopee.com.my/PerySmith-Cordless-Vacuum-Cleaner-Xtreme-Series-X20-Pro-i.130925376.4116947223?sp_atk=9479ea04-db53-4978-b5b5-a6f37b541c0e&xptdk=9479ea04-db53-4978-b5b5-a6f37b541c0e"
            onConfirmBook={onConfirmBook}
            isBooked={isItemBooked(
              "PerySmith Cordless Vacuum Cleaner Xtreme Series X20 Pro"
            )}
          />

          {/* Item 3 */}
          <ProductCard
            imageSrc="/dessini.jpeg"
            title="DESSINI ITALY WSB-23-S Cookware Set"
            itemLink="https://shopee.com.my/DESSINI-ITALY-WSB-23-S-Die-Cast-Aluminium-Non-Stick-Casserole-Pot-Bowl-Double-Side-Grill-Pan-Cookware-PERIUK-(23-Pcs)-i.370480745.19409535277?xptdk=1cd6ff1d-a7f0-44db-9844-85848e8b8181"
            onConfirmBook={onConfirmBook}
            isBooked={isItemBooked("DESSINI ITALY WSB-23-S Cookware Set")}
          />

          {/* Item 4 */}
          <ProductCard
            imageSrc="/kettle.jpeg"
            title="DESSINI ITALY Glass Electric Kettle Temperature Control"
            itemLink="https://shopee.com.my/DESSINI-ITALY-Glass-Electric-Kettle-Temperature-Control-Automatic-Cut-Off-Boiler-Jug-Teapot-Cerek-(1.8L-1.1L)-i.370480745.11400243932?sp_atk=e4242e7b-1797-4433-acd5-3de1ab00ffbf&xptdk=e4242e7b-1797-4433-acd5-3de1ab00ffbf"
            onConfirmBook={onConfirmBook}
            isBooked={isItemBooked(
              "DESSINI ITALY Glass Electric Kettle Temperature Control"
            )}
          />
          {/* Item 5 */}
          <ProductCard
            imageSrc="/spice.jpg"
            title="Glass Spice & Oil Bottol Dispenser"
            itemLink="https://shopee.com.my/product/748939008/19260378838?d_id=ccf9f&uls_trackid=4vviv40m01iq&utm_content=24nc2ikUQwJEDnLYz2zDu7ocnJAT"
            onConfirmBook={onConfirmBook}
            isBooked={isItemBooked(
              "Glass Spice & Oil Bottol Dispenser"
            )}
          />
          {/* Item 6 */}
          <ProductCard
            imageSrc="/rice.jpg"
            title="GEESO Super Capacity 10KG Rice Dispenser"
            itemLink="https://shopee.com.my/product/229907985/25806174246?d_id=ccf9f&uls_trackid=4vvju1ir00ik&utm_content=24nc2ikUQwZDnoR9iunY5N69UQMd"
            onConfirmBook={onConfirmBook}
            isBooked={isItemBooked(
              "GEESO Super Capacity 10KG Rice Dispenser"
            )}
          />
          {/* Item 7 */}
          <ProductCard
            imageSrc="/toaster.jpg"
            title="Russell Taylors Toaster Retro Classic Collection"
            itemLink="https://shopee.com.my/product/49743442/24271388355?d_id=ccf9f&uls_trackid=4vvjubq100iq&utm_content=24nc2ikUQwoTt4wcveF8jwQzpUwq"
            onConfirmBook={onConfirmBook}
            isBooked={isItemBooked(
              "Russell Taylors Retro Classic Collection"
            )}
          />
          {/* Item 8 */}
          <ProductCard
            imageSrc="/plate.jpg"
            title="Ceramic Dinnerware Tableware Dishes Set"
            itemLink="https://shopee.com.my/18PCS-Ceramic-Dinnerware-Tableware-Dishes-Set-Bowl-Plate-set-Soup-Bowl-Rice-Plate-Spoon-Premium-Gift-Set-Wedding-Gift-i.13093.12351627781?sp_atk=46fde7b7-f173-4b97-a15f-16281fcdfb3b&xptdk=46fde7b7-f173-4b97-a15f-16281fcdfb3b"
            onConfirmBook={onConfirmBook}
            isBooked={isItemBooked(
              "Ceramic Dinnerware Tableware Dishes Set"
            )}
          />
          {/* Item 9 */}
          <ProductCard
            imageSrc="/knife.jpg"
            title="Kitchen Knife Set 6 Piece Stainless Steel"
            itemLink="https://shopee.com.my/%F0%9F%94%A52021-New-Kitchen-Knife-Set-6-Piece-Kitchen-Knife-Set-Stainless-Steel-Chef-Knife-Cooking-Knife-Scissors-with-Acrylic-Kni-i.653857082.15237345161?sp_atk=9122f775-dfee-4780-a52a-a7437526ed20&xptdk=9122f775-dfee-4780-a52a-a7437526ed20"
            onConfirmBook={onConfirmBook}
            isBooked={isItemBooked(
              "Kitchen Knife Set 6 Piece Stainless Steel"
            )}
          />
          {/* Item 10 */}
          <ProductCard
            imageSrc="/comforter.jpg"
            title="7 in 1 Comforter Queen Size"
            itemLink="https://shopee.com.my/Queen-KING-SET-CADAR-*ready-stock*-CADAR-7in1-COMFORTER-BERCORAK-Bedding-Soft-i.93711207.18694529637?sp_atk=c6dfe82a-8b4e-40e0-aab8-3c799a1427ee&xptdk=c6dfe82a-8b4e-40e0-aab8-3c799a1427ee"
            onConfirmBook={onConfirmBook}
            isBooked={isItemBooked(
              "7 in 1 Comforter Queen Size"
            )}
          />
          {/* Item 11 */}
          <ProductCard
            imageSrc="/carole.jpeg"
            title="Carote Nonstick Cookware Set (5 Pcs) Handle Removable"
            itemLink="https://shopee.com.my/Carote-Nonstick-Cookware-Set-(5-11Pcs)-Handle-Removable-Non-stick-Frying-Pan-Wok-Suit-All-Stove-Induction-Light-i.312980029.12227674238?sp_atk=1e7a47b9-cd5a-4e95-be35-c4f156b0940b&xptdk=1e7a47b9-cd5a-4e95-be35-c4f156b0940b"
            onConfirmBook={onConfirmBook}
            isBooked={isItemBooked(
              "Carote Nonstick Cookware Set (5 Pcs) Handle Removable"
            )}
          />
          {/* Item 12 */}
          <ProductCard
            imageSrc="/trolley.jpeg"
            title="LONTAI Trolley Shopping Cart 54L - 8 Wheels"
            itemLink="https://shopee.com.my/LONTAI-Trolley-Shopping-Cart-Lightweight-Easy-To-Carry-Lockable-Direction-Changeable-Wheels-Large-Space-Trolley-i.1242435695.25926574615?publish_id=&sp_atk=bff30efc-a404-4b65-80fc-b8e87ce55d1c&xptdk=bff30efc-a404-4b65-80fc-b8e87ce55d1c"
            onConfirmBook={onConfirmBook}
            isBooked={isItemBooked(
              "LONTAI Trolley Shopping Cart 54L - 8 Wheels"
            )}
          />
        </div>
      </div>
    </>
  );
};

export default ModalComponentWishlist;