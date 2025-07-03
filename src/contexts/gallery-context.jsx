import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext, useContext, useEffect, useState } from "react";

const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1750272001535-524d6a246947?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    isFavourite: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1750330079886-8561dc52c129?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    isFavourite: false,
  },
  {
    id: 3,
    url: "https://plus.unsplash.com/premium_photo-1750792816634-0e1566368306?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    isFavourite: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1750365866509-8e1f1cac473e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    isFavourite: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1750755072927-4221f5018635?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    isFavourite: false,
  },
];
const GalleryContext = createContext();
function GalleryProvider(props) {
  const [photos, setPhotos] = useLocalStorage("photos", fakeData);
  const [cartItems, setCartItems] = useLocalStorage("cart",[]);
  const [favoriteList, setFavoriteList] = useState(false);
  function toggleFavourite(photoId) {
    const updatedArray = photos.map((photo) => {
      if (photo.id == photoId) {
        return { ...photo, isFavourite: !photo.isFavourite };
      }
      return photo;
    });
    setPhotos(updatedArray);
  }
  function addToCart(newItem) {
  setCartItems((prevItems) => {
    const isExisted = prevItems.find((item) => item.id === newItem.id);
    if (isExisted) {
      // Nếu đã tồn tại, tăng số lượng
      return prevItems.map((item) =>
        item.id === newItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Nếu chưa có, thêm mới với quantity = 1
      return [...prevItems, { ...newItem, quantity: 1 }];
    }
  });
}

  function removetoCart(idRemove) {
    const updatedCart = cartItems.filter((item) => item.id !== idRemove); //"Giữ lại tất cả item không có id trùng với id cần xóa"
    setCartItems(updatedCart);
  }
  useEffect(() => {
    console.log("Cart updated:", cartItems);
  }, [cartItems]);
  const value = {
    photos,
    cartItems,
    favoriteList,
    setPhotos,
    setCartItems,
    setFavoriteList,
    toggleFavourite,
    addToCart,
    removetoCart,
  };
  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}
function useGallery() {
  const contextGallery = useContext(GalleryContext);
  if (typeof contextGallery == "undefined")
    throw new Error("useGalley mustbe ");
  return contextGallery;
}
export { useGallery, GalleryProvider };
