import React from 'react';
import moment from 'moment';

import EventsTable from './components/EventsTable';
import Header from './components/Header';
import WeekChanger from './components/WeekChanger';
import Footer from './components/Footer';

const App = () => {
  const [startDate, setStartDate] = React.useState(
    moment().startOf('isoWeek').add(0, 'day'),
  );
  const [events, setEvents] = React.useState({});
  const [showDeleteButton, setShowDeleteButton] = React.useState(false);
  const [selectedCell, setSelectedCell] = React.useState({});

  React.useEffect(() => {
    if (typeof Storage !== 'undefined') {
      try {
        const savedEvents = localStorage.getItem('events');
        if (savedEvents) {
          setEvents(JSON.parse(savedEvents));
        }
      } catch (error) {
        console.error('Ошибка чтения из localStorage:', error);
      }
    } else {
      console.warn('LocalStorage не поддерживается в этом браузере.');
    }
  }, []);

  React.useEffect(() => {
    if (typeof Storage !== 'undefined') {
      try {
        if (Object.keys(events).length !== 0) {
          localStorage.setItem('events', JSON.stringify(events));
        }
      } catch (error) {
        console.error('Ошибка записи в localStorage:', error);
      }
    } else {
      console.warn('LocalStorage не поддерживается в этом браузере.');
    }
  }, [events]);

  return (
    <div>
      <Header events={events} setEvents={setEvents} />
      <WeekChanger startDate={startDate} setStartDate={setStartDate} />
      <EventsTable
        events={events}
        startDate={startDate}
        setShowDeleteButton={setShowDeleteButton}
        selectedCell={selectedCell}
        setSelectedCell={setSelectedCell}
      />
      <Footer
        events={events}
        setEvents={setEvents}
        setStartDate={setStartDate}
        showDeleteButton={showDeleteButton}
        selectedCell={selectedCell}
      />
    </div>
  );
};

export default App;
