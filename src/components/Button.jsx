import React from 'react';
import styled from 'styled-components';
const ButtonWrapper = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const Text = styled.h2`
  font-size: 25px;
  color: red;
`;
const ImgBtn = styled.img``;
function Button({ onClick, icon, children }) {
  return (
    <ButtonWrapper onClick={onClick}>
      <ImgBtn src={icon} />
      <Text>{children}</Text>
    </ButtonWrapper>
  );
}

export default Button;
