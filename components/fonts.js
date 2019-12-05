// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export const fontCSS = css`
@font-face {
  font-family: 'Inter';
  src: local('Inter'), url(./fonts/Inter-Regular.woff) format('woff');
  src: local('Inter'), url(./fonts/Inter-Regular.woff2) format('woff2');
  src: local('Inter'), url(./fonts/Inter-Regular.otf) format('otf');
}
`