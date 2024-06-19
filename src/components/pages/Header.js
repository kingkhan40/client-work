import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Header = () => {
  const [isNavbarActive, setNavbarActive] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive(!isNavbarActive);
  };

  const closeNavbar = () => {
    setNavbarActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isNavbarActive ? 'active' : ''} ${isScrolled ? 'navbar-white' : ''}`}>

      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-80} // Adjust the offset based on your design
        duration={500}
        className="logo"
        onClick={closeNavbar}
      >
        <span>P</span>roduct <span>B</span>ox
      </Link>
      <div id="menu-btn" onClick={toggleNavbar}>
        {isNavbarActive ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={`navbar ${isNavbarActive ? 'active' : ''}`}>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="aos-init aos-animate"
          activeStyle={{ color: 'blue' }}
          onClick={closeNavbar}
        >
          Home
        </Link>
        <Link
          to="services"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="aos-init aos-animate"
          activeStyle={{ color: 'blue' }}
          onClick={closeNavbar}
        >
          Our Client
        </Link>
        <Link
          to="destination"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="aos-init aos-animate"
          activeStyle={{ color: 'blue' }}
          onClick={closeNavbar}
        >
          Services
        </Link>
        <Link
          to="project"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="aos-init aos-animate"
          activeStyle={{ color: 'blue' }}
          onClick={closeNavbar}
        >
          Projects
        </Link>
        <Link
          to="review"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="aos-init aos-animate"
          activeStyle={{ color: 'blue' }}
          onClick={closeNavbar}
        >
          About
        </Link>
        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="aos-init aos-animate"
          activeStyle={{ color: 'blue' }}
          onClick={closeNavbar}
        >
          Portfolio
        </Link>
        <Link
          to="testimonial"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="aos-init aos-animate"
          activeStyle={{ color: 'blue' }}
          onClick={closeNavbar}
        >
          Testimonial
        </Link>

        <Link
          to="techstack"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="aos-init aos-animate"
          activeStyle={{ color: 'blue' }}
          onClick={closeNavbar}
        >
          Our Tech Stack
        </Link>
      
      </nav>


    </header>
  );
};

export default Header;
