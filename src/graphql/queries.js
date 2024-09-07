/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReceipt = /* GraphQL */ `
  query GetReceipt($id: ID!) {
    getReceipt(id: $id) {
      id
      store
      buyDate
      sumPrice
      kind
      payWay
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listReceipts = /* GraphQL */ `
  query ListReceipts(
    $filter: ModelReceiptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReceipts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        store
        buyDate
        sumPrice
        kind
        payWay
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getKind = /* GraphQL */ `
  query GetKind($id: ID!) {
    getKind(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listKinds = /* GraphQL */ `
  query ListKinds(
    $filter: ModelKindFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKinds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPayWay = /* GraphQL */ `
  query GetPayWay($id: ID!) {
    getPayWay(id: $id) {
      id
      name
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPayWays = /* GraphQL */ `
  query ListPayWays(
    $filter: ModelPayWayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayWays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
