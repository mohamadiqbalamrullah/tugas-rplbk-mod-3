import React from "react"
import { Component } from "react"

class Timer extends Component {
    constructor(props){
      super(props)
        this.state = {
          time : props.start
        }
    }
    componenDidMount(){
      this.addInterval = setInterval(() => this.increase(), 1000)
    }
    
    componentWillUnmount(){
      clearInterval(this.addInterval)
    }
    
    increase(){
      this.setState((state, props) => ({
        time : parseInt(state.time) + 1
      }))
    }
    
    render() {
      return (
        <div> {this.state.time} Sec</div>
      )
    }
  }

  export default Timer;