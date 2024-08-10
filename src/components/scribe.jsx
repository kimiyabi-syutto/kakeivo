import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
// import { API } from "@aws-amplify/api";
import { generateClient } from 'aws-amplify/api';
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listReceipts } from "../graphql/queries";
import {
  createReceipt as createReceiptMutation,
  deleteReceipt as deleteReceiptMutation,
} from "../graphql/mutations";

export const Scribe = () => {

  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    fetchReceipts();
  }, []);
  const client = generateClient();

  async function fetchReceipts() {
    const apiData = await client.graphql({ query: listReceipts });
    const receiptsFromAPI = apiData.data.listReceipts.items;
    setReceipts(receiptsFromAPI);
  }

  async function createReceipt(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      storeName: form.get("storeName"),
      sumPrice: form.get("sumPrice"),
    };
    await client.graphql({
      query: createReceiptMutation,
      variables: { input: data },
    });
    fetchReceipts();
    event.target.reset();
  }

  async function deleteReceipt({ id }) {
    const newReceipts = receipts.filter((receipt) => receipt.id !== id);
    setReceipts(newReceipts);
    await client.graphql({
      query: deleteReceiptMutation,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App">
      <Heading level={1}>My Receipts App</Heading>
      <View as="form" margin="3rem 0" onSubmit={createReceipt}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="storeName"
            placeholder="店名"
            label="storeName"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="sumPrice"
            placeholder="合計"
            label="sumPrice"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            登録
          </Button>
        </Flex>
      </View>
      <Heading level={2}>一覧</Heading>
      <View margin="3rem 0">
        {receipts.map((receipt) => (
          <Flex
            key={receipt.id || receipt.storeName}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {receipt.storeName}
            </Text>
            <Text as="span">{receipt.sumPrice}</Text>
            <Button variation="link" onClick={() => deleteReceipt(receipt)}>
              Delete receipt
            </Button>
          </Flex>
        ))}
      </View>
    </View>
  );
};
