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
export declare type ReceiptUpdateFormInputValues = {
    storeName?: string;
    buyDate?: string;
    sumPrice?: number;
};
export declare type ReceiptUpdateFormValidationValues = {
    storeName?: ValidationFunction<string>;
    buyDate?: ValidationFunction<string>;
    sumPrice?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReceiptUpdateFormOverridesProps = {
    ReceiptUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    storeName?: PrimitiveOverrideProps<TextFieldProps>;
    buyDate?: PrimitiveOverrideProps<TextFieldProps>;
    sumPrice?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReceiptUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReceiptUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    receipt?: any;
    onSubmit?: (fields: ReceiptUpdateFormInputValues) => ReceiptUpdateFormInputValues;
    onSuccess?: (fields: ReceiptUpdateFormInputValues) => void;
    onError?: (fields: ReceiptUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReceiptUpdateFormInputValues) => ReceiptUpdateFormInputValues;
    onValidate?: ReceiptUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReceiptUpdateForm(props: ReceiptUpdateFormProps): React.ReactElement;