// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const svgStyles = css`
  svg {
    width: 60px;
  }
`;

export default () => {
  return (
    <div css={svgStyles}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 557.71 377.33"
      >
        <path fill="#ff6c6c" d="M183.16.07v377.12h98.27L279.76.07h-96.6z" />
        <path d="M86.56 176.05h-1V377.3H0V.16h94.76l186.8 377.12h-98.43zM417.02 280.69L279.66 0h-96.44l86.56 175.87 99.08 201.25h.4l-.09.18" />
        <path d="M372.07 377.33l99.09-201.25h.99v201.25h85.56V.21h-94.76L324 280.73" />
      </svg>
    </div>
  );
};
