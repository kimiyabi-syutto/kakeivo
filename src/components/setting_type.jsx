// 種別設定画面
import React, { useState, useEffect } from "react";
import { generateClient } from 'aws-amplify/api';
import { listKinds } from "../graphql/queries";
import {
  createKind as createKindMutation,
  deleteKind as deleteKindMutation,
} from "../graphql/mutations";

import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";

export const SettingType = () => {
  const [kind, setKind] = useState([]);
  useEffect(() => {
    fetchKind();
  }, []);
  const client = generateClient();

  async function fetchKind() {
    const apiData = await client.graphql({
      query: listKinds,
    });
    const kindFromAPI = apiData.data.listKinds.items.concat();
    kindFromAPI.sort((a,b)=>a.createdAt-b.createdAt);
    setKind(kindFromAPI);
  }

  async function createKind(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("kindName")
    };
    await client.graphql({
      query: createKindMutation,
      variables: { input: data },
    });
    fetchKind();
    event.target.reset();
  }

  async function deleteKind({ id }) {
    const newKinds = kind.filter((kind) => kind.id !== id);
    setKind(newKinds);
    await client.graphql({
      query: deleteKindMutation,
      variables: { input: { id } },
    });
  }
  return (
    <View className="App">
      <View as="form" margin="3rem 0" onSubmit={createKind}>
        <TextField
          name="kindName"
          placeholder="種別"
          label="kindName"
          labelHidden
          variation="quiet"
          required
        /><br/>
        <Button type="submit" variation="primary">登録</Button>
      </View>
      <Heading level={2}>一覧</Heading>
      <View margin="3rem 0">
        {kind.map((pw) => (
          <Flex key={pw.id} direction="row" justifyContent="center" alignItems="center">
            <Text as="strong" fontWeight={700}>{pw.name}</Text>
            <Text as="span">{pw.type}</Text>
            <Button variation="link" onClick={() => deleteKind(pw)}>削除</Button>
          </Flex>
        ))}
      </View>
    </View>
  );
};
  