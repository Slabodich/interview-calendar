import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import AddIcon from '../accets/img/addIcon.svg';

const HeaderWrapper = styled.header`
  position: sticky;
  left: 0;
  top: 0;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: white;

  padding: 40px 50px;
`;
const Title = styled.h1`
  font-size: 36px;
  font-weight: 400;
`;
function Header() {
  return (
    <HeaderWrapper>
      <Title>Interview Calendar</Title>
      <Button icon={AddIcon} />
    </HeaderWrapper>
  );
}

export default Header;
