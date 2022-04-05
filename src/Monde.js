import React, {Component} from 'react';
import Mappemonde from "./Img/Mappemonde.jpg"







class Monde extends Component{
  
render(){
    
    return (
        <>
        <h1>Bienvenue dans Le Globe.com</h1>
        <div>
            <img className='Mappemonde' src={Mappemonde} alt="mappemonde"/>
        
        </div>

  
       </>
    );
    }

}


export default Monde;