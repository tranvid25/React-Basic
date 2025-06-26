
import useHackerNewsAPI from "../../hooks/useHackerNewAPI";

const HackerNewAPI = () => {
  const{query,setQuery,loading,errorMessage,hits}=useHackerNewsAPI();

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

export default HackerNewAPI;
