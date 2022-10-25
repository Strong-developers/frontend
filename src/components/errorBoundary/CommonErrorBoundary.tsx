import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import CustomErrorComponent from "./CustomErrorComponent";
import { CommonComponentType } from "../../types/commonComponentType";

const CommonErrorBoundary = ({ children }: CommonComponentType) => {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorComponent}>
      {children}
    </ErrorBoundary>
  );
};

export default CommonErrorBoundary;
