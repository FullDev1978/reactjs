import React, {Component} from "react";
//import Horloge from "./Horloge";
import Home from "./Home";
import "./Moncss.css"
import  {Route, Routes, Link} from 'react-router-dom';
import Contact from "./Contact";
import Propos from "./Propos";

class App2 extends Component{
  render(){
    return( 
 
     <div className="NavBar">
       
        <Link to="/home">Home</Link>
        <Link to="/propos">A propos </Link>
        <Link to="/contact">Contact </Link>
      

       <Routes>
       <Route exact path= '/home' element={<Home /> }> </Route>
       <Route exact path= '/propos' element={<Propos /> }> </Route>
       <Route exact path= '/contact' element={<Contact /> }> </Route>
      

       </Routes>
   
     </div>
   
    );
  }
}

export default App2;

