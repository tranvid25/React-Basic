import React, { useState } from "react";
import "./ToggleStyles.css";
// stateless functional component:component nhưng không sử dụng state
//stateful functional component:component có sử dụng state
// function Toggle(){
//     return <div className="toggle"></div>;
// }//stateless
// function Toggle2(){
//     return (
//         <div className='toggle'>

//         </div>
//     )
// }//statefull
function Toggle() {
  //1.enabling state:useState(initialize value)
  //2.initialize state:useState(false)
  //3.reading state:
  //4.update state
  //initializ value:boolean(true,false)
  const [on, setOn] = useState(false);
  console.log(on);
  const handleToggle=()=>{
   setOn((on) =>{
    return !on;
   })
  }
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      <div className="toggle-control">
        <div className="toggle-on" onClick={()=>setOn(true)}>On</div>
        <div className="toggle-off"onClick={()=>setOn(false)}>Off</div>
      </div>
    </div>
  );
}
export default Toggle;
