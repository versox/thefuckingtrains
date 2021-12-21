import whispy from './assets/whispy.mp4';
import poem from './assets/poem.jpg';
import tims from './assets/tims.jpg';
import boat from './assets/boat.jpg';
import space from './assets/space.jpg';
import './App.scss';
import { useState } from 'react';



function App() {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="App">
      <div className="header">
        {/* <video id="bgvid" src={whispy} muted autoPlay="true" loop="true" className="header_bg" alt="whispy sky" /> */}
        <img src={space}></img>
      </div>
      <div className="paper_container">
        <div className="paper">
          <h1>Happy 24th Birthday 🌯!</h1>
          <p>Wanted to remind you that you smell nice.</p>
          <hr/>
          <p>H knud xnt rn ltbg :o</p>
          <p>1+ your age</p>
          <hr/>
          <p>tytu dtti nu uinct</p>
          <p>oosterpark fountain</p>
          <hr />
          <p>_ _ _ _ _ _ _ in them, I  _ _ _ _</p>
          <p>👀, season</p>
          <hr />
          <p>74 68 61 6e 6b 20 79 6f 75 20 66 6f 72 20 65 78 69 73 74 69 6e 67 20 79 6f 75 20 6d 61 72 76 65 6c 6f 75 73 20 73 74 61 72 21 20 e2 99 a5</p>
          {/* <hr /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
