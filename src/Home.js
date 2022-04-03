import React from "react";

import profile from "./Img/profile.png"
import linkedin from "./Img/linkedin.png"
import git from "./Img/git.png"
import discord from "./Img/discord.png"





 
 

function Home() {
    return (
        <>
        <main>
    <h1>Bonjour, je suis Anthony Lucher</h1>
    <h5>Développeur web</h5>
    <p>Front end / Back end</p>
    <img className="Profile" src={profile} alt="profile"/>
        </main>
      <section>

<a href="https://www.linkedin.com/in/anthony-lucher-52827379/" target="_blank" rel="noopener noreferrer">
<img src={linkedin} alt="linkedin"/></a>
<a href="https://github.com/FullDev1978" target="_blank" rel="noopener noreferrer">
<img src={git} alt="git"/></a>
<a href="https://discordapp.com/users/959473903594537101/"target="_blank" rel="noopener noreferrer">
<img src={discord} alt="discord"/></a>



      </section>
        </>
    );
}


export default Home;