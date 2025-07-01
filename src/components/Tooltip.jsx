//1.tạo component có tên là Tooltip
//2.Component này có props children,props text
//3.Aps dụng portal để khi rê chuột vào text thì sẽ hiển thị tooltip content ở phía trên và chính giuwax
//4. dùng kiến thức đã học ỏ video trc
import React, { useState } from "react";
import useHover from "../hooks/useHover";
import ReactDOM from "react-dom"
const Tooltip = ({ children, text }) => {
    const {
        hovered,nodeRef
    }=useHover();
    const[coor,setCoor]=useState({});
    const handleHover=e=>{
        setCoor(e.target.getBoundingClientRect())
    }
  return (
    <div>
        { hovered && <TooltipContent coor={coor}>{children}</TooltipContent>}
      <span className="font-semibold " ref={nodeRef} onMouseOver={handleHover}>{text}</span>
    </div>
  );
};
function TooltipContent({children,coor}) {
  return ReactDOM.createPortal(
    <p className="absolute inline-block p-4 text-white -translate-y-full bg-black rounded-lg max-w-[200px] -translate-x-2/4" style={{
        top:coor.top-coor.height/2 + window.scrollY,
        left:coor.left+coor.width/2
    }}>
      {children}
    </p>,
    document.querySelector("body")
  );
}
export default Tooltip;
