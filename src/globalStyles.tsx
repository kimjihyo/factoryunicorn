import { createGlobalStyle } from "styled-components";
import SCDreamRegular from "./assets/fonts/SCDreamRegular.otf";
import SCDreamLight from "./assets/fonts/SCDreamLight.otf";
import SCDreamMedium from "./assets/fonts/SCDreamMedium.otf";
import SCDreamBold from "./assets/fonts/SCDreamBold.otf";
import SCDreamExtraBold from "./assets/fonts/SCDreamExtraBold.otf";
import * as colors from "./constants/colors";

export default createGlobalStyle`
  @font-face {
    font-family: 'Light';
    src: local('Light'), url(${SCDreamLight});
  }
  @font-face {
    font-family: 'Regular';
    src: local('Regular'), url(${SCDreamRegular});
  }
  @font-face {
    font-family: 'Medium';
    src: local('Medium'), url(${SCDreamMedium});
  }
  @font-face {
    font-family: 'Bold';
    src: local('Bold'), url(${SCDreamBold});
  }
  @font-face {
    font-family: 'ExtraBold';
    src: local('ExtraBold'), url(${SCDreamExtraBold});
  }
  * {
    margin: 0;
    padding: 0;
    font-family: 'Regular';
  }
  html, body {
    min-height: 100%;
    background: #fff;
    color: ${colors.TEXT_PRIMARY};
  }
  a {
    color: ${colors.TEXT_PRIMARY};
  }
  body {
    text-rendering: optimizeLegibility;
  }
  img {
    border: none;
    max-width: 100%;
  }
`;
