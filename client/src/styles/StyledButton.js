import styled from 'styled-components';

export const StyledButton = styled.button`
    box-sizing: border-box;
    font-weight: bold;
    margin: 0;
    padding: 15px;
    border-radius: 5px;
    border: none;
    color: white;
    background: #666;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
    text-align: center;
    min-width: 100px;
    text-transform: uppercase;

    &.options {
        margin: 0 10px;
        padding: 10px;
        font-size: 0.8rem;
    }

    &.add-button {
        display: inline-block;
        margin: auto;
    }
`;