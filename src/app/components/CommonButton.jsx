import React from "react";

const CommonButton = ({ heading }) => {
  return (
    <span>
      <button class="cta flex items-center gap-7">
        <svg width="15px" height="15px">
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
        <span className="text-white">{heading}</span>
      </button>
    </span>
  );
};

export default CommonButton;
