import React from "react";

class App extends React.Component{

  state = {
    count : 0
  };

  add = () => {
    this.setState(current =>({count : current.count + 1}));
  };
  minus = () => {
    this.setState(current =>({count : current.count - 1}));
  };
  componentDidMount() {
    console.log("component rednered")
  }
  componentDidUpdate() {
    console.log("i just update")
  }
  componentWillUnmount(){
    console.log("Goodbye")
  }
  render() {
    console.log("I'm");
    return (<div id="Potato">
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;