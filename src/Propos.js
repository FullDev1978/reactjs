import React from "react";
import { FaBootstrap,FaCss3Alt,FaHtml5,FaJsSquare,FaNodeJs,FaReact,FaSymfony,FaWordpress,FaPhp } from 'react-icons/fa';

function Propos() {
    return (

    <>
    <main>
        <div>
    <h1>
        Qui suis-je ?
    </h1>
    <p>Après plus d'une dizaine dans la grande distibution à divers postes,<br></br> je me suis orienté 
        vers une reconversion professionnelle en tant que développeur web.
    </p>
    <section className="Skills">
        <h2>Hard skills</h2>
        <ul>
            <li><FaBootstrap/></li>
            <li><FaCss3Alt/></li>
            <li><FaHtml5/></li><br></br>
            <li><FaJsSquare/></li>
            <li><FaNodeJs/></li>
            <li><FaReact/></li><br></br>
            <li><FaSymfony/></li>
            <li><FaWordpress/></li>
            <li><FaPhp/></li>
            
        </ul>
  

    </section>
    </div>
    </main>
    </>
    );
}


export default Propos;