import {YoutubeData} from "./YoutubeData";
import "./App.css";

function App() {
  // const numbers=[1,2,3,4,5];
  // const double=numbers.map((item)=>item *2);
  return (
    <div className="youtube-list">
      <YoutubeItem
        image="https://images.unsplash.com/photo-1726066012656-45d3ff23eaeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        avatar="https://plus.unsplash.com/premium_photo-1739198857961-853f1896cf24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
        title="siuuu"
        author="tranvi"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1726066012656-45d3ff23eaeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        avatar="https://plus.unsplash.com/premium_photo-1739198857961-853f1896cf24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
        title="siuuu"
        author="tranvi"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1726066012656-45d3ff23eaeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        avatar="https://plus.unsplash.com/premium_photo-1739198857961-853f1896cf24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
        title="siuuu"
        author="tranvi"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1726066012656-45d3ff23eaeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        avatar="https://plus.unsplash.com/premium_photo-1739198857961-853f1896cf24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
        title="siuuu"
        author="tranvi"
      ></YoutubeItem>
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
          <img src={props.avatar} alt="" class="youtube-avatar"/>
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
