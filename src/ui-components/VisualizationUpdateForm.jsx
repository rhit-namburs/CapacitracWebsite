/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Visualization } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function VisualizationUpdateForm(props) {
  const {
    id: idProp,
    visualization,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    timeStamp: "",
    inches: "",
    amps: "",
    ampsum: "",
  };
  const [timeStamp, setTimeStamp] = React.useState(initialValues.timeStamp);
  const [inches, setInches] = React.useState(initialValues.inches);
  const [amps, setAmps] = React.useState(initialValues.amps);
  const [ampsum, setAmpsum] = React.useState(initialValues.ampsum);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = visualizationRecord
      ? { ...initialValues, ...visualizationRecord }
      : initialValues;
    setTimeStamp(cleanValues.timeStamp);
    setInches(cleanValues.inches);
    setAmps(cleanValues.amps);
    setAmpsum(cleanValues.ampsum);
    setErrors({});
  };
  const [visualizationRecord, setVisualizationRecord] =
    React.useState(visualization);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Visualization, idProp)
        : visualization;
      setVisualizationRecord(record);
    };
    queryData();
  }, [idProp, visualization]);
  React.useEffect(resetStateValues, [visualizationRecord]);
  const validations = {
    timeStamp: [],
    inches: [],
    amps: [],
    ampsum: [],
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
          timeStamp,
          inches,
          amps,
          ampsum,
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
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Visualization.copyOf(visualizationRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "VisualizationUpdateForm")}
      {...rest}
    >
      <TextField
        label="Time stamp"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={timeStamp && convertToLocal(new Date(timeStamp))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              timeStamp: value,
              inches,
              amps,
              ampsum,
            };
            const result = onChange(modelFields);
            value = result?.timeStamp ?? value;
          }
          if (errors.timeStamp?.hasError) {
            runValidationTasks("timeStamp", value);
          }
          setTimeStamp(value);
        }}
        onBlur={() => runValidationTasks("timeStamp", timeStamp)}
        errorMessage={errors.timeStamp?.errorMessage}
        hasError={errors.timeStamp?.hasError}
        {...getOverrideProps(overrides, "timeStamp")}
      ></TextField>
      <TextField
        label="Inches"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={inches}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              timeStamp,
              inches: value,
              amps,
              ampsum,
            };
            const result = onChange(modelFields);
            value = result?.inches ?? value;
          }
          if (errors.inches?.hasError) {
            runValidationTasks("inches", value);
          }
          setInches(value);
        }}
        onBlur={() => runValidationTasks("inches", inches)}
        errorMessage={errors.inches?.errorMessage}
        hasError={errors.inches?.hasError}
        {...getOverrideProps(overrides, "inches")}
      ></TextField>
      <TextField
        label="Amps"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={amps}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              timeStamp,
              inches,
              amps: value,
              ampsum,
            };
            const result = onChange(modelFields);
            value = result?.amps ?? value;
          }
          if (errors.amps?.hasError) {
            runValidationTasks("amps", value);
          }
          setAmps(value);
        }}
        onBlur={() => runValidationTasks("amps", amps)}
        errorMessage={errors.amps?.errorMessage}
        hasError={errors.amps?.hasError}
        {...getOverrideProps(overrides, "amps")}
      ></TextField>
      <TextField
        label="Ampsum"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ampsum}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              timeStamp,
              inches,
              amps,
              ampsum: value,
            };
            const result = onChange(modelFields);
            value = result?.ampsum ?? value;
          }
          if (errors.ampsum?.hasError) {
            runValidationTasks("ampsum", value);
          }
          setAmpsum(value);
        }}
        onBlur={() => runValidationTasks("ampsum", ampsum)}
        errorMessage={errors.ampsum?.errorMessage}
        hasError={errors.ampsum?.hasError}
        {...getOverrideProps(overrides, "ampsum")}
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
          isDisabled={!(idProp || visualization)}
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
              !(idProp || visualization) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
