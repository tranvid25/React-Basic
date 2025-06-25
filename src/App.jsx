import "./App.css";
import Toggle from "./components/state/Toggle";
import Counter from "./components/counter/Counter";
import Game from "./components/tictactoe/game";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import Cardlist from "./components/card/Cardlist";
import CardTailwind from "./components/card/CardTailwind";
import Photo from "./components/photo/Photo";
import Timer from "./Timer";
import Header from "./Header";
import HackerNew from "./components/news/HackerNew";
import HackerReducer from "./components/news/HackerReducer";
import { useRef } from "react";
// import { GlobalStyles } from "./GlobalStyles";
// import { ThemeProvider } from "styled-components";
// const theme = {
//   colors: {
//     blue: "#2979ff",
//   },
// };
function App() {
  const countRef=useRef(0);
  //truy xuất giá trị Ref
  console.log(countRef.current);
  const handler=()=>{
    //update giá trị
    countRef.current=10;
  }
  return (
    <div>
     {/* <HackerReducer></HackerReducer> */}

    </div>
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
