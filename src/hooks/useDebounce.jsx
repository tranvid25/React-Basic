import { useEffect, useState } from "react";

export default function useDebounce(initialValues='',delay=1000){
    const [debounce,setDebounce]=useState(initialValues);
    useEffect(()=>{
        const timer=setTimeout(()=>{
           setDebounce(initialValues)
        },delay);
        return ()=>{
        clearTimeout(timer);
    }
    },[initialValues,delay]);
    
    return debounce;
}