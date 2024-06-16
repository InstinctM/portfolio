import "../styles/ScrollToTop.css"
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTop = () => {
  return (
    <button className="scroll-to-top" onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}><MdOutlineKeyboardDoubleArrowUp/></button>
  )
}

export default ScrollToTop