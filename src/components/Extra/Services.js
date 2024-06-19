import React from 'react';

const ServiceBox = ({ image, title, delay }) => (
  <div className="box responsive-box" data-aos="zoom-in-up" data-aos-delay={delay}>
    <div className="image-container">
      <img src={image} alt={title} className="hover-image" />
    </div>
    <h3>{title}</h3>
  </div>
);

const Services = () => {
  return (
    <>
      <section className="services" id="services">
        <div className="heading">
          <h1>Our Key Clients</h1>
          <span>We have worked with a sterling clientele for their immediate needs and ultimate goals.</span>
        </div>

        <div className="box-container">
          <ServiceBox
            image="./images/PSLogo.png"
            title="adventures"
            delay="300"
          />
          <ServiceBox
            image="./images/kula-3.png"
            title="worldwide"
            delay="150"
          />
          <ServiceBox
            image="./images/puppydog.png"
            title="food & drinks"
            delay="450"
          />
          <ServiceBox
            image="./images/SukoonLogo.png"
            title="affordable hotels"
            delay="600"
          />
          <ServiceBox
            image="./images/waypoint_logo.png"
            title="affordable price"
            delay="750"
          />
          <ServiceBox
            image="./images/diningrd-1.png"
            title="24/7 support"
            delay="900"
          />
          <ServiceBox
            image="./images/Frame-27-2 (1).png"
            title="affordable hotels"
            delay="600"
          />
          <ServiceBox
            image="./images/Nooberly-3.png"
            title="affordable price"
            delay="750"
          />
          <ServiceBox
            image="./images/ISOMLogo.png"
            title="24/7 support"
            delay="900"
          />
          <ServiceBox
            image="./images/shipohoi-1.png"
            title="24/7 support"
            delay="900"
          />
        </div>
      </section>
    </>
  );
};

export default Services;
