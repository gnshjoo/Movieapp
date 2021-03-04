import React from "react";

function Food(props) {
  console.log(props);
  return <h1>I like {props.fav}</h1>
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food fav="Kimchi"/>
      <Food fav="라면"/>
      <Food fav="삼겹살"/>
      <Food fav="쭈구미"/>
    </div>
  );
}

export default App;
