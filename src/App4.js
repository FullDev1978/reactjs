import React, {Component} from "react";

import Monde from "./Monde";
import "./Monde.css"
import  {Route, Routes, Link, NavLink} from 'react-router-dom';
import Continent from "./Continent";
import Pays from "./Pays";
import Europe from './Europe';
import Asie from './Asie';
import Amerique from './Amerique';
import Afrique from './Afrique';
import Oceanie from './Oceanie';


class App4 extends Component{
  render(){
    return( 
 
     <div className="Map">
       <nav>
        <Link to="/"> Monde</Link>
        <Link to="/Pays"> Pays </Link>
        <Link to="/Continent"> Continent</Link>
        </nav>


       <Routes>

       <Route exact path= '/' element={<Monde /> }> </Route>
       <Route exact path= '/Pays' element={<Pays /> }> </Route>
       <Route exact path= '/Continent' element={<Continent /> }> </Route>
       <Route exact path= '/Asie' element={<Asie /> }> </Route>
       <Route exact path= '/Amerique' element={<Amerique /> }> </Route>
       <Route exact path= '/Afrique' element={<Afrique /> }> </Route>
       <Route exact path= '/Oceanie' element={<Oceanie /> }> </Route>
       <Route exact path= '/Europe' element={<Europe /> }> </Route>
   

       </Routes>
   
     </div>
   
    );
  }
}

export default App4;