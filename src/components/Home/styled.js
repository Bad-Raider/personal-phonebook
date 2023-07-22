import styled from "@emotion/styled";

export const Wraper = styled.div(`
        padding-left: 15px;
        padding-right: 15px;
        margin-top: 40px;

        @media (min-width: 900px) { 
                display: flex;
         }

`);


export const Image = styled.img(`
        margin-left: auto;
        margin-right: auto;
        max-width: 100%;

        @media (min-width: 900px) { 
                max-width: 35%;
         }

`);

export const Title = styled.h2(`
        
        @media (min-width: 900px) { 
        font-size: 30px;
        }

        font-size: 40px;
        font-family: 'Rakkas', cursive;
        transform: scale(0.94);
        animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
        @keyframes scale {
                100% {
        transform: scale(1);
        }
        @media (min-width: 900px) { 
                display: flex;
                font-size: 60px;
        }
`);

export const Words = styled.span(`
        display: inline-block;
        font-family: 'Rakkas', cursive;
        opacity: 0;
        filter: blur(4px);

        &:nth-child(1) {
        animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
        }

        &:nth-child(2) {
        animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
        }

        &:nth-child(3) {
        animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
        }

        @keyframes fade-in {
        100% {
         opacity: 1;
        filter: blur(0);
  }
`);

export const ItemList = styled.li(`
        font-size: 20px;

        
        &:not(:last-child){
        margin-bottom: 20px;
        }

        @media (min-width: 900px) { 
                font-size: 30px;
        }
`);





