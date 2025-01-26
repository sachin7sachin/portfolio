import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link
        className="navItems"
        activeClass="active"
        to="intro"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        Home
      </Link>
      <Link
        className="navItems"
        activeClass="active"
        to="education"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Education
      </Link>
      <Link
        className="navItems"
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Skills
      </Link>
      <Link
        className="navItems"
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        Projects
      </Link>
      <Link
        className="navItems"
        activeClass="active"
        to="links"
        // className={activeState === "intro" ? "active" : ""}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Links
      </Link>
      <Link
        className="navItems"
        activeClass="active"
        to="contact"
        // className={activeState === "intro" ? "active" : ""}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
