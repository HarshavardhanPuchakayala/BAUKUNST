import React from 'react'
import "./Footer.css"
import { MdCopyright } from "react-icons/md";
export default function Footer() {
  return (
    <>
    <footer>
        <img src="/assets/footer.png" className='footerlogo'/>
        <div className="footer">
            <div className="Grid1">
                <h4>Find us at</h4>
                <p>4936 Wilson Street San Diego,CA California 92103,760-960-9180 3225 Grant Street,Pine Mills,TX Texas 75783, 903-857-9684</p>
                <span>
                    <img src="/assets/footerlogo.png"/>
                    <p>Baukunst respects high social and enivironmental standards and is committed to progress</p>
                </span>
            </div>
            <div className="Grid2">
                <ul>
                    <li>Products</li>
                    <li>Office Building</li>
                    <li>Hotel and Resort</li>
                    <li>Apartment</li>
                    <li>Mansion</li>
                    <li>Industrial Building</li>
                </ul>
                <ul>
                    <li>Quick Links</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Architecture</li>
                    <li>Interior</li>
                    <li>News</li>
                </ul>
                <ul>
                    <li>Support</li>
                    <li>Service Status</li>
                    <li>Help Center</li>
                    <li>Teams of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookies Policiy</li>
                    <li>GDPR</li>
                </ul>
                <ul>
                    <li>Social Media</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
            <div className='Grid3'>
                <h4>Join Our Newsletter</h4>
                <p>Subscribe to our newsletter and stay up-to-date with the latest news,events, and promotions.</p>
                <button>Subscribe</button>
            </div>
        </div>
    </footer>
    <div className='footerdivs'>
        <p>Copyright <MdCopyright/> 2024| Baukunst |All Right Reserved</p>
    </div>
    </>
  )
}
