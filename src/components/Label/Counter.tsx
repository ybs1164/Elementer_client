import { Component } from 'react';

interface CounterProps {
  startNumber: number;
}

interface CounterState {
  number: number;
}

class Counter extends Component<CounterProps, CounterState> {
  state = {
    number: 0,
  };

  constructor(props: CounterProps) {
    super(props);
    this.state.number = props.startNumber;
  }

  public handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  public render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default Counter;