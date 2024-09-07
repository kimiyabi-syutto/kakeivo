// データ確認(カレンダー)コンポーネント

import * as React from 'react';
import {PriceCalendar} from "./atom/price_calendar"

export const CalendarPage = () => {
  var today = new Date();
  return (
    <div>
        <PriceCalendar 
          date={{
            year:today.getFullYear(),
            month:today.getMonth()+1,
            day:today.getDate()}}
        />
    </div>
  );
};
