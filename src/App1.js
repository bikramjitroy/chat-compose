import React from 'react'
// import {Header} from './components/Header'
// import Content from './components/Content'
// import {Left} from './components/Left'
import {Leftcard} from './components/Leftcard'
import CanvasDiv from './components/CanvasDiv'



import './asserts/styles.css';
import './asserts/flowy.min.css';
class App extends React.Component {
  render() {
    return (
      <div>
        <Leftcard />
        <CanvasDiv />
      </div>  
    )
  }
}

export default App;
