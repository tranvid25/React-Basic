import React from "react";
import { useGallery } from "../../contexts/gallery-context";

const CartList = () => {
  const { cartItems,removetoCart } = useGallery();
  return (
    <div className="px-5 py-10 ">
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <div className="inline-flex items-center justify-between pl-2 gap-x-5" key={item.id}>
            <img src={item.url} alt="" className="object-cover w-10 h-10 rounded-full"/>
            <button className="p-4 text-sm font-semibold text-white bg-red-400 rounded-lg " onClick={()=>removetoCart(item.id)}>Xóa </button>
          </div>
        ))}
    </div>
  );
};

export default CartList;
