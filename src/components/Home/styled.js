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