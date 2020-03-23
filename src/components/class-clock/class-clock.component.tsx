import React, { Component } from 'react';
import './class-clock.component.css';

interface ClockState {
  formattedDate: string;
}

class Clock extends Component<{}, ClockState> {
  private timerId: NodeJS.Timeout|undefined;
  private timerInterval: number = 1000;

  constructor(props: {}) {
    super(props);
    this.state = {
      formattedDate: new Date().toLocaleString()
    }
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.updateTimerValue();
    }, this.timerInterval);
  }

  componentWillUnmount() {
    if (this.timerId != undefined) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div>
        <span className='class-clock' data-testid="class-clock">
          {this.state.formattedDate}
        </span>
      </div>
    );
  }

  private updateTimerValue() {
    this.setState({
      formattedDate: new Date().toLocaleString()
    });
  }
}

export default Clock;