// データ確認(カレンダー)コンポーネント

import { useState, useEffect } from "react";
import {PriceCalendar} from "./atom/price_calendar"
import { BackButton } from './atom/back_button';

import { generateClient } from 'aws-amplify/api';
import { listReceipts } from "../graphql/queries";
import {
  deleteReceipt as deleteReceiptMutation,
} from "../graphql/mutations";

import { Flex, Text, View } from "@aws-amplify/ui-react";
import { Paper, Button, Typography } from '@mui/material';

export const CalendarPage = () => {

  const [date, setDate] = useState(new Date());
  const [receipts, setReceipts] = useState([]);
  const [isReceiptsLoaded, setReceiptsLoaded] = useState(false);

  useEffect(() => {
    if(!isReceiptsLoaded){
      fetchReceipts();
      setReceiptsLoaded(true);
    }
  }, []);
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
  var baseDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  if(baseDate.getDate() <= 10){
    baseDate.setMonth(baseDate.getMonth() - 1);
    baseDate.setDate(11);
  }
  var baseNextDate = new Date(baseDate.getFullYear(), baseDate.getMonth() - 1, baseDate.getDate());
  baseNextDate.setMonth(baseDate.getMonth() + 1);
  baseNextDate.setDate(10);

  var periodReceipts = receipts.filter((r)=>{
    var recDate = new Date(parseInt(r.buyDate.substring(0, 4)), parseInt(r.buyDate.substring(5, 7))-1, parseInt(r.buyDate.substring(8, 10)));
    return (baseDate <= recDate) && (recDate <= baseNextDate);
  });
  

  return (
    <div>
      <BackButton to={"/"} />
      <PriceCalendar
        date={{
          year:date.getFullYear(),
          month:date.getMonth()+1,
          day:date.getDate()}}
        priceData={receipts}
        onChange={
          (d)=>{
            setDate(new Date(d.year, d.month-1, d.day));
          }
        }
      />
      <br/>
      <Paper sx={{width:"100%" }}>
        {baseDate.getFullYear()}年{baseDate.getMonth()+1}月11日～{baseNextDate.getFullYear()}年{baseNextDate.getMonth()+1}月10日
        <br/>
        支出：{periodReceipts.filter((r)=>r.kind != "収入").reduce((sum, r)=>sum + r.sumPrice, 0)}円
        <br/>
        　現金：{periodReceipts.filter((r)=>r.payWay == "現金").reduce((sum, r)=>sum + r.sumPrice, 0)}円
        <br/>
        　イオンクレジット(次月引落し)：{periodReceipts.filter((r)=>r.payWay == "イオンクレジット").reduce((sum, r)=>sum + r.sumPrice, 0)}円
        <br/>
        収入：{periodReceipts.filter((r)=>r.kind == "収入").reduce((sum, r)=>sum + r.sumPrice, 0)}円
        <br/>
      </Paper>
      <br/>
      <Paper sx={{width:"100%" }}>
        {date.getFullYear()}年{date.getMonth()+1}月{date.getDate()}日
        <View margin="3rem 0">
          {receipts
            .filter((r) =>
              date.getFullYear() == parseInt(r.buyDate.substring(0, 4)) &&
              (date.getMonth() + 1) == parseInt(r.buyDate.substring(5, 7)) &&
              date.getDate() == parseInt(r.buyDate.substring(8, 10)))
            .map((receipt) => (
            <Flex
              key={receipt.id || receipt.store}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Text as="strong" fontWeight={700}>
                {receipt.goods ? receipt.goods : "-----" }
              </Text>
              <Text fontWeight={700}>
                {receipt.store ? receipt.store : "-----"}
              </Text>
              <Text as="span">{receipt.sumPrice}円</Text>
              <Text as="strong" fontWeight={700}>
                [{receipt.kind}]
              </Text>
              <Text as="strong" fontWeight={700}>
                [{receipt.payWay}]
              </Text>
              <Button variation="link" onClick={() => deleteReceipt(receipt)}>
                削除
              </Button>
            </Flex>
          ))}
        </View>
      </Paper>
    </div>
  );
};
