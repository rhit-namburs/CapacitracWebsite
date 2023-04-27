/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Visualization } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type VisualizationUpdateFormInputValues = {
    timeStamp?: string;
    inches?: number;
    amps?: number;
    ampsum?: number;
};
export declare type VisualizationUpdateFormValidationValues = {
    timeStamp?: ValidationFunction<string>;
    inches?: ValidationFunction<number>;
    amps?: ValidationFunction<number>;
    ampsum?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VisualizationUpdateFormOverridesProps = {
    VisualizationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    inches?: PrimitiveOverrideProps<TextFieldProps>;
    amps?: PrimitiveOverrideProps<TextFieldProps>;
    ampsum?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VisualizationUpdateFormProps = React.PropsWithChildren<{
    overrides?: VisualizationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    visualization?: Visualization;
    onSubmit?: (fields: VisualizationUpdateFormInputValues) => VisualizationUpdateFormInputValues;
    onSuccess?: (fields: VisualizationUpdateFormInputValues) => void;
    onError?: (fields: VisualizationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VisualizationUpdateFormInputValues) => VisualizationUpdateFormInputValues;
    onValidate?: VisualizationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VisualizationUpdateForm(props: VisualizationUpdateFormProps): React.ReactElement;
