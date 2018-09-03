import * as React from 'react';
import { Bye, Hello } from './lib';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Hello/>
        <Bye/>
      </div>
    );
  }
}

export default App;
