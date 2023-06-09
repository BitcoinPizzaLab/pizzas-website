import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'ChicagoFLF';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/ChicagoFLF.ttf') format('opentype');
      }
      `}
  />
);

export default Fonts;

// @font-face {
//   font-family: 'Digit2000';
//   font-style: normal;
//   font-weight: 400;
//   font-display: swap;
//   src: url('/fonts/CAYETNRI.ttf') format('opentype');
// }
