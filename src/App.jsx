import Content from "./components/Content";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Fragment } from "react";
import HeaderMain from "./components/HeaderMain";
import { AuthProvider } from "./contexts/auth-context";
import { GalleryProvider } from "./contexts/gallery-context";
import Photolisst from "./components/gallery/Photolisst";
import CartList from "./components/gallery/CartList";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import MovieSearchApp from "./components/MovieSearchApp";
import Blog from "./components/Blog"; // bạn quên import Blog ở đây
import BlogDetail from "./components/BlogDetail";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<div>HomePage</div>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/movie" element={<MovieSearchApp />} />
        </Route>
        <Route path="*" element={<div>This is 404 page</div>}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
