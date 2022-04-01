import React, { Component, Fragment } from "react";
import Construction from "./Construction";
class Robot extends Component {

  render() {
    return (
      <>
        <h1>Nom Robot : {this.props.nom}</h1>
        <h2>Pays : {this.props.pays} </h2>
        <Construction age={this.props.age} />
      </>
    );
  }
  }
export default Robot;