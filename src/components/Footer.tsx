import "../styles/Footer.css"
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer-container">
        <div className="footer"><FaRegCopyright/><span className="footer-text">matthewleehw 2024</span></div>
    </section>
  )
}

export default Footer;