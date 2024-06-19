import React from 'react'

const Contact = () => {
    return (
        <>
            <section className="contact" id="contact">
                <div className="heading">
                    <h1>Reach Out To Us</h1>
                    <span>If you aspire to be equipped with the latest and most advanced digital solutions <br />  for your customers in compliance with HIPAA regulations  and work with the <br /> best software engineering field has to offer - contact us today.</span>
                </div>

                <section className="review">
                    <div className="content" data-aos="fade-left" data-aos-delay="600">
                        <h3 style={{ margin: '20px 0', color: 'blue' }}>Office Address</h3>
                        <p>
                            1st floor, Zaman Manzil, Opp Fata Secretariat, Warsak Road, Peshawar Pakistan</p>

                        <hr />
                        <h3 style={{ margin: '20px 0', color: 'blue' }}>Contact Info</h3>
                        <p>
                            Email: info@productbox.dev
                            <br />
                            Phone: +92-91-7089014</p>
                    </div>
                    <div className="box-container" data-aos="fade-right" data-aos-delay="300">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211749.53270389503!2d71.40031458855661!3d33.977467468800974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b90f0e79cf%3A0xa816b2637558a412!2sPeshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1697896254757!5m2!1sen!2s" width="700" height="500" style={{ border: 0 }} allowfullscreen="" className='map' loading="lazy"></iframe>
                    </div>
                </section>

            </section>
        </>
    )
}

export default Contact