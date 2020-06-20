import styled from 'styled-components';

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    text-align: center;
    padding: 20px;

    .logo {
        background: #666;
        border-radius: 220px;
        max-width: 20%;
        margin-bottom: 20px;
    }

    h1 {
        font-weight: bold;
        margin-bottom: 0;
    }
    h3 {
        font-size: 1.3rem;
        font-weight: bold;
        margin-top: 5px;
    }
`;