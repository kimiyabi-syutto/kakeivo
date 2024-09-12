// カレンダー表示コンポーネント
import React, { useState, useEffect } from "react";

import { Paper, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead,TableRow } from '@mui/material';

const isUruu = (year)=>{
  return year%4==0 && ((year%100!=0) || (year%400==0));
}
const getFirstDay = (date)=>{
  var fd = 0;
  for(var i = 1; i<date.year; ++i){
    fd += isUruu(i) ? 2 : 1;
  }
  for(var i = 1; i<date.month; ++i){
    fd += getMonthDays(date.year, i);
  }
  fd += 11;
  return fd % 7;
}
const getMonthDays = (y, m)=>{
  if(m == 2) {
    return isUruu(y) ? 29 : 28;
  }
  if(m == 4 || m == 6 || m == 9 || m == 11) {
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
  var monthdays=getMonthDays(date.year, date.month);
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
  var monthdays=getMonthDays(date.year, date.month);
  if(date.day > monthdays){
    date.day=monthdays;
  }
  return date;
}

export const PriceCalendar = ({date, priceData, onChange}) => {
  var dispYM = (date.day > 10) ? date : getPrevMonth(date);
  var firstDay = getFirstDay(dispYM);
  var monthDays = getMonthDays(dispYM.year,dispYM.month);
  var weekCount = Math.ceil((firstDay + monthDays) / 7);
  var days = ["日","月","火","水","木","金","土"];
  return (
    <Paper sx={{width:"100%" }}>
      <Button onClick={()=>{
        onChange(getPrevMonth(date));
      }}>
        ＜
      </Button>
      {dispYM.year}年{dispYM.month}月
      <Button onClick={()=>{
        onChange(getNextMonth(date));
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
                    var v=(i*7+j-firstDay+11);
                    var p = 0;
                    return <TableCell
                      sx = {{p:0, m:0}}
                      align="center"
                      onClick={()=>{
                        if(10 < v && v <= monthDays){
                          date.day = v;
                          onChange(date);
                        }
                        if(monthDays < v && v <= monthDays + 10){
                          date.day = v-monthDays;
                          date = getNextMonth(date);
                          onChange(date);
                        }
                      }}>
                      <Typography>
                        {(10 < v && v <= monthDays) ? v
                        : (monthDays < v && v <= monthDays + 10) ? v-monthDays
                        : "" }<br/>
                        {p == 0 ? "" : "¥" + p}
                      </Typography>
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
  