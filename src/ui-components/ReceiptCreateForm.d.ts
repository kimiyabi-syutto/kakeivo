/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReceiptCreateFormInputValues = {
    store?: string;
    buyDate?: string;
    sumPrice?: number;
    kind?: string;
    payWay?: string;
};
export declare type ReceiptCreateFormValidationValues = {
    store?: ValidationFunction<string>;
    buyDate?: ValidationFunction<string>;
    sumPrice?: ValidationFunction<number>;
    kind?: ValidationFunction<string>;
    payWay?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReceiptCreateFormOverridesProps = {
    ReceiptCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    store?: PrimitiveOverrideProps<TextFieldProps>;
    buyDate?: PrimitiveOverrideProps<TextFieldProps>;
    sumPrice?: PrimitiveOverrideProps<TextFieldProps>;
    kind?: PrimitiveOverrideProps<TextFieldProps>;
    payWay?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReceiptCreateFormProps = React.PropsWithChildren<{
    overrides?: ReceiptCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReceiptCreateFormInputValues) => ReceiptCreateFormInputValues;
    onSuccess?: (fields: ReceiptCreateFormInputValues) => void;
    onError?: (fields: ReceiptCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReceiptCreateFormInputValues) => ReceiptCreateFormInputValues;
    onValidate?: ReceiptCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReceiptCreateForm(props: ReceiptCreateFormProps): React.ReactElement;
