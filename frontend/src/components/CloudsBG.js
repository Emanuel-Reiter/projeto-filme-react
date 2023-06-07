import React from "react";
import styled from "styled-components";
import imageNuvem from "../img/clouds_day.png"

const DivNuvem = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const ImgNuvem1 = styled.img`
    position: fixed;
    z-index: -1;

    left: 0%;
    top: 0%;

    animation-name: slidein1;
    animation-duration: 20s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes slidein1 {
        0% {
            left: 0%;
        }
    
        100% {
            left: 100%;
        }
    }
`;

const ImgNuvem2 = styled.img`
    position: fixed;
    z-index: -1;

    left: 0%;
    top: 0%;

    animation-name: slidein2;
    animation-duration: 20s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes slidein2 {
        0% {
            left: -100%;
        }
    
        100% {
            left: 0%;
        }
    }
`;

const ImgNuvem3 = styled.img`
position: fixed;
    z-index: -2;

    left: 0%;
    top: 15%;

    animation-name: slidein3;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes slidein3 {
        0% {
            left: 0%;
        }
    
        100% {
            left: 100%;
        }
    }
`;

const ImgNuvem4 = styled.img`
    position: fixed;
    z-index: -2;

    left: 0%;
    top: 15%;

    animation-name: slidein4;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes slidein4 {
        0% {
            left: -100%;
        }
    
        100% {
            left: 0%;
        }
    }
`;

const CloudsBG = () => {
    return (
        <DivNuvem>
            <ImgNuvem1 src={imageNuvem} />
            <ImgNuvem2 src={imageNuvem} />
                
            <ImgNuvem3 src={imageNuvem} />
            <ImgNuvem4 src={imageNuvem} />
        </DivNuvem>
    );
}

export default CloudsBG;
