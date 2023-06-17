import React from 'react';
import moment from 'moment';

import styled from 'styled-components';

const TableWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  gap: 10px;
`;
const Table = styled.table`
  margin-top: 12px;
  width: 100%;
  border-collapse: collapse;
`;

const TableCell = styled.td`
  position: relative;
  height: 50.7px;
  padding: 2px;
  border: #ccc solid 1px;
  background-color: ${({ hasEvent }) =>
    hasEvent ? 'lightblue' : 'transparent'};

  &:first-child {
    border-left: none;
  }
`;
const HoursWrapper = styled.div`
  justify-self: end;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;
const Hours = styled.span`
  padding-bottom: 30px;
  color: #c3c3c3;
  font-size: 18px;
`;

function EventsTable({ events, startDate }) {
  const hours = [];
  const startTime = moment().startOf('day').hour(0);
  const endTime = moment().startOf('day').hour(23);

  while (startTime.isSameOrBefore(endTime)) {
    hours.push(startTime.format('HH:00'));
    startTime.add(1, 'hour');
  }

  return (
    <TableWrapper>
      <HoursWrapper>
        {hours.map((item) => (
          <Hours key={item}>{item}</Hours>
        ))}
      </HoursWrapper>
      <Table>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour}>
              {Array.from({ length: 7 }).map((_, dayIndex) => {
                const timeKey = moment(startDate)
                  .hour(dayIndex)
                  .format('DD-MM-YYYY HH:00');
                console.log(timeKey);
                const eventList = events[timeKey] || [];

                return (
                  <TableCell
                    key={`${hour}-${dayIndex}`}
                    hasEvent={eventList.length > 0}
                  />
                );
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
}

export default EventsTable;
