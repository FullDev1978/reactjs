import React, {Component} from "react";
import "./Moncss.css"
class Horloge extends Component{
    constructor(props){
        super(props);
        this.state = {date : new Date(),
        compteur : 1}
        console.log("Ici constructeur");
    }
    componentDidMount(){
        console.log("Composant monté");
        setInterval(() => this.setState({ date: new Date()}), 1000);
        setInterval(() => this.setState({compteur: this.state.compteur + 1 }), 1000);
    }
render(){
    console.log("Affichage");
    return (
    <div className="test2">
        <h1>Horloge : {this.state.date.toLocaleTimeString()}</h1>
        <h2>Compteur : {this.state.compteur}</h2>

    </div>
    );
    }

}
export default Horloge;