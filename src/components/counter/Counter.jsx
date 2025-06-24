import React, { useEffect, useState } from "react";

const Counter = () => {
  //state
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log(count);
  },[count])
  return (
    <div className="p-5 flex gap-x-4">
      <span className="text-2xl font-bold">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="inline-block p-3 bg-green-400 text-white"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
