import React from "react";
import CardList from "../component/cardlist";
import Search from "../component/search";
import "./app.css";
import WithLoader from "../component/withloader";
import ErrorBoundary from "./ErrorBoundary";

import { connect } from "react-redux";
import { setSearchField } from "../redux/search/actions";
import { requestRobots } from "../redux/robots/actions";

class App extends React.Component {
  componentDidMount() {
    this.props.requestRobots();
  }

  render() {
    const { searchField, onSearchChange, isPending, robots } = this.props;
    const filterRobots = robots.filter((robot, i) =>
      robot.name.toLowerCase().includes(searchField)
    );

    return (
      <ErrorBoundary>
        <div className="tc">
          <h1 className="f1 b ttu baskerville">Robo Friends</h1>
          <Search searchChange={onSearchChange} />

          <WithLoader show={!isPending}>
            <CardList roboArray={filterRobots} />
          </WithLoader>
        </div>
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    requestRobots: () => dispatch(requestRobots()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
