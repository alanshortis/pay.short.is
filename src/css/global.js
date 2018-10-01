import GeomanistWoff from "./fonts/geomanist-regular.woff";
import GeomanistWoff2 from "./fonts/geomanist-regular.woff2";
import { injectGlobal } from "styled-components";
import { font, color } from "./settings";

injectGlobal`
  @font-face {
    font-family: ${font.sans};
    src: url(${GeomanistWoff2}) format('woff2'), url(${GeomanistWoff}) format('woff');
    font-weight: ${font.weight};
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    border: 0;
    padding: 0;
    margin: 0;
    &:focus {
      outline: 0;
    }
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  img {
    display: inline-block;
    vertical-align: middle;
  }

  html {
    height: 100%;
  }

  body {
    min-height: 100%;
    font-size: 18px;
    line-height: 1.5;
    font-family: ${font.sans}, sans-serif;
    color: ${color.type};
    background-color: ${color.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
