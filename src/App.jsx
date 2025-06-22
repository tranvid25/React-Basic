import "./App.css";
import Toggle from "./components/state/Toggle";
import Counter from "./components/counter/Counter";
import Game from "./components/tictactoe/game";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import Cardlist from "./components/card/Cardlist";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <Cardlist>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Cardlist>
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
