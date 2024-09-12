// データ確認(カレンダー)コンポーネント

import { useState, useEffect } from "react";
import {PriceCalendar} from "./atom/price_calendar"

import { generateClient } from 'aws-amplify/api';
import { listReceipts } from "../graphql/queries";
import {
  deleteReceipt as deleteReceiptMutation,
} from "../graphql/mutations";

import { Paper, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead,TableRow } from '@mui/material';

export const CalendarPage = () => {

  const [date, setDate] = useState(new Date());
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {}, []);
  const client = generateClient();

  async function fetchReceipts() {
    const apiData = await client.graphql({ query: listReceipts });
    const receiptsFromAPI = apiData.data.listReceipts.items;
    setReceipts(receiptsFromAPI);
  }

  async function deleteReceipt({ id }) {
    const newReceipts = receipts.filter((receipt) => receipt.id !== id);
    setReceipts(newReceipts);
    await client.graphql({
      query: deleteReceiptMutation,
      variables: { input: { id } },
    });
    fetchReceipts();
  }

  return (
    <div>
      <PriceCalendar 
        date={{
          year:date.getFullYear(),
          month:date.getMonth()+1,
          day:date.getDate()}}
        priceData={""}
        onChange={
          (d)=>setDate(new Date(d.year, d.month-1, d.day))
        }
      />
      <br/>
      <Paper sx={{width:"100%" }}>
        {date.getFullYear()}年{date.getMonth()+1}月11日～{date.getFullYear()}年{date.getMonth() == 11 ? 1 : date.getMonth()+2}月10日
        <br/>
        支出：XXX円
        <br/>
        　現金：ZZZ円
        <br/>
        　イオンクレジット(次月引落し)：ZZZ円
        <br/>
        収入：YYY円
        <br/>
      </Paper>
      <br/>
      <Paper sx={{width:"100%" }}>
        {date.getFullYear()}年{date.getMonth()+1}月{date.getDate()}日

      </Paper>
    </div>
  );
};
