/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Bin } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BinUpdateFormInputValues = {
    name?: string;
    city?: string;
    state?: string;
    fillPercentage?: number;
};
export declare type BinUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    fillPercentage?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BinUpdateFormOverridesProps = {
    BinUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    fillPercentage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BinUpdateFormProps = React.PropsWithChildren<{
    overrides?: BinUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bin?: Bin;
    onSubmit?: (fields: BinUpdateFormInputValues) => BinUpdateFormInputValues;
    onSuccess?: (fields: BinUpdateFormInputValues) => void;
    onError?: (fields: BinUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BinUpdateFormInputValues) => BinUpdateFormInputValues;
    onValidate?: BinUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BinUpdateForm(props: BinUpdateFormProps): React.ReactElement;
