import Content from "./components/Content";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Fragment } from "react";
import HeaderMain from "./components/HeaderMain";
import { AuthProvider } from "./contexts/auth-context";

function App() {
  return (
    <Fragment>
      <AuthProvider>
        <HeaderMain></HeaderMain>
      </AuthProvider>
    </Fragment>
  );
}

export default App;
