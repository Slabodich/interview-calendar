import React from 'react';
import moment from 'moment';

import EventsTable from './components/EventsTable';
import Header from './components/Header';
import WeekChanger from './components/WeekChanger';
import Footer from './components/Footer';

const App = () => {
  const [startDate, setStartDate] = React.useState(
    moment().startOf('week').add(1, 'day'),
  );
  const [events, setEvents] = React.useState({
    '15-01-2023': ['10:00', '22:00'],
  });
  return (
    <div>
      <Header />
      <WeekChanger startDate={startDate} setStartDate={setStartDate} />
      <EventsTable events={events} startDate={startDate} />
      <Footer setStartDate={setStartDate} />
    </div>
  );
};

export default App;
