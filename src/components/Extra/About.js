import React from 'react';
import { Typed } from 'react-typed';

const About = () => {
  return (
    <section className="about" id="home">
      <div className="content" data-aos="fade-left" data-aos-delay="600">
        <h4 style={{fontSize: '18px'}}>Building Digital Health</h4>
        <h3>
          <Typed
            strings={[
              'Frontend Developer',
              'Backend Developer',
              'UI/UX Designer',
            ]}
            typeSpeed={60}
            backSpeed={60}
            backDelay={1000}
            loop
            autoStart
          />
        </h3>

        <p>
          Through end-to-end software development, Productbox enables <br /> you to solve the challenges of health care.
        </p>
        <a href="#" className="btn">
          Read More...
        </a>
      </div>
      <div className="video-container" data-aos="fade-right" data-aos-delay="300">
        <img src="images/banner_img.png" className="video" alt="Video" />
      </div>
    </section>
  );
};

export default About;
