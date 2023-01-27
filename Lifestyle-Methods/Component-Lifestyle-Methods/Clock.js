import React from 'react';
import ReactDOM from 'react-dom';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        {this.props.isPrecise
          ? this.state.date.toISOString()
          : this.state.date.toLocaleTimeString()}
      </div>
    );
  }
  componentDidMount() {
    const oneSecond = 1000;
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }
  componentDidUpdate(prevProps) {
    if (this.props.isPrecise === prevProps.isPrecise) {
      return;
    }
    clearInterval(this.intervalID)
    let delay;
    if (this.props.isPrecise === true) {
      delay = 100
    } else {
      delay = 1000
    }
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, delay);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}

ReactDOM.render(<Clock />, document.getElementById('app'));