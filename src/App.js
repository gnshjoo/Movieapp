import React from "react";

function Food({name, picture}) {
  return (
  <div>
    <h2>I like {name}</h2>
    <p>hello {picture}</p>
  </div>
)}

const foodILike = [
  {
    name: "kimchi",
    image : "kakaka"
  },
  {
    name: "ramen",
    image : "hahaha"
  },
  {
    name: "kimbab",
    image : "hohoho"
  },
]

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image}/>)}
    </div>
  );
}

export default App;
