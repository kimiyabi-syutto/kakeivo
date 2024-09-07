// カレンダー表示コンポーネント
import React, { useState, useEffect } from "react";

import { Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead,TableRow } from '@mui/material';

const isUruu = (year)=>{
  return year%4==0 && ((year%100!=0) || (year%400==0));
}
const getFirstDay = (date)=>{
  var fd = 1;
  for(var i = 1; i<date.year; ++i){
    fd += isUruu(i) ? 2 : 1;
  }


  return fd % 7;
}
const getMonthDays = (date)=>{
  if(date.month == 2) {
    return isUruu(date.year) ? 29 : 28;
  }
  if(date.month == 4 || date.month == 6 || date.month == 9 || date.month == 11) {
    return 30;
  }
  return 31;
}
const getPrevMonth = (d)=>{
  var date={
    year:d.year,
    month:d.month,
    day:d.day,
  };
  date.month -= 1;
  if(date.month <= 0){
    date.year -= 1;
    date.month += 12;
  }
  var monthdays=getMonthDays(date);
  if(date.day > monthdays){
    date.day=monthdays;
  }
  return date;
}
const getNextMonth = (d)=>{
  var date={
    year:d.year,
    month:d.month,
    day:d.day,
  };
  date.month += 1;
  if(date.month > 12){
    date.year += 1;
    date.month -= 12;
  }
  var monthdays=getMonthDays(date);
  if(date.day > monthdays){
    date.day=monthdays;
  }
  return date;
}

export const PriceCalendar = ({date, priceData, onChange}) => {
  var [d, setDate] = useState(date); 

  var firstDay = getFirstDay(d);
  var monthDays = getMonthDays(d);
  var weekCount = Math.ceil((firstDay + monthDays) / 7);
  var days = ["日","月","火","水","木","金","土"];
  return (
    <Paper sx={{width:"110%" }}>
      <Button onClick={()=>{
        setDate(getPrevMonth(d));
      }}>
        ＜
      </Button>
      {d.year}年{d.month}月
      <Button onClick={()=>{
        setDate(getNextMonth(d));
      }}>
        ＞
      </Button>
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            { Array(7).fill(0).map((_,i)=>
              <TableCell>{days[i]}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {
            Array(weekCount).fill(0).map((_,i)=>
              <TableRow>
                { Array(7).fill(0).map((_,j)=>
                  {
                    var v=(i*7+j-firstDay);
                    var p = 1200;
                    return <TableCell onClick={()=>{
                    }}>
                      {(v<=0 || monthDays< v) ? "" : v}<br/>
                      ¥{p}
                    </TableCell>
                  }
                )}
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
      {/*
        ...Array(())
      */}

    </Paper>
  );
};
  