import React from 'react';
import moment from 'moment';

import styled from 'styled-components';
import Button from './Button';

const FooterWrapper = styled.footer`
  position: sticky;
  bottom: 0;
  left: 0;
  z-index: 2;
  height: 60px;
  width: 100%;
  padding: 10px 50px;
  background-color: #f2f2f2;
  border-top: #ccc solid 1px;
`;

function Footer({ setStartDate }) {
  const goToDate = () => {
    setStartDate(moment().startOf('week').add(1, 'day'));
  };
  return (
    <FooterWrapper>
      <Button onClick={goToDate}>Today</Button>
    </FooterWrapper>
  );
}

export default Footer;
