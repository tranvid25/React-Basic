import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewsAPI(){
    const [hits, setHits] = useState([]);
      const [query, setQuery] = useState("react");
      const [loading, setLoading] = useState(true);
      const handlefetchdata=useRef({});
      const [errorMessage, setErrorMessage] = useState("");
    
      const handleFakedata = useRef(null);
      const isMounted = useRef(true);
      useEffect(() => {
        return () => {
          isMounted.current = false;
        };
      });
    
      handlefetchdata.current = async () => {
        setLoading(true);
        setErrorMessage(""); // Xóa lỗi cũ trước khi fetch
        try {
          const response = await axios.get(
            `https://hn.algolia.com/api/v1/search?query=${query}`
          );
          if (isMounted.current) {
            setTimeout(() => {
              setHits(response.data?.hits || []);
            });
          }
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

      return {
        query,
        setQuery,
        loading,
        errorMessage,
        hits
      }
}
