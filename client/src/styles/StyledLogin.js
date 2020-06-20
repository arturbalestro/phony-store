import styled from 'styled-components';

export const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFF;
    padding: 20px;
    border: 5px solid olive;
    border-radius: 20px;

    .form-group {
        margin-bottom: 0;
    }

    label {
        color: #666;
        font-weight: bold;
    }

    input {
        color: #666;
        font-size: 16px;
        margin-bottom: 20px;
    }
`;