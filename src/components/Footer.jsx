import React from 'react';
import moment from 'moment';

import styled from 'styled-components';
import Button from './Button';

const FooterWrapper = styled.footer`
  position: sticky;
  bottom: 0;
  left: 0;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  padding: 10px 50px;
  background-color: #f2f2f2;
  border-top: #ccc solid 1px;
`;

function Footer({
  setStartDate,
  showDeleteButton,
  selectedCell,
  events,
  setEvents,
}) {
  const goToDate = () => {
    setStartDate(moment().startOf('isoWeek').clone().add(0, 'days'));
  };

  const handleDeleteEvent = (dateKey, eventTime) => {
    if (events.hasOwnProperty(dateKey)) {
      const updatedEvents = events[dateKey].filter(
        (time) => time !== eventTime,
      );
      setEvents({ ...events, [dateKey]: updatedEvents });
    }
  };

  return (
    <FooterWrapper>
      <Button onClick={goToDate}>Today</Button>
      {showDeleteButton && (
        <Button
          onClick={() =>
            handleDeleteEvent(selectedCell.dateKey, selectedCell.hour)
          }
        >
          Delete
        </Button>
      )}
    </FooterWrapper>
  );
}

export default Footer;
