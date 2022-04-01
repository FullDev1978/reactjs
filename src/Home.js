import React from "react";
import wordpress from './Img/wordpress.png';




function Home() {
    return (
<body>
<div className="Text1">
    <h1>
        Anthony Lucher
    </h1>
    <p>Développeur web full stack</p>
   <img src={wordpress} alt="wordpress"/>

</div>
</body>
    );
}


export default Home;