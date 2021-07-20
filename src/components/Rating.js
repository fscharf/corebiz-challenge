import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const Rating = ({ value }) => {
  return (
    <div className="text-danger">
      {value && value >= 1 ? <AiFillStar /> : <AiOutlineStar />}
      {value && value >= 2 ? <AiFillStar /> : <AiOutlineStar />}
      {value && value >= 3 ? <AiFillStar /> : <AiOutlineStar />}
      {value && value >= 4 ? <AiFillStar /> : <AiOutlineStar />}
      {value && value >= 5 ? <AiFillStar /> : <AiOutlineStar />}
    </div>
  );
};
