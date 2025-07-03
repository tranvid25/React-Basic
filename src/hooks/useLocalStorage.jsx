import { useState, useEffect } from "react";

 function useLocalStorage(key, initialValue) {
    //value sẽ đc gắn với initialValue
  const [value, setValue] = useState(() => {
    // Lấy dữ liệu từ localStorage khi component mount
    const storedValue = localStorage.getItem(key);
    try {
      return storedValue ? JSON.parse(storedValue) : initialValue;//jsonParse dùng để lấy kiểu dữ liệu đó ra để xài 
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    // Mỗi lần value thay đổi thì lưu lại vào localStorage
    localStorage.setItem(key, JSON.stringify(value));//stringify chuyển giá trị thành object,array để có thể lưu vào local
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
