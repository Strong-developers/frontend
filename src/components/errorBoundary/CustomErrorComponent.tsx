import React from "react";
import { FallbackProps } from "react-error-boundary";
import ErrorComponent from "./errorComponent/ErrorComponent";

const CustomErrorComponent = ({ error }: FallbackProps) => {
  return (
    <React.Fragment>
      {error instanceof Error && <ErrorComponent />}
    </React.Fragment>
  );
};

export default CustomErrorComponent;
