// 支払い方法設定画面
import React, { useState, useEffect } from "react";
import { generateClient } from 'aws-amplify/api';
import { listPayWays } from "../graphql/queries";
import {
  createPayWay as createPayWayMutation,
  deletePayWay as deletePayWayMutation,
} from "../graphql/mutations";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";

export const SettingWay = () => {
  const [paywayType, setPaywayType] = React.useState('0');
  const changeType = (event) => {
    setPaywayType(event.target.value);
  };

  const [payWay, setPayWay] = useState([]);
  useEffect(() => {
    fetchPayWay();
  }, []);
  const client = generateClient();

  async function fetchPayWay() {
    const apiData = await client.graphql({ query: listPayWays });
    const payWayFromAPI = apiData.data.listPayWays.items;
    setPayWay(payWayFromAPI);
  }

  async function createPayWay(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("paywayName"),
      type: paywayType,
    };
    await client.graphql({
      query: createPayWayMutation,
      variables: { input: data },
    });
    fetchPayWay();
    event.target.reset();
  }

  async function deletePayWay({ id }) {
    const newPayWays = payWay.filter((payWay) => payWay.id !== id);
    setPayWay(newPayWays);
    await client.graphql({
      query: deletePayWayMutation,
      variables: { input: { id } },
    });
  }
  return (
    <View className="App">
      <View as="form" margin="3rem 0" onSubmit={createPayWay}>
        <TextField
          name="paywayName"
          placeholder="支払い方法"
          label="paywayName"
          labelHidden
          variation="quiet"
          required
        /><br/>
        <Select
          value ={paywayType}
          label="paywayType"
          onChange={changeType}>
          <MenuItem value ={"0"}>即時系</MenuItem>
          <MenuItem value ={"1"}>クレジット系</MenuItem>
          <MenuItem value ={"2"}>先払い系</MenuItem>
        </Select><br/><br/><br/>
        <Button type="submit" variation="primary">登録</Button>
      </View>
      <Heading level={2}>一覧</Heading>
      <View margin="3rem 0">
        <h3>即時系</h3>
        {payWay.filter((pw)=>pw.type==0).map((pw) => (
          <Flex key={pw.id} direction="row" justifyContent="center" alignItems="center">
            <Text as="strong" fontWeight={700}>{pw.name}</Text>
            <Text as="span">{pw.type}</Text>
            <Button variation="link" onClick={() => deletePayWay(pw)}>削除</Button>
          </Flex>
        ))}
        <h3>クレジット系</h3>
        {payWay.filter((pw)=>pw.type==1).map((pw) => (
          <Flex key={pw.id} direction="row" justifyContent="center" alignItems="center">
            <Text as="strong" fontWeight={700}>{pw.name}</Text>
            <Text as="span">{pw.type}</Text>
            <Button variation="link" onClick={() => deletePayWay(pw)}>削除</Button>
          </Flex>
        ))}
        <h3>先払い系</h3>
        {payWay.filter((pw)=>pw.type==2).map((pw) => (
          <Flex key={pw.id} direction="row" justifyContent="center" alignItems="center">
            <Text as="strong" fontWeight={700}>{pw.name}</Text>
            <Text as="span">{pw.type}</Text>
            <Button variation="link" onClick={() => deletePayWay(pw)}>削除</Button>
          </Flex>
        ))}
      </View>
    </View>
  );
};
  