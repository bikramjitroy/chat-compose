import React from 'react'
// import {Header} from './components/Header'
import Content from './components/Content'
import {Left} from './components/Left'


import './custom.css';
class App extends React.Component {
  render() {
    return (
      <div className="App" id='container'>
        <Left />
        <Content />
      </div>
    )
  }
}

export default App;
