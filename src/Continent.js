import React, {Component} from 'react';
import  {Route, Routes, Link,NavLink} from 'react-router-dom';


class Continent extends Component{
  
render(){
    
    return (
        <>

    <nav>
    <NavLink to = '/mon-app/src/Europe.js' activeClassName="active">Europe</NavLink>
       <NavLink to= '/Asie' activeClassName="active">Asie</NavLink>
       <NavLink to= '/Amerique' activeClassName="active">Amerique</NavLink>
       <NavLink to= '/Oceanie'activeClassName="active">Oceanie</NavLink>
       <NavLink to= '/Afrique' activeClassName="active">Afrique</NavLink>
  
  
    </nav>
      

  
   </>
    );
    }

}


export default Continent;