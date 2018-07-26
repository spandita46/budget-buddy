import * as React from 'react';

class App extends React.Component {
  public render() {
    const appTitle: string = "Budget Buddy";
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{appTitle}</h1>
        </header>
      </div>
    );
  }
}

export default App;
