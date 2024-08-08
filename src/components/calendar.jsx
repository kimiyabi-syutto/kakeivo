import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const CalendarPage = () => {
    return (
      <div>
        <Calendar calendarType="gregory" />
      </div>
    );
  };
  