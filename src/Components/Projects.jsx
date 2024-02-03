import React from 'react'
import "./Projects.css"
import { CiLocationOn } from "react-icons/ci";
export default function Projects() {
  return (
    <>
    <section className='ProjectSection' id='Projects'>
        <div className="ProjectHeader">
            <h1>Recent Projects</h1>
            <p>__________________</p>
        </div>
        <div className="ProjectImg">
            <div className="projectContent">
            <h1>Suitree Experience Hotel</h1>
            <span>
                <CiLocationOn className='ProjectIcon'/>
               <p> Sardinal,Costa Rica</p></span>
                </div>
        </div>
    </section>
    </>
  )
}
