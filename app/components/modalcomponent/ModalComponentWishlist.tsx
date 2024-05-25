import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { BeatLoader } from "react-spinners";

interface Booking {
  name: string;
  phone: string;
  item: string;
}

interface ModalComponentWishlistProps {
  onConfirmBook: (nextModal: string, title: string, image: string) => void;
  onCancel: () => void;
}

const ModalComponentWishlist: React.FC<ModalComponentWishlistProps> = ({
  onConfirmBook,
  onCancel,
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
      const response = await fetch("/api/get-booking");
      const data = await response.json();
      setBookings(
        data.bookings.map((booking: any) => ({
          name: booking[0],
          phone: booking[1],
          item: booking[2],
        }))
      );
      setLoading(false);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleBookingSubmit = () => {
    fetchBookings(); // Refresh bookings after a new booking is submitted
  };

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
      <div className="flex flex-col mb-5 min-h-[66vh]">
        <h2 className="text-lg mb-4 text-center font-bold text-gray-500">
          Wishlist
        </h2>

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
      </div>
    </>
  );
};

export default ModalComponentWishlist;
