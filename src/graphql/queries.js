/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReceipt = /* GraphQL */ `
  query GetReceipt($id: ID!) {
    getReceipt(id: $id) {
      id
      storeName
      buyDate
      sumPrice
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
        storeName
        buyDate
        sumPrice
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
