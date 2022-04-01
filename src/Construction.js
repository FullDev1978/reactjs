import React, {Component, Fragment } from "react";

function Construction(props){
    let maintenant = new Date();
    let annee = maintenant.getFullYear();      
 return(
     <div>
<h2>Année de construction : {annee - props.age}</h2>
     </div>
 );
}

export default Construction;