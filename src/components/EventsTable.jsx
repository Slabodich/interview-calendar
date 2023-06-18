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
  padding: 3px;
  border: #ccc solid 1px;
  background-clip: content-box;
  background-color: ${({ hasEvent, isSelected }) =>
    hasEvent && isSelected ? '#B3B7FF' : hasEvent ? '#EBECFF' : 'transparent'};

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

function EventsTable({
  events,
  startDate,
  setShowDeleteButton,
  selectedCell,
  setSelectedCell,
}) {
  const hours = React.useMemo(
    () =>
      Array.from({ length: 24 }, (_, index) =>
        moment().startOf('day').hour(index).format('HH:00'),
      ),
    [],
  );

  const currentDateRange = React.useMemo(
    () =>
      Array.from({ length: 7 }, (_, dayIndex) =>
        moment(startDate).startOf('isoWeek').clone().add(dayIndex, 'days'),
      ),
    [startDate],
  );

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
              {currentDateRange.map((currentDate, dayIndex) => {
                const dateKey = currentDate.format('DD-MM-YYYY');
                const hasEvent = events[dateKey] || [];
                const isSelected =
                  selectedCell &&
                  selectedCell.hour === hour &&
                  selectedCell.dayIndex === dayIndex;
                return (
                  <TableCell
                    key={`${hour}-${dayIndex}`}
                    hasEvent={hasEvent.includes(hour)}
                    isSelected={isSelected}
                    onMouseDown={() => {
                      if (hasEvent.includes(hour)) {
                        setSelectedCell({ dateKey, hour, dayIndex });
                        setShowDeleteButton(true);
                      } else {
                        setSelectedCell(null);
                        setShowDeleteButton(false);
                      }
                    }}
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
