import React, { useEffect, useReducer, useRef, useState } from "react";
import axios from "axios";
const initialState={
    hits:[],
    query:'',
    loading:true,
    errorMessage:'',
    url:"https://hn.algolia.com/api/v1/search?query=''"
}
const hackreduce=(state,action)=>{
   return state;
}
const HackerReducer = () => {
  const [state,dispatch]=useReducer(hackreduce,initialState);
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false); // Đổi thành false ban đầu
  const [errorMessage, setErrorMessage] = useState("");
  const [url, setUrl] = useState(null); // Chỉ fetch khi nhấn nút
  const handlefakedata = useRef(null);

  handlefakedata.current = async () => {
    if (!url) return;
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await axios.get(url);
      setHits(response.data?.hits || []);
    } catch (error) {
      setErrorMessage(`Đã xảy ra lỗi: ${error.message}`);
      setHits([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handlefakedata.current();
  }, [url]); // Chỉ chạy khi URL thay đổi (tức khi nhấn nút)

  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border px-3 py-2 rounded flex-1"
          placeholder="Nhập từ khóa tìm kiếm..."
        />
        <button
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          className="bg-blue-500 text-white font-semibold px-5 py-2 rounded-md flex-shrink-0"
        >
          Fetching
        </button>
      </div>

      {loading && (
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto my-10"></div>
      )}

      {!loading && errorMessage && (
        <p className="text-red-500 my-5 text-center">{errorMessage}</p>
      )}

      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item) => {
            if (!item.title) return null;
            return (
              <h3
                key={item.objectID}
                className="p-3 bg-gray-100 rounded-md shadow-sm w-full"
              >
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerReducer;
