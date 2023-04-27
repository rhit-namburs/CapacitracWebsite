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
export declare type SettingsCreateFormInputValues = {
    diameter?: number;
    cylinderHeight?: number;
    conicalAngle?: number;
    binHeight?: number;
};
export declare type SettingsCreateFormValidationValues = {
    diameter?: ValidationFunction<number>;
    cylinderHeight?: ValidationFunction<number>;
    conicalAngle?: ValidationFunction<number>;
    binHeight?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SettingsCreateFormOverridesProps = {
    SettingsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    diameter?: PrimitiveOverrideProps<TextFieldProps>;
    cylinderHeight?: PrimitiveOverrideProps<TextFieldProps>;
    conicalAngle?: PrimitiveOverrideProps<TextFieldProps>;
    binHeight?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SettingsCreateFormProps = React.PropsWithChildren<{
    overrides?: SettingsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SettingsCreateFormInputValues) => SettingsCreateFormInputValues;
    onSuccess?: (fields: SettingsCreateFormInputValues) => void;
    onError?: (fields: SettingsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SettingsCreateFormInputValues) => SettingsCreateFormInputValues;
    onValidate?: SettingsCreateFormValidationValues;
} & React.CSSProperties>;
export default function SettingsCreateForm(props: SettingsCreateFormProps): React.ReactElement;
