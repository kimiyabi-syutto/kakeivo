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
export declare type PayWayCreateFormInputValues = {
    name?: string;
    type?: number;
};
export declare type PayWayCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    type?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PayWayCreateFormOverridesProps = {
    PayWayCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PayWayCreateFormProps = React.PropsWithChildren<{
    overrides?: PayWayCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PayWayCreateFormInputValues) => PayWayCreateFormInputValues;
    onSuccess?: (fields: PayWayCreateFormInputValues) => void;
    onError?: (fields: PayWayCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PayWayCreateFormInputValues) => PayWayCreateFormInputValues;
    onValidate?: PayWayCreateFormValidationValues;
} & React.CSSProperties>;
export default function PayWayCreateForm(props: PayWayCreateFormProps): React.ReactElement;
