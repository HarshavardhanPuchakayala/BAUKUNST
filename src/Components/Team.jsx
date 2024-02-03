import React from 'react'
import "./Team.css"
import Teams from "/assets/Team.png"
export default function Team() {
  return (
    <>
    <section className="TeamSection" id='Team'>
        <div className="TeamContent">
            <h4>Meet Our Team</h4>
            <p>Our team of architects is composed of highly skilled professionals with diverse expertise in architectural design, urban planning sustainabiity, and technological innovation. Through collaboration and teamwork, we strive to create unique and innovative designs that are not only functional but also visually appealing and environmentally conscious.</p>
        </div>
        <img src={Teams} className='TeamImg'/>
    </section>
    </>
  )
}
