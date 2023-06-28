import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 55px;
  left: 15px;
  z-index: 12;
  background: #000;
  padding: 10px 15px;
  border-radius: 15px;
`;

export const Input = styled.input`
  font-size: 15px;
  padding: 5px 10px 5px 10px;
  background: #FFF;
  border: 1px solid #000;
  &::placeholder {
    color: #000;
    font-weight: 400;
  }
  &:first-child {
    margin: 10px 0;
  }
  border-radius: 10px;
  color: #000;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 5px 0;
  width: 38px;
  border: 1px solid #FFF;
  background: #FFF;
  color: #000;
  font-size: 20px;
  &:focus {
    background: #DCDCDC;
    border: 1px solid #DCDCDC;
  }
  &:nth-child(2) {
    margin: 0 15px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
