import React, { useEffect, useState } from "react";
import axios from "axios";

// Hàm gọi API ảnh
const getPhoto = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=10`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return []; // Trả về mảng rỗng nếu có lỗi
  }
};

const Photo = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const handleLoadPhotos = async () => {
    const images = await getPhoto(nextPage);
    const newPhotos = [...randomPhotos, ...images];
    setRandomPhotos(newPhotos);
    setNextPage(nextPage + 1);
  };

  // Gọi ảnh lần đầu
  useEffect(() => {
    handleLoadPhotos();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos.map((item) => (
          <div
            key={item.id}
            className="p-3 bg-white shadow-md rounded-lg h-[200px]"
          >
            <img
              src={item.download_url}
              alt={`Image ${item.id}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="text-center mb-10">
        <button
          onClick={handleLoadPhotos}
          className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photo;
