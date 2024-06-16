import { useState } from "react";
import { Link } from "react-scroll"
import "../styles/NavBar.css";

interface navBarItem {
  name: string;
  url: string;
}

const navBarItems: navBarItem[] = [
  {
    name: "Home",
    url: "landing"
  },
  {
    name: "About",
    url: "about"
  },
  {
    name: "Projects",
    url: "projects"
  },
  {
    name: "Skills",
    url: "skills"
  },
  {
    name: "Contacts",
    url: "contacts"
  }
]

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="NavBarItems">
      <h1 className="icon-text">INSTINCT</h1>
      
      <div className="menu-icon" >
        <i className={clicked ? "fas fa-times" : "fas fa-bars"} onClick={() => setClicked(!clicked)}></i>
      </div>

      <ul className={clicked ? "navBarRight active" : "navBarRight"}>
        {navBarItems.map((item, index) => (
          <li key={index}>
            <Link to={item.url} className="nav-link" smooth={true} duration={500}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
