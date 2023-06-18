import React from 'react';
import moment from 'moment';

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
function Header({ events, setEvents }) {
  const handleAddEvent = () => {
    const eventDateTime = prompt('Enter event date and time (DD-MM-YYYY HH)');

    if (eventDateTime) {
      const [eventDate, eventTime] = eventDateTime.split(' ');
      const validDateTime = moment(eventDateTime, 'DD-MM-YYYY HH', true);
      if (!validDateTime.isValid()) {
        alert('Invalid date or time format');
        return;
      }
      const dateKey = moment(eventDate, 'DD-MM-YYYY').format('DD-MM-YYYY');

      if (events.hasOwnProperty(dateKey)) {
        events[dateKey].push(`${eventTime}:00`);
      } else {
        events[dateKey] = [`${eventTime}:00`];
      }

      setEvents({ ...events });
    }
  };

  return (
    <HeaderWrapper>
      <Title>Interview Calendar</Title>
      <Button icon={AddIcon} onClick={handleAddEvent} />
    </HeaderWrapper>
  );
}

export default Header;
