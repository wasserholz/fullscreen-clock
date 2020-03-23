import React, { Component }from 'react';
import Fullscreen from "react-full-screen";
import logo from './logo.svg';
import './App.css';
import HookClock from './components/hook-clock/hook-clock.component';
import ClassClock from './components/class-clock/class-clock.component';

interface AppState {
  isFull: boolean;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isFull: false,
    };
  }

  activateFullscreen = () => {
    this.setState({ isFull: true });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.activateFullscreen} data-testid="fullscreen-button">
          Go Fullscreen
        </button>
        <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({ isFull })}
          data-testid="fullscreen-element">
  
          <div className="centered">
            <HookClock />
            <ClassClock />
          </div>
        </Fullscreen>
      </div>
    );
  }
}


export default App;
