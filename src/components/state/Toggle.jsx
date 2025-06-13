import React,{useState} from 'react';

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
function Toggle(){
    //1.enabling state:useState(initialize value)
    //2.initialize state:useState(false)
    //3.reading state:
    //4.update state
    const array=useState(false);
    console.log(array);
    const [a,b]=[1,2];
    console.log(a,b);
    const [on,setOn]=useState(false);
    console.log(on,setOn);
    return <div className="toggle"></div>;
}
export default Toggle;