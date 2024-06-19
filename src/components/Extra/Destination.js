import React from 'react';

const DestinationBox = ({ iconClass, title, text, link }) => (
  <div className="box" data-aos="fade-up" data-aos-delay="150">
    <div className="image">
      <i className={iconClass}></i>
    </div>
    <div className="content">
      <h2 className='title'>{title}</h2>
      <p>{text}</p>
      <a href={link}>
        read more <i className="fas fa-angle-right"></i>
      </a>
    </div>
  </div>
);

const Destination = () => {
  const destinationsData = [
    {
      iconClass: 'fas fa-code',
      title: 'Product Development',
      text: 'By partnering with the leadership team we help conceptualize, design and develop products that address business needs not just tech requirements.',
      link: '#',
    },
    {
      iconClass: 'fas fa-layer-group',
      title: 'Architecture & Design',
      text: 'We invest the time and resources upfront to understand the full scope of client requirements and design a plan that helps future-proof their solution.',
      link: '#',
    },
    {
      iconClass: 'fas fa-life-ring',
      title: 'Technical Support',
      text: 'Providing Technical support for your product, let us deal with the clients, log their concerns in a ticketing system and follow up with your team till it’s resolved.',
      link: '#',
    },
    {
      iconClass: 'fas fa-desktop',
      title: 'System Integration',
      text: 'We bring together the disparate components of your digital infrastructure into a cohesive system and ensure that they work together seamlessly to meet your objectives.',
      link: '#',
    },
  ];

  return (
    <>
      <section className="destination" id="destination">
        <div className="heading">
        <h1>What We Offer?</h1>
          <h4>Through end-to-end development, Productbox enables you to solve the challenges of health tech.</h4>
        </div>

        <div className="box-container">
          <div className="row">
            <div className="col-lg-5">
              <div className="image">
                <img
                  src="https://productbox.dev/wp-content/uploads/2019/02/features_img.png"
                  alt="featured"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                {destinationsData.slice(0, 4).map((destination, index) => (
                  <div className="col-sm-6" key={index}>
                    <DestinationBox
                      iconClass={destination.iconClass}
                      title={destination.title}
                      text={destination.text}
                      link={destination.link}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination;
