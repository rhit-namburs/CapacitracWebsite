/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Settings } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SettingsUpdateFormInputValues = {
    diameter?: number;
    cylinderHeight?: number;
    conicalAngle?: number;
    binHeight?: number;
};
export declare type SettingsUpdateFormValidationValues = {
    diameter?: ValidationFunction<number>;
    cylinderHeight?: ValidationFunction<number>;
    conicalAngle?: ValidationFunction<number>;
    binHeight?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SettingsUpdateFormOverridesProps = {
    SettingsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    diameter?: PrimitiveOverrideProps<TextFieldProps>;
    cylinderHeight?: PrimitiveOverrideProps<TextFieldProps>;
    conicalAngle?: PrimitiveOverrideProps<TextFieldProps>;
    binHeight?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SettingsUpdateFormProps = React.PropsWithChildren<{
    overrides?: SettingsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    settings?: Settings;
    onSubmit?: (fields: SettingsUpdateFormInputValues) => SettingsUpdateFormInputValues;
    onSuccess?: (fields: SettingsUpdateFormInputValues) => void;
    onError?: (fields: SettingsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SettingsUpdateFormInputValues) => SettingsUpdateFormInputValues;
    onValidate?: SettingsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SettingsUpdateForm(props: SettingsUpdateFormProps): React.ReactElement;
