import React from "react"
import { Component } from "react"

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: props.start
    }
  }
  componenDidMount() {
    this.addInterval = setInterval(() => this.increase(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.addInterval)
  }

  increase() {
    this.setState((state, props) => ({
      time: parseInt(state.time) + 1
    }))
  }

  render() {
    return (
      <div> {this.state.time} Sec</div>
    )
  }
}

const FunctionalTimer = props => {
  const [time, setTime] = React.useState(props.start);

  React.useEffect(() => {
    const interval = setInterval(() => setTime(time + 1), 1000);

    return () => clearInterval(interval);
  }, [time]); 

  return (
    <div>{time} Sec</div>
  )
};

export default FunctionalTimer;