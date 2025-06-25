import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const HackerNew = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFakedata = useRef(null);

  handleFakedata.current = async () => {
    setLoading(true);
    setErrorMessage(""); // Xóa lỗi cũ trước khi fetch
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(response.data?.hits || []);
    } catch (error) {
      console.log(error);
      setErrorMessage(`Đã xảy ra lỗi: ${error.message}`);
      setHits([]); // Xóa dữ liệu cũ nếu lỗi
    } finally {
      setLoading(false); // Dù thành công hay lỗi đều tắt loading
    }
  };

  useEffect(() => {
    handleFakedata.current();
  }, [query]);

  return (
    <div>
      <div className="flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm kiếm Hacker News..."
          className="border px-2 py-1 rounded mb-4"
        />

        {loading && <p>Đang tải dữ liệu...</p>}

        {!loading && errorMessage && (
          <p className="text-red-500">{errorMessage}</p>
        )}

        {!loading && !errorMessage && hits.length > 0 && (
          <div>
            {hits.map((item) => (
              <h3 key={item.objectID}>{item.title || "No title"}</h3>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HackerNew;
