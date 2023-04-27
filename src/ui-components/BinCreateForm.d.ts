/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BinCreateFormInputValues = {
    name?: string;
    city?: string;
    state?: string;
    fillPercentage?: number;
};
export declare type BinCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    fillPercentage?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BinCreateFormOverridesProps = {
    BinCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    fillPercentage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BinCreateFormProps = React.PropsWithChildren<{
    overrides?: BinCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BinCreateFormInputValues) => BinCreateFormInputValues;
    onSuccess?: (fields: BinCreateFormInputValues) => void;
    onError?: (fields: BinCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BinCreateFormInputValues) => BinCreateFormInputValues;
    onValidate?: BinCreateFormValidationValues;
} & React.CSSProperties>;
export default function BinCreateForm(props: BinCreateFormProps): React.ReactElement;
