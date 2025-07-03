import React, { useEffect } from "react";
import useLinkNewTab from "../hooks/useLinkNewTab";
import useHover from "../hooks/useHover";
import { useSearchParams } from "react-router-dom";
const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { contentRef } = useLinkNewTab();
  const { hovered, nodeRef } = useHover();
  useEffect(()=>{
    searchParams({search:"evondev"})
  },[]);
  return (
    <div className="entry-content" ref={contentRef}>
      <p className="mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse sapiente
        nobis reiciendis nisi nostrum suscipit fugiat, quidem non veniam quasi
        unde deleniti sit praesentium fuga et a recusandae pariatur totam.
        <a
          href="https://www.instagram.com/"
          className={`underline ${hovered ? "text-green-400" : ""}`}
          ref={nodeRef}
        >
          google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse sapiente
        nobis reiciendis nisi nostrum suscipit fugiat, quidem non veniam quasi
        unde deleniti sit praesentium fuga et a recusandae pariatur totam.
        <a href="https://www.instagram.com/" className="underline">
          google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse sapiente
        nobis reiciendis nisi nostrum suscipit fugiat, quidem non veniam quasi
        unde deleniti sit praesentium fuga et a recusandae pariatur totam.
        <a href="https://www.instagram.com/" className="underline">
          google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse sapiente
        nobis reiciendis nisi nostrum suscipit fugiat, quidem non veniam quasi
        unde deleniti sit praesentium fuga et a recusandae pariatur totam.
        <a href="https://www.instagram.com/" className="underline">
          google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse sapiente
        nobis reiciendis nisi nostrum suscipit fugiat, quidem non veniam quasi
        unde deleniti sit praesentium fuga et a recusandae pariatur totam.
        <a href="https://www.instagram.com/" className="underline">
          google.com
        </a>
        ?
      </p>
    </div>
  );
};

export default Blog;
