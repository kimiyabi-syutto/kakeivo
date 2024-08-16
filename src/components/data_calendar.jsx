// データ確認(カレンダー)コンポーネント

import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export const CalendarPage = () => {
    return (
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={7} />
        </LocalizationProvider>
      </div>
    );
  };
  