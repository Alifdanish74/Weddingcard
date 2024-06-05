// components/ProductCard.tsx
import Image from "next/image";
import { FiLink } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { FC } from "react";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  itemLink: string;
  onConfirmBook: (nextModal: string, title: string, image: string) => void;
  isBooked: boolean; // New prop
}

const ProductCard: FC<ProductCardProps> = ({
  imageSrc,
  title,
  itemLink,
  onConfirmBook,
  isBooked,
}) => {
  return (
    <div className="flex items-center border rounded-lg p-4 my-2 bg-white shadow-md">
      <div className="flex-shrink-0 mr-4">
        <Image
          src={imageSrc}
          alt="Product Image"
          width={100}
          height={100}
          className="rounded"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-base text-balance text-center font-normal text-gray-800">
          {title}
        </h3>
        <div className="mt-4 flex space-x-4 text-sm font-semibold justify-center items-center">
          {!isBooked ? (
            <>
              <button className="flex items-center bg-gray-100 text-gray-800 px-3 py-2 rounded hover:bg-gray-200 transition-colors">
                <a
                  href={itemLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FiLink className="mr-2" />
                  Link
                </a>
              </button>
              <button
                onClick={() => onConfirmBook("Booking", title, imageSrc)}
                className="flex items-center bg-gray-100 text-gray-800 px-3 py-2 rounded hover:bg-gray-200 transition-colors"
              >
                <FaRegBookmark className="mr-2" />
                Tempah
              </button>
            </>
          ) : (
            <button className="flex items-center bg-gray-100 text-gray-800 px-3 py-2 rounded hover:bg-gray-200 transition-colors">
              <SiTicktick className="mr-2" />
              Telah Ditempah
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;