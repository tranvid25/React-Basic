import { Fragment, useState } from "react";
import "./App.css";
// import Formregisterfinal from "./components/form/Formregisterfinal";
// import Toggle from "./components/state/Toggle";
// import Counter from "./components/counter/Counter";
// import Game from "./components/tictactoe/game";
// import Button from "./components/button/Button";
// import Card from "./components/card/Card";
// import Cardlist from "./components/card/Cardlist";
// import CardTailwind from "./components/card/CardTailwind";
// import Photo from "./components/photo/Photo";
// import Timer from "./Timer";
// import Header from "./Header";
// import HackerNew from "./components/news/HackerNew";
// import HackerReducer from "./components/news/HackerReducer";
// // import { useEffect, useRef, useState } from "react";
// import TextArea from "./components/TextArea";
// import Dropdown from "./components/Dropdown";
// import Blog from "./components/Blog";

// import SideBarMenu from "./components/SideBarMenu";

// import Form from "./components/form/Form";
// import MovieSearchApp from "./components/MovieSearchApp";
// import SignUp from "./components/form/SignUp";
// import SignUpv2 from "./components/form/SignUpv2";
// import SignUpv2Final from "./components/form/SignUpv2Final";
import SignUpHook from "./components/form/SignUpHook";
import Modal from "./components/modal/Modal";
import Dropdown from "./components/Dropdown";
// import { GlobalStyles } from "./GlobalStyles";
// import { ThemeProvider } from "styled-components";
// const theme = {
//   colors: {
//     blue: "#2979ff",
//   },
// };

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div>
        <Modal open={showModal} handleClose={() => setShowModal(false)}></Modal>
      </div>
      <button
        className="p-4 text-white bg-blue-500 rounded-lg"
        onClick={() => setShowModal(true)}
      >
        Show modal
      </button>
      <div className="relative z-30">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius nihil
        autem omnis obcaecati corrupti sunt sapiente esse animi officia expedita
        explicabo ipsam vitae, possimus impedit provident accusantium ab amet
        excepturi!
      </div>
      <div className="overflow-hidden">
        <Dropdown></Dropdown>
      </div>
    </Fragment>
  );
}

export default App;
/**
 * element=<div:JSX, id="root"> Hello world</div:JSX,
 * element=React.createElement('div',{id:'root},'hello world)
 * fucntion creatEeLEMNT(ElêmntTyoe,props, ...children)
 * elementType:'div','p',
 * props:className,id,src,alt
 * ...children:
 * element2=(<div>
 * <span>Hello</span> <span>World</span>
 * </div>)
 * element2=(div>)
 * element2=React.createElemnt
 *  */
