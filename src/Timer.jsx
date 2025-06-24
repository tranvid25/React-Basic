import React, { useState } from "react";

const Timer = () => {
  const [message, setMessage] = useState("Evondev");
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default Timer;
