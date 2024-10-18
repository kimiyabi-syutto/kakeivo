/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReceipt = /* GraphQL */ `
  mutation CreateReceipt(
    $input: CreateReceiptInput!
    $condition: ModelReceiptConditionInput
  ) {
    createReceipt(input: $input, condition: $condition) {
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
export const updateReceipt = /* GraphQL */ `
  mutation UpdateReceipt(
    $input: UpdateReceiptInput!
    $condition: ModelReceiptConditionInput
  ) {
    updateReceipt(input: $input, condition: $condition) {
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
export const deleteReceipt = /* GraphQL */ `
  mutation DeleteReceipt(
    $input: DeleteReceiptInput!
    $condition: ModelReceiptConditionInput
  ) {
    deleteReceipt(input: $input, condition: $condition) {
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
export const createKind = /* GraphQL */ `
  mutation CreateKind(
    $input: CreateKindInput!
    $condition: ModelKindConditionInput
  ) {
    createKind(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateKind = /* GraphQL */ `
  mutation UpdateKind(
    $input: UpdateKindInput!
    $condition: ModelKindConditionInput
  ) {
    updateKind(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteKind = /* GraphQL */ `
  mutation DeleteKind(
    $input: DeleteKindInput!
    $condition: ModelKindConditionInput
  ) {
    deleteKind(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createPayWay = /* GraphQL */ `
  mutation CreatePayWay(
    $input: CreatePayWayInput!
    $condition: ModelPayWayConditionInput
  ) {
    createPayWay(input: $input, condition: $condition) {
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
export const updatePayWay = /* GraphQL */ `
  mutation UpdatePayWay(
    $input: UpdatePayWayInput!
    $condition: ModelPayWayConditionInput
  ) {
    updatePayWay(input: $input, condition: $condition) {
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
export const deletePayWay = /* GraphQL */ `
  mutation DeletePayWay(
    $input: DeletePayWayInput!
    $condition: ModelPayWayConditionInput
  ) {
    deletePayWay(input: $input, condition: $condition) {
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
