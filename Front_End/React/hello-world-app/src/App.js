import React from 'react';
/* import About from './About'; */

const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }

class App extends React.Component {
  render() {
    return <Task/>
  }
}

export default App;
