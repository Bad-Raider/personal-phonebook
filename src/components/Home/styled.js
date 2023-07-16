import styled from "@emotion/styled";

export const Wraper = styled.div(`
        padding-left: 15px;
        padding-right: 15px
`);


export const Title = styled.h2(`
        display: flex;
        justify-content: center;
        margin-top: 100px;

        @@media (max-width: 375px) { 
        display: column
        }
`)