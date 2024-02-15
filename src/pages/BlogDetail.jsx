import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogDetailData } from "../features/blogApiSlice";
import { useParams } from "react-router-dom";
const BlogDetail = () => {
  const dispatch = useDispatch();
  const { blogDetail } = useSelector((state) => state.blogsApi);
  const { idx } = useParams();
  useEffect(() => {
    dispatch(getBlogDetailData(idx));
    // dispatch(getBlogDetailData(blogData._id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div class="flex justify-center mt-10">
        <img
          src={blogDetail.image}
          loading="lazy"
          alt={blogDetail.title}
          className="w-1/3  rounded-t-md "
        />
      </div>
      <div className="ml-40 mr-10 ">
        <h3 className="text-xl text-gray-900">{blogDetail.title}</h3>
        <div>
          <p className="text-gray-400 text-sm mt-1 line-clamp-3 ">
            {blogDetail.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
