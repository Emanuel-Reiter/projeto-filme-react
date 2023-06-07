import { createGlobalStyle } from "styled-components";
import BGimage from "../img/sky_day.png";

const Global = createGlobalStyle`

*{
    margin: 0;
    padding: 0;

    font-family: 'poppins', sans-sefif;
}

body {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;

    background-image: url(${BGimage});
}
`;

export default Global;