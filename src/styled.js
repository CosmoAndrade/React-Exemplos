import styled from "styled-components";

export const DivStyled = styled.div `
    display: flex;
    flex-direction: column;
    align-items:center;
    background-color: #ccc;
    font-family:'Courier New', Courier, monospace;
    height: 300px;

    input {
        width: 25%;
        padding: 7px 0;
        border-radius: 5px;
        border: none;
    }

    button{
        margin-top: 15px;
        margin-bottom: 15px;
        padding: 7px 5px;
        width: 7%;
        background-color: crimson;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 6px;

    }
    

`;