import { YoutubeData } from "./YoutubeData";
import "./App.css";

function App() {
  return (
    <div className="youtube-list">
      {YoutubeData.map((item) => (
        <YoutubeItem
          key={item.id}
          image={item.image}
          avatar={item.avatar || item.image}
          title={item.title}
          author={item.author}
        ></YoutubeItem>
      ))}
    </div>
  );
  function YoutubeItem(props) {
    console.log(props);
    return (
      <div className="youtube-item">
        <div className="youtube-image">
          <img src={props.image} alt="" />
        </div>
        <div className="youtube-footer">
          <img src={props.avatar} alt="" class="youtube-avatar" />
          <div className="youtube-info">
            <h3 className="youtube-title">{props.title}</h3>
            <h4 className="youtube-author">{props.author}</h4>
          </div>
        </div>
      </div>
    );
  }
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
