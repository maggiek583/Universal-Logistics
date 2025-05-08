const Footer = () => {
    return (
      <div>
        <section className="row mt-4 footer-background-color">
          {/* Contact Us Section */}
          <div className="col-md-4 text-left text-light">
            <h5 className="p-2 text-center text-info">Contact Us</h5>
            <p><strong>Phone:</strong> +254 713 055 544</p>
            <p><strong>Email:</strong> info@universallogistics.co.ke</p>
            <p><strong>Head Office:</strong> Industrial Area, Nairobi, Kenya</p>
            <p><strong>Branch:</strong> Moi Avenue, Mombasa, Kenya</p>
            <br />
          </div>
  
          {/* Reach Us Out Section */}
          <div className="col-md-4 text-light">
            <h5 className="p-2 text-center text-info">Reach Us Out</h5>
            <input className="form-control" type="email" placeholder="Enter your email" />
            <br />
            <textarea className="form-control" rows="7" placeholder="Leave a comment"></textarea>
            <br />
            <input type="submit" value="Send Message" className="btn btn-primary" />
          </div>
  
          {/* Social Media + Video Section */}
          <div className="col-md-4">
            <h4 className="text-center text-info">Connect With Us</h4>
            <br />
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="images/facebook.jpg" alt="Facebook" className="socialspictures" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="images/instagram.jpg" alt="Instagram" className="socialspictures" />
            </a>
            <p className="text-dark">
              We provide consistent, personal and reliable communication and complete transparency,
              so customers always know exactly what to expect.
            </p>
  
            <video
              src="videos/video1.mp4"
              autoPlay
              muted
              loop
              className="w-100 mt-4"
            ></video>
          </div>
        </section>
  
        {/* Footer Bottom */}
        <footer className="text-white text-center p-2 mt-2 bootom-footer">
          <h5>Developed by Margaret Kariuki &copy; 2025. All rights reserved</h5>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  