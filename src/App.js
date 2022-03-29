import React, {Component} from "react";
import Joueur from "./Joueur";


class App extends Component{
  render(){
    return( 
      <>
        <Joueur pseudo ="El magnifico" nom="Pablo" prenom="Toto" age="22" pointsdevie="20" pointsmagiques = "100" niveau = "1"/>
        <Joueur pseudo ="Tigresse"nom="Babu" prenom="Lola" age="32" pointsdevie="70" pointsmagiques = "100" niveau = "3"/>
        <Joueur pseudo="Tornade" nom="Patou" prenom="Pita" age="42" pointsdevie="30" pointsmagiques = "100" niveau = "6"/>
      </>
    );
  }
}

export default App;
