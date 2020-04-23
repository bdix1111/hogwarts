import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigPen from "./PigPen";

class App extends Component {
  
  state = {
    hogs: hogs,
    filters: "All"
  }

  onChangeType = (e) => {
    this.setState({filters: e.target.value})
  }

  filterHogs = () => {
    let pigList;
    switch (this.state.filters) {
      case "All":
        pigList = this.state.hogs;
        break;
      case "Greased":
        pigList = this.state.hogs.filter(pig => pig.greased === true);
        break;
      case "Alphabetical":
        pigList = [...this.state.hogs].sort((pig1, pig2) => (pig1.name > pig2.name ? 1 : -1));
        break;
      case "Weight":
        pigList = [...this.state.hogs].sort((pig1, pig2) => (pig1.weight > pig2.weight ? 1 : -1));
    }
    return pigList;

  }

  render() {
    console.log("in app render", this.state.filters)
    const showHogs = this.filterHogs()
    return (
      <div className="App">
        <Nav onChangeType={this.onChangeType}/>
        <PigPen hogs={showHogs}/>
      </div>
    );
  }
}

export default App;
