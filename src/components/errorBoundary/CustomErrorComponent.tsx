import React from "react";
import { FallbackProps } from "react-error-boundary";

const CustomErrorComponent = ({ error }: FallbackProps) => {
  return (
    <React.Fragment>
      {error instanceof Error && <a href="/">Go home</a>}
    </React.Fragment>
  );
};

export default CustomErrorComponent;
