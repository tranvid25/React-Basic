import axios from 'axios';
import React, { useEffect, useState } from 'react';
// https://hn.algolia.com/api/v1/search?query=react
const HackerNew = () => {
    const [hits,setHits]=useState([]);
    const handleFakedata=async()=>{
        const response=await axios.get("https://hn.algolia.com/api/v1/search?query=react");
        console.log(response.data);
        setHits(response.data?.hits || []);
    }
    useEffect(()=>{
    handleFakedata();
    },[]);
    return (
        <div>
        {hits.length>0 && hits.map((item)=>{
           return <h3 key={item.title}>{item.title}</h3>
        })}
        </div>
    );
};

export default HackerNew;