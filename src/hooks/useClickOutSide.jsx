import { useEffect, useRef, useState } from "react";

export default function useClickOutSide(){
    const [showDropdown, setShowDropdown] = useState(false);
      const dropdownRef = useRef(null);
      useEffect(() => {
        function handleClickout(e) {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
                setShowDropdown(false)
            }else{
                console.log("click inside");
            }
        }
          document.addEventListener("click", handleClickout);
          return ()=>{
            document.removeEventListener("click",handleClickout)
          }
      }, []);

    return {
        showDropdown,
        dropdownRef,
        setShowDropdown
    }
}