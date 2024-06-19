import React from 'react';

const Review = () => {
  return (
    <>
       <div className="heading" id='review'>
        <h1>Your One-Stop Software Engineering Studio</h1>
        </div>
      <section className="review">
        <div className="box-container" data-aos="fade-right" data-aos-delay="300">
          <img
            src="https://productbox.dev/wp-content/uploads/2019/01/service_details.png"
            alt="Service Details"
            style={{width: 600, height: 580}}
            className='image responsive-image'
          />
        </div> 
        <div className="content" data-aos="fade-left" data-aos-delay="600">
          <span><i className='fas fa-code'></i></span>
          <h3>Who are we?</h3>
          <p>
            A meticulously curated software engineering studio helping companies swiftly navigate through the complexities of health care to provide positive, quick, and real-world outcomes via HIPAA compliant digital health solutions and services.
          </p>
        </div>
      </section>

      <section className="review">
        <div className="content" data-aos="fade-left" data-aos-delay="600">
          <span><i className='fas fa-desktop'></i></span>
          <h3>We Strive For Perfection?</h3>
          <p>
          Whether you are amongst the Fortune 500 or a startup, we help you create disruptive web and mobile applications with functionalities that are aligned to your customer’s needs fueled by cutting-edge user experience.
          </p>
        </div>
        <div className="box-container" data-aos="fade-right" data-aos-delay="300">
        <img
            src="https://productbox.dev/wp-content/uploads/2018/11/service_item_03.png"
            alt="Service Details"
            style={{width: 600, height: 580}}
            className='image responsive-image'
          />
        </div>
      </section>
      <section className="review">
        <div className="box-container" data-aos="fade-right" data-aos-delay="300">
          <img
            src="https://productbox.dev/wp-content/uploads/2022/06/image-4.png"
            alt="Service Details"
            style={{width: 600, height: 580}}
            className='image responsive-image'
          />
        </div>
        <div className="content" data-aos="fade-left" data-aos-delay="600">
          <span><i className='fas fa-life-ring'></i></span>
          <h3>Our Team?</h3>
          <p>
          We envision a world where every life gets equal yet affordable access to preventative and customized healthcare. We are on a mission to revolutionize the existing global healthcare system by leveraging robust and scalable solutions.
          </p>
        </div>
      </section>

      <section className="review">
        <div className="content" data-aos="fade-left" data-aos-delay="600">
          <span><i className='fas fa-desktop'></i></span>
          <h3>We Strive For Perfection?</h3>
          <p>
          Whether you are amongst the Fortune 500 or a startup, we help you create disruptive web and mobile applications with functionalities that are aligned to your customer’s needs fueled by cutting-edge user experience.
          </p>
        </div>
        <div className="box-container" data-aos="fade-right" data-aos-delay="300">
          <img
            src="https://productbox.dev/wp-content/uploads/2019/01/service_details_one.png"
            alt="Service Details"
            style={{width: 600, height: 580}}
            className='image responsive-image'
          />
        </div>
      </section>
    </>
  );
};

export default Review;
