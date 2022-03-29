import React, {Component, Fragment} from "react";


class Mesdonnees extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <>
      <h1>Pseudo : {this.props.pseudo}</h1>
      <p>Nom : {this.props.nom}</p>
      <p>Prenom : {this.props.prenom}</p>
      <p>Pointsdevie : {this.props.pointsdevie}</p> 
      <p>Pointsmagiques : {this.props.pointsmagiques}</p>
      <p>Niveau : {this.props.niveau}</p>
      
    </>
    );
  }
}
export default Mesdonnees;

