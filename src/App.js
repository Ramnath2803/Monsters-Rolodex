import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "./App.css";
import { CardList } from "./Component/Card-List/CardList.jsx";
import { SearchField } from "./Component/searchField/Searchfield.jsx";
import { ErrorMessage } from "./Component/ErrorMessage/ErrorMeassage.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchName: "",
    };
  }

  handleInput = (event) => {
    console.log(event.target.value);
    this.setState({ searchName: event.target.value });
  };
  render() {
    const { monsters, searchName } = this.state;
    let filteredMonsters = monsters.filter(
            (monster) => monster.name.toLowerCase().indexOf(searchName) > -1
          );
    return (
      <div className="App container">
      <h1>Monsters Rolodex</h1>
        <SearchField
          placeholder="Search by Name"
          handleChange={this.handleInput}
        ></SearchField>
        {filteredMonsters.length===0?<ErrorMessage/>:
        <CardList name={filteredMonsters}></CardList>}
      </div>
    );
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        console.log(users);
        this.setState({ monsters: users });
      });
  }
}

export default App;
