import React, { useLayoutEffect, useRef, useState } from "react";

const TextArea = () => {
  const [text, setText] = useState("demo");
  const textRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");

  const handleChange = (event) => {
    setTextareaHeight("auto"); // Reset để tính lại scrollHeight
    setText(event.target.value);
  };

  useLayoutEffect(() => {
    if (textRef.current) {
      setTextareaHeight(`${textRef.current.scrollHeight}px`);
    }
  }, [text]);

  return (
    <div
      className="p-5"
      style={{
        minHeight: "100px", // hoặc có thể bỏ hẳn
      }}
    >
      <textarea
        className="w-full max-w-[400px] p-5 rounded-lg border border-gray-300 focus:border-blue-400 resize-none"
        placeholder="Please enter your content..."
        value={text}
        ref={textRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
