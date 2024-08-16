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
    storeName: "",
    buyDate: "",
    sumPrice: "",
  };
  const [storeName, setStoreName] = React.useState(initialValues.storeName);
  const [buyDate, setBuyDate] = React.useState(initialValues.buyDate);
  const [sumPrice, setSumPrice] = React.useState(initialValues.sumPrice);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = receiptRecord
      ? { ...initialValues, ...receiptRecord }
      : initialValues;
    setStoreName(cleanValues.storeName);
    setBuyDate(cleanValues.buyDate);
    setSumPrice(cleanValues.sumPrice);
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
    storeName: [],
    buyDate: [],
    sumPrice: [],
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
          storeName: storeName ?? null,
          buyDate: buyDate ?? null,
          sumPrice: sumPrice ?? null,
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
        label="Store name"
        isRequired={false}
        isReadOnly={false}
        value={storeName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              storeName: value,
              buyDate,
              sumPrice,
            };
            const result = onChange(modelFields);
            value = result?.storeName ?? value;
          }
          if (errors.storeName?.hasError) {
            runValidationTasks("storeName", value);
          }
          setStoreName(value);
        }}
        onBlur={() => runValidationTasks("storeName", storeName)}
        errorMessage={errors.storeName?.errorMessage}
        hasError={errors.storeName?.hasError}
        {...getOverrideProps(overrides, "storeName")}
      ></TextField>
      <TextField
        label="Buy date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={buyDate && convertToLocal(new Date(buyDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              storeName,
              buyDate: value,
              sumPrice,
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
        isRequired={false}
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
              storeName,
              buyDate,
              sumPrice: value,
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