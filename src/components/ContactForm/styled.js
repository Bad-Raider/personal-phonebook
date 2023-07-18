import styled from "@emotion/styled";

export const Form = styled.form(`
    display: flex;
    flex-direction: column;
    width: -webkit-fill-available;
    margin: 0 auto;
    background-color: #f1f1f1;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`);

export const Label = styled.label(`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    font-weight: bold;
`);

export const Input = styled.input(`
    padding: 10px;
    border: none;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`);

export const Button = styled.button(`
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 10px;

    &:hover{
        background-color: #0056b3;
    }
    
    &:active {
        background-color: #004080;
    }
`);