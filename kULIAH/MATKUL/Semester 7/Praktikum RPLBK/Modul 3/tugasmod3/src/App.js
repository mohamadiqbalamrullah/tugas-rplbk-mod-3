import './App.css';
// import Timer from './Component/Timer';

import { Component } from "react"
import Colors from './Component/Colors';

class Timer extends Component {
    constructor(props){
      super(props)
        this.state = {
          time : props.start
        }
    }
    componenDidMount(){
      this.addInterval = setInterval(() => this.increase(), 1)
    }
    
    componentWillUnmount(){
      clearInterval(this.addInterval)
    }
    
    increase(){
      this.setState((state) => ({
        time : parseInt(state.time) + 1
        // time : (state.time) + 1
      }))
    }
  

    
    render() {
      return (
        <div> {this.state.time} Sec</div>
      )
    }
  }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SCREEN TIME</h1>
        <Timer start="1" />
        <Colors/>
      </header>
    </div>
  );
}

export default App;
