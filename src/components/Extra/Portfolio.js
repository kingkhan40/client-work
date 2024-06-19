import React, { useEffect } from 'react';
import mixitup from 'mixitup'; // Import mixitup

const Portfolio = () => {
  useEffect(() => {
    // Initialize MixItUp
    var mixer = mixitup('.portfolio-gallery', {
      selectors: {
        target: '.portfolio-box',
      },
      animation: {
        duration: 500,
      },
    });
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <div className="main-text">
        <div className="heading">
            <h1>PortFolio</h1>
        </div>
      </div>
      <div className="fillter-buttons">
        <button className="button mixitup-control-active" data-filter="all">
          All Work
        </button>
        <button className="button" data-filter=".web">
          Web Development
        </button>
        <button className="button" data-filter=".uiux">
          UI/UX Design
        </button>
        <button className="button" data-filter=".branding">
          Branding Design
        </button>
      </div>

      <div className="portfolio-gallery">
        <div className="portfolio-box mix uiux">
          <div className="portfolio-content">
            <h3>UI/UX Design</h3>
            <p>
            Web development is the work involved in developing a website for the Internet 
            </p>
            <a href="#" className="readMore">
              Explore More
            </a>
          </div>
          <div className="portfolio-img">
            <img src="./img/1.jpg" alt="" />
          </div>
        </div>

        <div className="portfolio-box mix web">
          <div className="portfolio-content">
            <h3>Web Design</h3>
            <p>
            Web development is the work involved in developing a website for the Internet 
            </p>
            <a href="#" className="readMore">
              Explore More
            </a>
          </div>
          <div className="portfolio-img">
          <img src="./img/2.jpg" alt="" />          </div>
        </div>

        <div className="portfolio-box mix web">
          <div className="portfolio-content">
            <h3>Web Development</h3>
            <p>
            Web development is the work involved in developing a website for the Internet 
            </p>
            <a href="#" className="readMore">
              Explore More
            </a>
          </div>
          <div className="portfolio-img">
          <img src="./img/3.jpg" alt="" />          </div>
        </div>

        <div className="portfolio-box mix web">
          <div className="portfolio-content">
            <h3>Web Development</h3>
            <p>
            Web development is the work involved in developing a website for the Internet 
            </p>
            <a href="#" className="readMore">
              Explore More
            </a>
          </div>
          <div className="portfolio-img">
          <img src="./img/4.jpg" alt="" />          </div>
        </div>

        <div className="portfolio-box mix uiux">
          <div className="portfolio-content">
            <h3>UI/UX Design</h3>
            <p>
            Web development is the work involved in developing a website for the Internet 
            </p>
            <a href="#" className="readMore">
              Explore More
            </a>
          </div>
          <div className="portfolio-img">
          <img src="./img/5.jpg" alt="" />          </div>
        </div>

        <div className="portfolio-box mix branding">
          <div className="portfolio-content">
            <h3>Web Development</h3>
            <p>
            Web development is the work involved in developing a website for the Internet 
            </p>
            <a href="#" className="readMore">
              Explore More
            </a>
          </div>
          <div className="portfolio-img">
          <img src="./img/6.jpg" alt="" />          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
