import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const BlogDetail = () => {
  const { slug } = useParams();
  console.log(slug);
  const navigate=useNavigate();
  return (
    <div>
      BlogDetail
      <button onClick={()=>navigate("/blog")} className="p-3 text-white bg-blue-300 rounded-sm">
        Navigate to blog page
      </button>
    </div>
  );
};

export default BlogDetail;
