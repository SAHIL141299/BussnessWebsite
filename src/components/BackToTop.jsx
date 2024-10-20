import React from "react";

const BackToTop = () => {
  return (
    <a id="back-to-top" class="show">
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        width="20"
        height="20"
      >
        <path
          d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"
          fill="#fff"
        ></path>
      </svg>{" "}
    </a>
  );
};

export default BackToTop;
