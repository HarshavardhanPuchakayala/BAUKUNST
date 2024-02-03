import React from 'react'
import "./Header.css"
import Explore from "/assets/Explore.png"
import Hero from "/assets/Hero.png"
import hbtn from "/assets/headerbtn.png"
import User from "/assets/Users.png"
import Sub from "/assets/HeroSub.png"
export default function Header() {
  return (
    <>
    <header className='container' id='/'>
        <div className="header">
        <div className="headerContent">
            <h1>Architectural<br/> Solutions for Every Vision <img src={User}/></h1>
            <div className="headerPara">
                <img src={hbtn}/>
                <p>Explore the symbiotic relationship between acrhitecture and the environment</p>
            </div>
        </div>
        <div className="headerImg">
            <img src={Hero} className='heroImg'/>
            <img src={Sub} className='heroSub'/>
        </div>
        </div>
    </header>
    <section className='headerDiv'>
      <img src={Explore} className='Explore'/>
      <p className='line'>
        ____________________________
      </p>
      <p className='para'>Our goal is to design sustainable and visually appealing structures that coexist with nature. Promoting seamless interaction between the environment and people while preserving natural beauty.</p>
    </section>
    </>
  )
}
