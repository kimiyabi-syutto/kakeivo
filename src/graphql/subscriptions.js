/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateReceipt = /* GraphQL */ `
  subscription OnCreateReceipt(
    $filter: ModelSubscriptionReceiptFilterInput
    $owner: String
  ) {
    onCreateReceipt(filter: $filter, owner: $owner) {
      id
      goods
      store
      buyDate
      sumPrice
      kind
      payWay
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateReceipt = /* GraphQL */ `
  subscription OnUpdateReceipt(
    $filter: ModelSubscriptionReceiptFilterInput
    $owner: String
  ) {
    onUpdateReceipt(filter: $filter, owner: $owner) {
      id
      goods
      store
      buyDate
      sumPrice
      kind
      payWay
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteReceipt = /* GraphQL */ `
  subscription OnDeleteReceipt(
    $filter: ModelSubscriptionReceiptFilterInput
    $owner: String
  ) {
    onDeleteReceipt(filter: $filter, owner: $owner) {
      id
      goods
      store
      buyDate
      sumPrice
      kind
      payWay
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateKind = /* GraphQL */ `
  subscription OnCreateKind(
    $filter: ModelSubscriptionKindFilterInput
    $owner: String
  ) {
    onCreateKind(filter: $filter, owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateKind = /* GraphQL */ `
  subscription OnUpdateKind(
    $filter: ModelSubscriptionKindFilterInput
    $owner: String
  ) {
    onUpdateKind(filter: $filter, owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteKind = /* GraphQL */ `
  subscription OnDeleteKind(
    $filter: ModelSubscriptionKindFilterInput
    $owner: String
  ) {
    onDeleteKind(filter: $filter, owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreatePayWay = /* GraphQL */ `
  subscription OnCreatePayWay(
    $filter: ModelSubscriptionPayWayFilterInput
    $owner: String
  ) {
    onCreatePayWay(filter: $filter, owner: $owner) {
      id
      name
      type
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdatePayWay = /* GraphQL */ `
  subscription OnUpdatePayWay(
    $filter: ModelSubscriptionPayWayFilterInput
    $owner: String
  ) {
    onUpdatePayWay(filter: $filter, owner: $owner) {
      id
      name
      type
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeletePayWay = /* GraphQL */ `
  subscription OnDeletePayWay(
    $filter: ModelSubscriptionPayWayFilterInput
    $owner: String
  ) {
    onDeletePayWay(filter: $filter, owner: $owner) {
      id
      name
      type
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
