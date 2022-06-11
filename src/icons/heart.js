import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="43"
      viewBox="0 0 43 43"
    >
      <defs>
        <filter
          id="Ellipse_15"
          width="43"
          height="43"
          x="0"
          y="0"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="4"></feOffset>
          <feGaussianBlur result="blur" stdDeviation="2.5"></feGaussianBlur>
          <feFlood floodOpacity="0.2"></feFlood>
          <feComposite in2="blur" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
      </defs>
      <g filter="url(#Ellipse_15)">
        <circle
          cx="14"
          cy="14"
          r="14"
          fill="#03dac6"
          data-name="Ellipse 15"
          transform="translate(7.5 3.5)"
        ></circle>
      </g>
    </svg>
  );
}

export default Icon;

