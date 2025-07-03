import React from "react";
import { useGallery } from "../../contexts/gallery-context";

const Photolisst = () => {
  const { photos, toggleFavourite, addToCart, removetoCart } = useGallery();
  return (
    <div className="px-5 py-10 ">
      <div className="grid grid-cols-4 gap-5 ">
        {photos.length > 0 &&
          photos.map((item) => {
            return (
              <div
                key={item.id}
                className="relative h-[300px] cursor-pointer group"
              >
                <img
                  src={item.url}
                  alt=""
                  className="object-cover w-full h-full"
                />
                <span
                  className="absolute z-10 invisible w-8 transition-all opacity-0 cursor-pointer right-5 top-5 group-hover:opacity-100 group-hover:visible"
                  onClick={() => toggleFavourite(item.id)}
                >
                  <svg
                    width="42"
                    height="38"
                    viewBox="0 0 42 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="max-w-full"
                  >
                    <path
                      d="M0.166626 11.5C0.166108 8.47984 1.37993 5.58633 3.53499 3.47045C5.69005 1.35458 8.60534 0.19405 11.625 0.249979C15.2027 0.230979 18.6166 1.74826 21 4.41665C23.3833 1.74826 26.7972 0.230979 30.375 0.249979C33.3946 0.19405 36.3099 1.35458 38.4649 3.47045C40.62 5.58633 41.8338 8.47984 41.8333 11.5C41.8333 22.6583 28.5437 31.0833 21 37.75C13.4729 31.0271 0.166626 22.6666 0.166626 11.5Z"
                      fill={item.isFavourite ? "red" : "white"}
                    />
                  </svg>
                </span>
                <div className="flex flex-row gap-2">
                  <button
                    className="absolute invisible px-6 py-2 font-medium transition-all bg-white rounded-lg opacity-0 left-1/4 bottom-5 -translate-x-1/4 group-hover:opacity-100 group-hover:visible"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="absolute invisible px-6 py-2 font-medium transition-all bg-white rounded-lg opacity-0 left-3/4 bottom-5 -translate-x-3/4 group-hover:opacity-100 group-hover:visible "
                    onClick={() => removetoCart(item.id)}
                  >
                    Remove Cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Photolisst;
