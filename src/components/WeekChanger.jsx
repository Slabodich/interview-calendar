import React from 'react';
import moment from 'moment';

import styled from 'styled-components';
import Button from './Button';
import NextIcon from '../accets/img/nextIcon.svg';
import PrevIcon from '../accets/img/prevIvon.svg';

const ChangerWrapp = styled.div`
  position: sticky;
  left: 0;
  top: 125px;
  z-index: 2;

  width: 100%;
  height: 150px;
  padding-left: 95px;

  background-color: #f2f2f2;
  border-top: #ccc solid 1px;
  border-bottom: #ccc solid 1px;
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;
const WeekButton = styled.div`
  border: none;
  padding: 0 50px;
  cursor: pointer;
`;
const WeekDays = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const WeekDay = styled.div`
  flex-basis: calc(100% / 7);
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

const CalendarBody = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CalendarDay = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: calc(100% / 7);
  text-align: center;
  font-size: 25px;
  font-weight: 400;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: ${({ isCurrentDay }) =>
      isCurrentDay ? 'red' : 'transparent'};
    color: ${({ isCurrentDay }) => (isCurrentDay ? 'white' : 'black')};
    border-radius: 40px;
  }
`;

const MonthYearWrapp = styled.div`
  font-size: 25px;
`;
function WeekChanger({ startDate, setStartDate }) {
  const getWeekDates = (startDate) => {
    const dates = [];
    const currentDate = moment(startDate);

    for (let i = 0; i < 7; i++) {
      dates.push(moment(currentDate));
      currentDate.add(1, 'day');
    }

    return dates;
  };

  const previousWeek = () => {
    setStartDate(startDate.clone().subtract(7, 'days'));
  };

  const nextWeek = () => {
    setStartDate(startDate.clone().add(7, 'days'));
  };

  const weekDates = getWeekDates(startDate);
  const currentWeekMonth = weekDates[0].format('MMMM');
  const currentWeekYear = weekDates[0].format('YYYY');

  return (
    <ChangerWrapp>
      <WeekDays>
        {weekDates.map((date) => (
          <WeekDay key={date.format('ddd')}>
            {date.format('ddd').charAt(0)}
          </WeekDay>
        ))}
      </WeekDays>
      <CalendarBody>
        {weekDates.map((date) => (
          <CalendarDay
            key={date.date()}
            isCurrentDay={date.isSame(moment(), 'day')}
          >
            <div>{date.date()}</div>
          </CalendarDay>
        ))}
      </CalendarBody>
      <Footer>
        <WeekButton>
          <Button icon={PrevIcon} onClick={previousWeek} />
        </WeekButton>
        <MonthYearWrapp>
          {currentWeekMonth} {currentWeekYear}
        </MonthYearWrapp>
        <WeekButton>
          <Button icon={NextIcon} onClick={nextWeek} />
        </WeekButton>
      </Footer>
    </ChangerWrapp>
  );
}

export default WeekChanger;
