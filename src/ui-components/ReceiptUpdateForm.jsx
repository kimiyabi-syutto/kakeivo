/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getReceipt } from "../graphql/queries";
import { updateReceipt } from "../graphql/mutations";
const client = generateClient();
export default function ReceiptUpdateForm(props) {
  const {
    id: idProp,
    receipt: receiptModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    goods: "",
    store: "",
    buyDate: "",
    sumPrice: "",
    kind: "",
    payWay: "",
  };
  const [goods, setGoods] = React.useState(initialValues.goods);
  const [store, setStore] = React.useState(initialValues.store);
  const [buyDate, setBuyDate] = React.useState(initialValues.buyDate);
  const [sumPrice, setSumPrice] = React.useState(initialValues.sumPrice);
  const [kind, setKind] = React.useState(initialValues.kind);
  const [payWay, setPayWay] = React.useState(initialValues.payWay);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = receiptRecord
      ? { ...initialValues, ...receiptRecord }
      : initialValues;
    setGoods(cleanValues.goods);
    setStore(cleanValues.store);
    setBuyDate(cleanValues.buyDate);
    setSumPrice(cleanValues.sumPrice);
    setKind(cleanValues.kind);
    setPayWay(cleanValues.payWay);
    setErrors({});
  };
  const [receiptRecord, setReceiptRecord] = React.useState(receiptModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getReceipt.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getReceipt
        : receiptModelProp;
      setReceiptRecord(record);
    };
    queryData();
  }, [idProp, receiptModelProp]);
  React.useEffect(resetStateValues, [receiptRecord]);
  const validations = {
    goods: [],
    store: [],
    buyDate: [{ type: "Required" }],
    sumPrice: [{ type: "Required" }],
    kind: [],
    payWay: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          goods: goods ?? null,
          store: store ?? null,
          buyDate,
          sumPrice,
          kind: kind ?? null,
          payWay: payWay ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateReceipt.replaceAll("__typename", ""),
            variables: {
              input: {
                id: receiptRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ReceiptUpdateForm")}
      {...rest}
    >
      <TextField
        label="Goods"
        isRequired={false}
        isReadOnly={false}
        value={goods}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              goods: value,
              store,
              buyDate,
              sumPrice,
              kind,
              payWay,
            };
            const result = onChange(modelFields);
            value = result?.goods ?? value;
          }
          if (errors.goods?.hasError) {
            runValidationTasks("goods", value);
          }
          setGoods(value);
        }}
        onBlur={() => runValidationTasks("goods", goods)}
        errorMessage={errors.goods?.errorMessage}
        hasError={errors.goods?.hasError}
        {...getOverrideProps(overrides, "goods")}
      ></TextField>
      <TextField
        label="Store"
        isRequired={false}
        isReadOnly={false}
        value={store}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              goods,
              store: value,
              buyDate,
              sumPrice,
              kind,
              payWay,
            };
            const result = onChange(modelFields);
            value = result?.store ?? value;
          }
          if (errors.store?.hasError) {
            runValidationTasks("store", value);
          }
          setStore(value);
        }}
        onBlur={() => runValidationTasks("store", store)}
        errorMessage={errors.store?.errorMessage}
        hasError={errors.store?.hasError}
        {...getOverrideProps(overrides, "store")}
      ></TextField>
      <TextField
        label="Buy date"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={buyDate && convertToLocal(new Date(buyDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              goods,
              store,
              buyDate: value,
              sumPrice,
              kind,
              payWay,
            };
            const result = onChange(modelFields);
            value = result?.buyDate ?? value;
          }
          if (errors.buyDate?.hasError) {
            runValidationTasks("buyDate", value);
          }
          setBuyDate(value);
        }}
        onBlur={() => runValidationTasks("buyDate", buyDate)}
        errorMessage={errors.buyDate?.errorMessage}
        hasError={errors.buyDate?.hasError}
        {...getOverrideProps(overrides, "buyDate")}
      ></TextField>
      <TextField
        label="Sum price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={sumPrice}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              goods,
              store,
              buyDate,
              sumPrice: value,
              kind,
              payWay,
            };
            const result = onChange(modelFields);
            value = result?.sumPrice ?? value;
          }
          if (errors.sumPrice?.hasError) {
            runValidationTasks("sumPrice", value);
          }
          setSumPrice(value);
        }}
        onBlur={() => runValidationTasks("sumPrice", sumPrice)}
        errorMessage={errors.sumPrice?.errorMessage}
        hasError={errors.sumPrice?.hasError}
        {...getOverrideProps(overrides, "sumPrice")}
      ></TextField>
      <TextField
        label="Kind"
        isRequired={false}
        isReadOnly={false}
        value={kind}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              goods,
              store,
              buyDate,
              sumPrice,
              kind: value,
              payWay,
            };
            const result = onChange(modelFields);
            value = result?.kind ?? value;
          }
          if (errors.kind?.hasError) {
            runValidationTasks("kind", value);
          }
          setKind(value);
        }}
        onBlur={() => runValidationTasks("kind", kind)}
        errorMessage={errors.kind?.errorMessage}
        hasError={errors.kind?.hasError}
        {...getOverrideProps(overrides, "kind")}
      ></TextField>
      <TextField
        label="Pay way"
        isRequired={false}
        isReadOnly={false}
        value={payWay}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              goods,
              store,
              buyDate,
              sumPrice,
              kind,
              payWay: value,
            };
            const result = onChange(modelFields);
            value = result?.payWay ?? value;
          }
          if (errors.payWay?.hasError) {
            runValidationTasks("payWay", value);
          }
          setPayWay(value);
        }}
        onBlur={() => runValidationTasks("payWay", payWay)}
        errorMessage={errors.payWay?.errorMessage}
        hasError={errors.payWay?.hasError}
        {...getOverrideProps(overrides, "payWay")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || receiptModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || receiptModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
