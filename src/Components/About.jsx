import React from 'react'
import "./About.css"
import Mark from "/assets/checkMark.png"
import AboutImg from "/assets/AboutHero.png"
export default function About() {
  return (
    <>
    <section className="AboutUs" id='About'>

            <img src={AboutImg} className='AboutImg' />

        <div className="AboutContent">
            <h4>About Us</h4>
            <p className='para1'><b>Baukunst</b> is a pioneering architectural agency that creatively blends nature, design, and professionalism. Their structures offers functional, efficient and aesthetically pleasing spaces that merge seamlessly with the environment. with a focus on sustainability and innovation, Baukunst's technologically-driven designs are both practical and beautiful, driven by their passion for creating harmony between design and nature</p>
            <div className="AboutCard">
                <h3>Why Choose Us</h3>
                <ul>
                    <li>Over 200,000 Satisfied Clients</li>
                    <p>Our track record speaks for itself - with years of experience under our belt, we have had the pleasure of serving over 200,000 clients and counting.</p>
                    <li>Certified and Trusted</li>
                    <p>As a certified and trusted architecture agency.we provide exceptional services and have a reputation for celivering high-quality results. </p>
                    <li>Eco-Friendly Architecture</li>
                    <p>Embark on a visual journey along the environment and witness firsthand the beauty of architectural designs interwoven by nature and human imagination</p>
                </ul>
            </div>
        </div>

    </section>
    </>
  )
}
