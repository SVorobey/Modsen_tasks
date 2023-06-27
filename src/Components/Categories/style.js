import styled from 'styled-components';

export const Column = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 25px;
    margin-left: 6px;
    background: #000;
    border: 1px solid #000;
    border-radius: 10px;
    padding: 15px 8px 15px 8px;
`;

export const Text = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin-left: 7px;
    color: #FFF;
`;

export const Wrapper = styled.div`
    position: absolute;
    z-index: 12;
    top: 0;
    left: 0;
    margin-top: 10px;
    margin-left: 55px;
    display: flex;
`;
