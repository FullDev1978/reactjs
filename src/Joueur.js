import React, { Component, Fragment } from "react";
import AgePersonne from "./AgePersonne";
class Joueur extends Component {

  render() {
    return (
      <>
        <h1>Pseudo : {this.props.pseudo}</h1>
        <p>Nom : {this.props.nom}</p>
        <p>Prenom : {this.props.prenom}</p>
        <p>Age : {this.props.age}</p>
        <p>Pointsdevie : {this.props.pointsdevie}</p>
        <p>Pointsmagiques : {this.props.pointsmagiques}</p>
        <p>Niveau : {this.props.niveau}</p>
        <AgePersonne age={this.props.age} />
      </>
    );
  }
  }
export default Joueur;
