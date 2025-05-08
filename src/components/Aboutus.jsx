import React from 'react';
import Footer from './Footer';


const testimonials = [
  { name: "John Doe", comment: "Reliable and fast truck delivery. Highly recommended!" },
  { name: "Grace Wambui", comment: "Their after-sales support is outstanding!" },
  { name: "Ali Yusuf", comment: "Got my Scania in perfect condition. Five stars!" }
];

const Aboutus = () => {
  return (
    <div className="container my-5">
      <h1 className=' text-danger text-center '>About Us</h1>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img src="images/team image.jpg" alt="Our Team" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
         
          <p>
            Our key objective is to continuously supply commercial vehicles, tractors, and trailers
            through dealerships that meet the aspirations of customers in the East African market.
            We aim to do this through excellent distribution, top-quality standards, after-sales service,
            and innovation.
          </p>
          <h3 className='text-primary'>Over 30+ services, 1200+ happy customers...</h3>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-6 mb-3">
          <h2 className="text-secondary">Our Mission</h2>
          <p>
            To be the leading provider of trucks and commercial vehicle solutions in East Africa by
            offering unmatched quality and customer service.
          </p>
        </div>
        <div className="col-md-6 mb-3">
          <h2 className="text-secondary">Our Vision</h2>
          <p>
            To revolutionize commercial vehicle trade through digital innovation, trust, and world-class logistics.
          </p>
        </div>
      </div>

      <div className="mb-5">
        <h2 className="text-center text-success">Core Values</h2>
        <div className="row text-center">
          <div className="col-md-3">
            <h4>Integrity</h4>
            <p>We value honesty and transparency in all our transactions.</p>
          </div>
          <div className="col-md-3">
            <h4>Innovation</h4>
            <p>We embrace change and constantly improve our services.</p>
          </div>
          <div className="col-md-3">
            <h4>Customer Focus</h4>
            <p>We go above and beyond to meet our clients’ needs.</p>
          </div>
          <div className="col-md-3">
            <h4>Excellence</h4>
            <p>We strive for top quality in everything we do.</p>
          </div>
        </div>
      </div>

      <div className="my-5">
        <h2 className="text-center text-warning mb-4">What Our Customers Say</h2>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((t, idx) => (
              <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
                <div className="text-center p-4">
                  <blockquote className="blockquote">
                    <p>"{t.comment}"</p>
                    <footer className="blockquote-footer">{t.name}</footer>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" />
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </div>

      <video
        src="videos/video2.mp4"
        autoPlay
        muted
        loop
        className="w-100 mt-4 rounded shadow"
      ></video>

      <div className="text-center my-5">
        <h3 className="text-info">Ready to Get Started?</h3>
        <p>Contact us for inquiries, dealership opportunities, or to order your next truck!</p>
        
      </div>

      <Footer />
    </div>
  );
};

export default Aboutus;
