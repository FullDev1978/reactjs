import React, {Component} from "react";
import "./Moncss.css"
class MonExercice extends Component{
    constructor(props){
        super(props);
        this.state = {compteur : 50}
        console.log("Ici constructeur");
    }
    componentDidMount(){
        console.log("Composant monté");
       
        setInterval(() => this.setState({compteur: this.state.compteur - 1 }), 1000);  
    }
    
        
    
render(){
    console.log("Affichage")
   
    return (
    <div className="test2">
        <h2>Compteur : {this.state.compteur}</h2>

    </div>
    );
    
    }
    

}
export default MonExercice;