import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import CustomErrorComponent from "./CustomErrorComponent";

interface CommonErrorBoundaryProps {
  children: React.ReactNode;
}

const CommonErrorBoundary = ({ children }: CommonErrorBoundaryProps) => {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorComponent}>
      {children}
    </ErrorBoundary>
  );
};

export default CommonErrorBoundary;
