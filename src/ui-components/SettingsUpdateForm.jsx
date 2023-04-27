/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Settings } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SettingsUpdateForm(props) {
  const {
    id: idProp,
    settings,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    diameter: "",
    cylinderHeight: "",
    conicalAngle: "",
    binHeight: "",
  };
  const [diameter, setDiameter] = React.useState(initialValues.diameter);
  const [cylinderHeight, setCylinderHeight] = React.useState(
    initialValues.cylinderHeight
  );
  const [conicalAngle, setConicalAngle] = React.useState(
    initialValues.conicalAngle
  );
  const [binHeight, setBinHeight] = React.useState(initialValues.binHeight);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = settingsRecord
      ? { ...initialValues, ...settingsRecord }
      : initialValues;
    setDiameter(cleanValues.diameter);
    setCylinderHeight(cleanValues.cylinderHeight);
    setConicalAngle(cleanValues.conicalAngle);
    setBinHeight(cleanValues.binHeight);
    setErrors({});
  };
  const [settingsRecord, setSettingsRecord] = React.useState(settings);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Settings, idProp)
        : settings;
      setSettingsRecord(record);
    };
    queryData();
  }, [idProp, settings]);
  React.useEffect(resetStateValues, [settingsRecord]);
  const validations = {
    diameter: [],
    cylinderHeight: [],
    conicalAngle: [],
    binHeight: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          diameter,
          cylinderHeight,
          conicalAngle,
          binHeight,
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
            Settings.copyOf(settingsRecord, (updated) => {
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
      {...getOverrideProps(overrides, "SettingsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Diameter"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={diameter}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              diameter: value,
              cylinderHeight,
              conicalAngle,
              binHeight,
            };
            const result = onChange(modelFields);
            value = result?.diameter ?? value;
          }
          if (errors.diameter?.hasError) {
            runValidationTasks("diameter", value);
          }
          setDiameter(value);
        }}
        onBlur={() => runValidationTasks("diameter", diameter)}
        errorMessage={errors.diameter?.errorMessage}
        hasError={errors.diameter?.hasError}
        {...getOverrideProps(overrides, "diameter")}
      ></TextField>
      <TextField
        label="Cylinder height"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cylinderHeight}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              diameter,
              cylinderHeight: value,
              conicalAngle,
              binHeight,
            };
            const result = onChange(modelFields);
            value = result?.cylinderHeight ?? value;
          }
          if (errors.cylinderHeight?.hasError) {
            runValidationTasks("cylinderHeight", value);
          }
          setCylinderHeight(value);
        }}
        onBlur={() => runValidationTasks("cylinderHeight", cylinderHeight)}
        errorMessage={errors.cylinderHeight?.errorMessage}
        hasError={errors.cylinderHeight?.hasError}
        {...getOverrideProps(overrides, "cylinderHeight")}
      ></TextField>
      <TextField
        label="Conical angle"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={conicalAngle}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              diameter,
              cylinderHeight,
              conicalAngle: value,
              binHeight,
            };
            const result = onChange(modelFields);
            value = result?.conicalAngle ?? value;
          }
          if (errors.conicalAngle?.hasError) {
            runValidationTasks("conicalAngle", value);
          }
          setConicalAngle(value);
        }}
        onBlur={() => runValidationTasks("conicalAngle", conicalAngle)}
        errorMessage={errors.conicalAngle?.errorMessage}
        hasError={errors.conicalAngle?.hasError}
        {...getOverrideProps(overrides, "conicalAngle")}
      ></TextField>
      <TextField
        label="Bin height"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={binHeight}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              diameter,
              cylinderHeight,
              conicalAngle,
              binHeight: value,
            };
            const result = onChange(modelFields);
            value = result?.binHeight ?? value;
          }
          if (errors.binHeight?.hasError) {
            runValidationTasks("binHeight", value);
          }
          setBinHeight(value);
        }}
        onBlur={() => runValidationTasks("binHeight", binHeight)}
        errorMessage={errors.binHeight?.errorMessage}
        hasError={errors.binHeight?.hasError}
        {...getOverrideProps(overrides, "binHeight")}
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
          isDisabled={!(idProp || settings)}
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
              !(idProp || settings) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
