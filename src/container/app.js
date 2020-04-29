import React from "react";
import CardList from "../component/cardlist";
import Search from "../component/search";
import "./app.css";
import WithLoader from "../component/withloader";
import ErrorBoundary from "./ErrorBoundary";

class App extends React.Component {
  state = {
    roboArray: [],
    searchField: "",
  };

  componentDidMount() {
    this.fetchRoboData();
  }

  fetchRoboData = async () => {
    const ft = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await ft.json();
    this.setState({ roboArray: res });
  };
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };
  render() {
    const { roboArray, searchField } = this.state;
    const filterRobots = roboArray.filter((robot, i) =>
      robot.name.toLowerCase().includes(searchField)
    );

    return (
      <ErrorBoundary>
        <div className="tc">
          <h1 className="f1 b ttu baskerville">Robo Friends</h1>
          <Search searchChange={this.onSearchChange} />

          <WithLoader show={filterRobots.length}>
            <CardList roboArray={filterRobots} />
          </WithLoader>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
