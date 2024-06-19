import React from 'react'

const Footer = () => {
    return (
        <>
            <section className="footer">

                <div className="box-container">

                    <div className="box" data-aos="fade-up" data-aos-delay="150">
                        <a href="#" className="logo"> <span>P</span>roduct <span>B</span>ox </a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ad?</p>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-up" data-aos-delay="300">
                        <h3>quick links</h3>
                        <a href="#" className="links"> <i className="fas fa-arrow-right"></i> home </a>
                        <a href="#" className="links"> <i className="fas fa-arrow-right"></i> about </a>
                        <a href="#" className="links"> <i className="fas fa-arrow-right"></i> destination </a>
                        <a href="#" className="links"> <i className="fas fa-arrow-right"></i> services </a>
                        <a href="#" className="links"> <i className="fas fa-arrow-right"></i> gallery </a>
                        <a href="#" className="links"> <i className="fas fa-arrow-right"></i> blogs </a>
                    </div>

                    <div className="box" data-aos="fade-up" data-aos-delay="450">
                        <h3>contact info</h3>
                        <p> <i className="fas fa-map"></i> Islamabad, Pakistan </p>
                        <p> <i className="fas fa-phone"></i> +123-456-7890 </p>
                        <p> <i className="fas fa-envelope"></i> ProudectBox@mail.com </p>
                        <p> <i className="fas fa-clock"></i> 7:00am - 10:00pm </p>
                    </div>

                    <div className="box" data-aos="fade-up" data-aos-delay="600">
                        <h3>Newsletter</h3>
                        <p>subscribe for latest updates</p>
                        <form action="">
                            <input type="email" name="" placeholder="enter your email" className="email" id="" />
                            <input type="submit" value="subscribe" className="btn" />
                        </form>
                    </div>

                </div>

                <div className="moving-background">
                <div className="background-image image1"></div>
                <div className="background-image image2"></div>
                <div className="background-image image3"></div>
            </div>

            </section>
           

          
            <div className="credit">Coded by <span>The Product Box</span> | all rights reserved!</div>

        </>
    )
}

export default Footer