import React, {Component} from "react";

function Personnage(props){
    return( 
      <>
          <h1>Nom: {props.nom}</h1>
          <p>Prenom: {props.prenom}</p>
          <p>Age: {props.age}</p>
      </>
    );
}

export default Personnage;

