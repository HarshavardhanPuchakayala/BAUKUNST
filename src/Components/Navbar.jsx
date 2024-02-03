import React,{useState} from 'react'
import "./Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "/assets/Logo.png"
export default function Navbar() {
    const [Menu,setMenu]=useState(false)
    const MenuBar=()=>{
        setMenu(!Menu)
    }
  return (
    <>
    <nav className={`${Menu ? "NavColor": "" }`}>
        <div className="nav">
        <label htmlFor="logo">
            <a href="#/">
            <img src={logo} alt="logo" />
            </a>
        </label>
        <button className='MenuBtn' onClick={MenuBar}>
            <GiHamburgerMenu className='MenuIcon'/>
            </button>
        <div className={`MenuBar ${Menu ? "show": ""}`}>
            <ul>
                <li>
                    <a href="#About">
                    About us
                    </a>
                    </li>
                <li>
                <a href="#Projects">
                    Projects
                    </a>
                    </li>
                <li>
                <a href="#Team">
                    Team
                    </a>
                    </li>
                    <li>
                <a href="#FAQ">
                    FAQ
                    </a>
                    </li>
                <li>
                <a href="#News">
                    News
                    </a>
                    </li>
            </ul>
            </div>
    </div>
    
    </nav>
    </>
  )
}
