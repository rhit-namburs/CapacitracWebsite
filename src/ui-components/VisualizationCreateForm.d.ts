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
export declare type VisualizationCreateFormInputValues = {
    timeStamp?: string;
    inches?: number;
    amps?: number;
    ampsum?: number;
};
export declare type VisualizationCreateFormValidationValues = {
    timeStamp?: ValidationFunction<string>;
    inches?: ValidationFunction<number>;
    amps?: ValidationFunction<number>;
    ampsum?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VisualizationCreateFormOverridesProps = {
    VisualizationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    inches?: PrimitiveOverrideProps<TextFieldProps>;
    amps?: PrimitiveOverrideProps<TextFieldProps>;
    ampsum?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VisualizationCreateFormProps = React.PropsWithChildren<{
    overrides?: VisualizationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: VisualizationCreateFormInputValues) => VisualizationCreateFormInputValues;
    onSuccess?: (fields: VisualizationCreateFormInputValues) => void;
    onError?: (fields: VisualizationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VisualizationCreateFormInputValues) => VisualizationCreateFormInputValues;
    onValidate?: VisualizationCreateFormValidationValues;
} & React.CSSProperties>;
export default function VisualizationCreateForm(props: VisualizationCreateFormProps): React.ReactElement;
