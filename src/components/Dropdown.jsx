import { useState } from "react";
import useClickOutSide from "../hooks/useClickOutSide";
import ReactDOM from "react-dom";

const Dropdown = () => {
  const { showDropdown, dropdownRef, setShowDropdown } = useClickOutSide();
  const [coor, setCoor] = useState(null);

  const handleClick = () => {
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      setCoor(rect);
    }
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative w-full max-w-[400px] pb-5" ref={dropdownRef}>
      <div
        className="w-full p-5 border border-gray-200 rounded-lg cursor-pointer"
        onClick={handleClick}
      >
        Selected
      </div>
      {showDropdown && coor && <DropdownList coor={coor} />}
    </div>
  );
};

// ✅ Component render ra ngoài thông qua Portal
const DropdownList = ({ coor }) => {
  return ReactDOM.createPortal(
    <div
      className="absolute z-50 p-5 bg-white border border-gray-200 rounded-lg shadow-md"
      style={{
        position: "absolute",
        top: coor.bottom + window.scrollY,
        left: coor.left + window.scrollX,
        width: coor.width,
      }}
    >
      <div className="p-2 cursor-pointer hover:bg-gray-100">JavaScript</div>
      <div className="p-2 cursor-pointer hover:bg-gray-100">ReactJS</div>
      <div className="p-2 cursor-pointer hover:bg-gray-100">VueJS</div>
    </div>,
    document.body
  );
};

export default Dropdown;
