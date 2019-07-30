import React from "react";
import Search from "../searchComponent";

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="page-container">
          <div className="container">
            <Search />
          </div>
        </div>
      </div>
    );
  }
}
