/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateReceipt = /* GraphQL */ `
  subscription OnCreateReceipt($filter: ModelSubscriptionReceiptFilterInput) {
    onCreateReceipt(filter: $filter) {
      id
      goods
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
export const onUpdateReceipt = /* GraphQL */ `
  subscription OnUpdateReceipt($filter: ModelSubscriptionReceiptFilterInput) {
    onUpdateReceipt(filter: $filter) {
      id
      goods
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
export const onDeleteReceipt = /* GraphQL */ `
  subscription OnDeleteReceipt($filter: ModelSubscriptionReceiptFilterInput) {
    onDeleteReceipt(filter: $filter) {
      id
      goods
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
export const onCreateKind = /* GraphQL */ `
  subscription OnCreateKind($filter: ModelSubscriptionKindFilterInput) {
    onCreateKind(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateKind = /* GraphQL */ `
  subscription OnUpdateKind($filter: ModelSubscriptionKindFilterInput) {
    onUpdateKind(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteKind = /* GraphQL */ `
  subscription OnDeleteKind($filter: ModelSubscriptionKindFilterInput) {
    onDeleteKind(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePayWay = /* GraphQL */ `
  subscription OnCreatePayWay($filter: ModelSubscriptionPayWayFilterInput) {
    onCreatePayWay(filter: $filter) {
      id
      name
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePayWay = /* GraphQL */ `
  subscription OnUpdatePayWay($filter: ModelSubscriptionPayWayFilterInput) {
    onUpdatePayWay(filter: $filter) {
      id
      name
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePayWay = /* GraphQL */ `
  subscription OnDeletePayWay($filter: ModelSubscriptionPayWayFilterInput) {
    onDeletePayWay(filter: $filter) {
      id
      name
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
