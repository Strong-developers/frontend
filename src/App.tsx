import React from "react";
import CustomRouter from "./router/CustomRouter";
import CommonErrorBoundary from "./components/errorBoundary/CommonErrorBoundary";
import GlobalStyle from "./assets/styles/globalStyle";

function App() {
  return (
    <React.Fragment>
      <CommonErrorBoundary>
        <CustomRouter />
      </CommonErrorBoundary>
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
