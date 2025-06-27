
import useClickOutSide from "../hooks/useClickOutSide";

const Dropdown = () => {
  const {showDropdown,dropdownRef,setShowDropdown}=useClickOutSide();
  return (
    <div className="relative w-full max-w-[400px] pb-5" ref={dropdownRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer "
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Selected
      </div>
      {showDropdown && (
        <div className="border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white p-5">
          <div className="p-5 cursor-pointer">JavaScript</div>
          <div className="p-5 cursor-pointer">ReactJS</div>
          <div className="p-5 cursor-pointer">VueJS</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
//nếu showDropdown bằng true thì trả về còn false thì nulll
