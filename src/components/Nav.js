import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {
  // console.log("in nav", props)
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <select onChange={(e)=>props.onChangeType(e)}>
        <option value="All">All</option>
        <option value="Greased">Greased</option>
        <option value="Alphabetical">Alphabetical</option>
        <option value="Weight">Weight</option>
      </select>
    </div>
  );
};

export default Nav;
