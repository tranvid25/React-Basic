import Content from "./components/Content";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Fragment } from "react";
import HeaderMain from "./components/HeaderMain";
import { AuthProvider } from "./contexts/auth-context";
import { GalleryProvider } from "./contexts/gallery-context";
import Photolisst from "./components/gallery/Photolisst";
import CartList from "./components/gallery/CartList";

function App() {
  return (
    <Fragment>
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <Photolisst></Photolisst>
          <CartList></CartList>
        </GalleryProvider>
      </AuthProvider>
    </Fragment>
  );
}

export default App;
