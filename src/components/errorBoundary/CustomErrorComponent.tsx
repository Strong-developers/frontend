import React from "react";
import { FallbackProps } from "react-error-boundary";

const CustomErrorComponent = ({ error }: FallbackProps) => {
  return (
    <React.Fragment>
      {error instanceof Error && <div>Error!</div>}
    </React.Fragment>
  );
};

export default CustomErrorComponent;
