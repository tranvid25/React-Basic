
import "./App.css";
import YoutubeList from "./components/youtube/YoutubeList";


function App() {
  return (
    <div><YoutubeList></YoutubeList></div>
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
