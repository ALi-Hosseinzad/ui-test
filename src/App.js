import React, { useEffect } from "react";
import { StylesProvider } from "@material-ui/styles";
import MainApp from "./app/mainApp";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import userApi from "./helper/user";

const App = () => {
  return (
    <div dir="rtl">
      <StylesProvider>
        <CssBaseline />
        <MainApp />
      </StylesProvider>
    </div>
  );
};

export default App;
