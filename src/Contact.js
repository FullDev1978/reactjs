import React from "react";
import { FaSearchLocation,FaPhoneSquare,FaEnvelopeSquare } from 'react-icons/fa';
function Contact() {
    return (

    <>

    <main>
    <h1>
    Contactez moi:
    </h1>
    </main>
<div className="Coordonnes">
    <ul>
        <li><FaSearchLocation/></li><p>3 Voie Des Bouleaux 91620 La Ville Du Bois.</p>
        <li><FaPhoneSquare/></li><p>06 19 46 61 57</p>
        <li><FaEnvelopeSquare/></li><p>lucheranthony@gmail.com</p>
    </ul>

</div>
    </>
    );
}


export default Contact;