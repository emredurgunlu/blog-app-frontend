import React from "react";
import { useNavigate } from "react-router-dom"
const Card = ({ blogsData }) => {
  const navigate = useNavigate()
  return (
    <>
      {blogsData.map((items, key) => (
        <article
          className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
          key={key}
          onClick={() => navigate(`/blogdetail/${items._id}`)}
        >
          <img
            src={items.image}
            loading="lazy"
            alt={items.title}
            className="w-full h-48 rounded-t-md"
          />

          <div className="pt-3 ml-4 mr-2 ">
            <h3 className="text-xl text-gray-900">{items.title}</h3>
            <div>
              <p className="text-gray-400 text-sm mt-1 line-clamp-3">
                {items.content}
              </p>
            </div>
          </div>
          <div className="flex  justify-evenly mb-2 pt-3 ml-2 mr-2">
            <div className="flex items-center">
              <svg
                className="w-6"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M12 6.5c3.79 0 7.17 2.13 8.82 5.5-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"></path>
              </svg>
              {items.countOfVisitors}
            </div>

            <div className="flex items-center">
              <svg
                className="w-6"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="FavoriteIcon"
              >
                <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
              </svg>
              {items.comments.length}
            </div>
            <div className="flex items-center">
              <svg
                className="w-6"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ChatBubbleOutlineOutlinedIcon"
              >
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"></path>
              </svg>
              {items.likes.length}
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default Card;
