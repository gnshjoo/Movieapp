import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image : "kakaka",
    rating: 5
  },
  {
    id: 2,
    name: "ramen",
    image : "hahaha",
    rating: 7
  },
  {
    id: 3,
    name: "kimbab",
    image : "hohoho",
    rating: 1.0
  },
];

function Food({name, picture, rating}) {
  return (
  <div>
    <h2>I like {name}</h2>
    <h4>rating 1s {rating}</h4>
    <p>hello {picture}</p>
  </div>
)};

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
};

function App() {
  return (
    <div className="App">
      {foodILike.map(
        dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
        )}
    </div>
  );
}

export default App;
