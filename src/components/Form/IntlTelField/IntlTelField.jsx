import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import IntlTelInput from "react-intl-tel-input";
import IntlTelFieldUtils from "./IntlTelFieldUtils";
import 'react-intl-tel-input/dist/main.css';
import NotchedOutline from "./NotchedOutline";

const IntlTelField = React.forwardRef((props, ref) => {
  const {
    color = "primary",
    error,
    FormHelperTextProps,
    helperText,
    InputLabelProps,
    label,
    required,
    size,
    variant = "outlined",
    ...intlTelInputProps
  } = props;

  const {
    disabled,
    fieldId: id,
    containerClassName: containerCss = "",
    inputClassName: inputCss = ""
  } = intlTelInputProps;

  const [filled, setFilled] = useState(false);
  const [focused, setFocused] = useState(false);

  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const inputLabelId = label && id ? `${id}-label` : undefined;

  // HACK: Append the NotchedOutline into the IntlTelInput container tree.
  //
  // Due to the lack of composition support in IntlTelInput for suffixed elements,
  // the NotchedOutline has to be created outside of the IntlTelInput hierarchy.
  // When the component mounts, nest the NotchedOutline into IntlTelInput accordingly.
  // The result is visually identical to the official MUI version.
  //
  // RISK: React will fail if the NotchedOutline's fieldset HTML element is removed.

  //#region Outline hack
  const telInputRef = useRef(null);
  const intlTelInputRef = useRef(null);

  const fieldsetClassName = clsx("MuiOutlinedIntlTelInput-notchedOutline");
  const fieldsetRef = useRef(null);
  const setIntlTelInputRef = (instance) => {
    intlTelInputRef.current = instance;
    if (typeof ref === "function") {
      ref(instance);
    } else if (ref && "current" in ref) {
      ref.current = instance;
    }
  };

  useEffect(() => {
    telInputRef.current = intlTelInputRef.current?.tel;
    IntlTelFieldUtils.insertAfter(telInputRef.current, fieldsetRef.current);
  }, []);
  //#endregion

  const handlePhoneNumberFocus = (
    isValid,
    value,
    selectedCountryData,
    fullNumber,
    extension,
    event
  ) => {
    setFocused(true);

    if (!props.onPhoneNumberFocus) {
      return;
    }

    props.onPhoneNumberFocus(
      isValid,
      value,
      selectedCountryData,
      fullNumber,
      extension,
      event
    );
  };
  const handlePhoneNumberBlur = (
    isValid,
    value,
    selectedCountryData,
    fullNumber,
    extension,
    event
  ) => {
    setFocused(false);

    if (!props.onPhoneNumberBlur) {
      return;
    }

    props.onPhoneNumberBlur(
      isValid,
      value,
      selectedCountryData,
      fullNumber,
      extension,
      event
    );
  };

  const handlePhoneNumberChange = (
    isValid,
    value,
    selectedCountryData,
    fullNumber,
    extension
  ) => {
    setFilled(!!value);

    if (!props.onPhoneNumberChange) {
      return;
    }

    props.onPhoneNumberChange(
      isValid,
      value,
      selectedCountryData,
      fullNumber,
      extension
    );
  };

  const Variant = IntlTelFieldUtils.capitalizeFirstLetter(variant);
  const Color = IntlTelFieldUtils.capitalizeFirstLetter(color);
  const formControlClassName = clsx(
    "MuiTextField-root",
    "MuiIntlTelField-root"
  );
  const containerClassName = clsx(
    "intl-tel-input",
    `Mui${Variant}Input-root`,
    `Mui${Variant}IntlTelInput-root`, // Custom style
    "MuiInputBase-root",
    `MuiInputBase-color${Color}`,
    {
      "Mui-focused": focused || filled
    },
    "MuiInputBase-formControl",
    containerCss // Consumer overrides
  );
  const inputClassName = clsx(
    "form-control",
    `Mui${Variant}Input-input`,
    `Mui${Variant}IntlTelInput-input`, // Custom style
    "MuiInputBase-input",
    inputCss // Consumer overrides
  );

  return (
    <FormControl
      className={formControlClassName}
      disabled={disabled}
      error={error}
      focused={focused || filled}
      required={required}
      size={size}
    >
      {label && (
        <InputLabel {...InputLabelProps} htmlFor={id} id={inputLabelId}>
          {label}
        </InputLabel>
      )}
      <IntlTelInput
        {...intlTelInputProps}
        onPhoneNumberFocus={handlePhoneNumberFocus}
        onPhoneNumberBlur={handlePhoneNumberBlur}
        onPhoneNumberChange={handlePhoneNumberChange}
        defaultCountry="us"
        ref={setIntlTelInputRef}
        containerClassName={containerClassName}
        inputClassName={inputClassName}
      />
      <NotchedOutline
        aria-hidden
        className={fieldsetClassName}
        ref={fieldsetRef}
        label={label}
      />
      {helperText && (
        <FormHelperText id={helperTextId} {...FormHelperTextProps}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
});

export default IntlTelField;
