// データ手入力コンポーネント
import React, { useState, useEffect } from "react";
import { BackButton } from './atom/back_button';
import { listReceipts } from "../graphql/queries";
import {
  createReceipt as createReceiptMutation,
  deleteReceipt as deleteReceiptMutation,
} from "../graphql/mutations";

import { listPayWays } from "../graphql/queries";
import { listKinds } from "../graphql/queries";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Select from '@mui/material/Select';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { generateClient } from 'aws-amplify/api';

import { Box, Paper, Stack, MenuItem } from '@mui/material';

import {
  Button,
  TextField,
  View,
} from "@aws-amplify/ui-react";

export const Scribe = () => {
  const [receipt, setReceipt] = useState([]);
  const [paywayIdx, setPaywayIdx] = React.useState(0);
  const [kindIdx, setKindIdx] = React.useState(0);
  const [errorText, setErrorText] = React.useState("");

  const [payWay, setPayWay] = useState([]);
  useEffect(() => {
    fetchPayWay();
  }, []);

  const [kind, setKind] = useState([]);
  useEffect(() => {
    fetchKind();
  }, []);
  async function fetchPayWay() {
    const apiData = await client.graphql({ query: listPayWays });
    const payWayFromAPI = apiData.data.listPayWays.items;
    setPayWay(payWayFromAPI.sort((v1,v2)=>(v1.type - v2.type)));
  }
  async function fetchKind() {
    const apiData = await client.graphql({ query: listKinds });
    const kindFromAPI = apiData.data.listKinds.items.concat();
    kindFromAPI.sort((a,b)=>{return new Date(a.createdAt) - new Date(b.createdAt)});
    console.log(kindFromAPI);
    setKind(kindFromAPI);
  }

  const client = generateClient();

  async function createReceipt(event) {
    setErrorText("入力が足りていません");
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      goods: form.get("goods"),
      store: form.get("storeName"),
      sumPrice: form.get("sumPrice"),
      buyDate: new Date(form.get("buyDate")),
      kind: kind[form.get("kind")].name,
      payWay: payWay[form.get("payWay")].name,
    };
    console.log(data);
    if(Number.isNaN(data.buyDate.getTime()) ||
      data.store == "" ||
      data.sumPrice == "" ||
      data.kind == "" ||
      data.payWay == ""
    ){
      // 失敗
      return;
    }
    // 成功
    await client.graphql({
      query: createReceiptMutation,
      variables: { input: data },
    });
    event.target.reset();
    setErrorText("");
  }
  async function deleteReceipt({ id }) {
    const newReceipts = receipt.filter((receipt) => receipt.id !== id);
    setReceipt(newReceipts);
    await client.graphql({
      query: deleteReceiptMutation,
      variables: { input: { id } },
    });
  }

  return (
    <div>
      <BackButton to={"/"} />
      <Paper elevation={3} sx={{p:3}} >
        <View as="form" margin="3rem 0" onSubmit={createReceipt}>
  <Box sx={{p:1}}>
    <div>購入日付
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker name={"buyDate"} format="YYYY/MM/DD" />
      </LocalizationProvider>
    </div>
  </Box>
  <Stack direction="row" sx={{p:1}}>
    <Box>内容</Box>
    <TextField name={"goods"}></TextField>
  </Stack>
  <Stack direction="row" sx={{p:1}}>
    <Box>店名</Box>
    <TextField name={"storeName"}></TextField>
  </Stack>
  <Stack direction="row" sx={{p:1}}>
    <Box>値段</Box>
    <TextField name={"sumPrice"}></TextField>
    <Box>円</Box>
  </Stack>
  <Box sx={{p:1}}>
    種別
    <Select
      name={"kind"}
      value={kindIdx}
      onChange={
        (e)=> setKindIdx(e.target.value)
      }
    >
      {
        kind.map((v, i)=>{
          return <MenuItem value={i}>{v.name}</MenuItem>
        })
      }
    </Select>
  </Box>
  <Box sx={{p:1}}>
    支払
    <Select
      name={"payWay"}
      value={paywayIdx}
      onChange={
        (e)=>
        setPaywayIdx(e.target.value)
      }
    >
      {
        payWay.map((v, i)=>{
          return <MenuItem value={i}>{v.name}</MenuItem>
        })
      }
    </Select>
  </Box>
          <Button type="submit" variation="primary">登録</Button>
          {errorText}
        </View>
      </Paper>
    </div>
  );
};
