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
        <View margin="3rem 0">
          {receipts.map((receipt) => (
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
