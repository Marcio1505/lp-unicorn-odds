import React from "react";

const NotchedOutline = React.forwardRef((props, ref) => {
  const { label, ...fieldsetProps } = props;

  return (
    <fieldset {...fieldsetProps} ref={ref}>
      <legend>{label && <span>{label}</span>}</legend>
    </fieldset>
  );
});

export default NotchedOutline;
