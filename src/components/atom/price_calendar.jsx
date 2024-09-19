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
              <TableCell
              key={i}
              >{days[i]}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {
            Array(weekCount).fill(0).map((_,i)=>
              <TableRow
                key={i}>
                { Array(7).fill(0).map((_,j)=>
                  {
                    var v=(i*7+j-firstDay+11);
                    var dispDate ={
                      year:date.year,
                      month:date.month,
                      day:date.day,
                    };
                    var isEmpty = true;
                    if (10 < v && v <= monthDays + 10 ){
                      var newDay = v <= monthDays ? v : (v - monthDays);
                      var isNextMonth = date.day <= 10;
                      var toNextMonth = newDay <= 10;
                      if(isNextMonth && !toNextMonth){
                        dispDate = getPrevMonth(dispDate);
                      }
                      dispDate.day = newDay;
                      if(!isNextMonth && toNextMonth){
                        dispDate = getNextMonth(dispDate);
                      }
                      isEmpty = false;
                    }

                    var p =isEmpty ? 0 : priceData.reduce((i, v)=>{
                      if(parseInt(v.buyDate.substring(0, 4)) == dispDate.year &&
                        parseInt(v.buyDate.substring(5, 7)) == dispDate.month &&
                        parseInt(v.buyDate.substring(8, 10)) == dispDate.day
                      ){
                        return i + v.sumPrice;
                      }else{
                        return i ;
                      }
                    }, 0);
                    return <TableCell
                      key={i * 7 + j}
                      sx = {{p:0, m:0}}
                      align="center"
                      onClick={ ()=>{
                        if(isEmpty){return;}
                        onChange(dispDate);
                      }}>
                      <Typography
                        sx={{
                          border: (!isEmpty && date.day == dispDate.day) ? 1 : 0, 
                          borderRadius: '50%',
                          height:"50px",
                          width:"50px",
                        }}
                      >
                        { isEmpty ? "" : dispDate.day }<br/>
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
  