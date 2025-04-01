const Footer = () => {
    return (
    <div>
        <section className="row  mt-4 footer-background-color">
            <div className="col-md-4 text-left text-light">
                <h5 className="p-2 text-center text-info">About Us</h5>
                <p>Trucks are essential vehicles in the world of transport and logistics. They contribute to delivering goods over both long and short distances</p>
                <p> They play a crucial role in moving products from factories to warehouses, distribution centers, and ultimately to consumers.</p>
                <br/>
            </div>
            <div className="col-md-4 text-light">
                <h5 className="p-2 text-center text-info">Reach Us Out</h5>
                <input className="form-control" type="email" placeholder="Enter your email"/>
                <br/>
                <textarea className="form-control" rows="7" placeholder="Leave a comment"></textarea>
                <br/>
                <input type="submit" value="Send Message" className="btn btn-primary"/>
            </div>
            <div className="col-md-4 ">
                <h4 className="text-center text-info">Connect With Us</h4>
                <br/>
                <a href="https://facebook.com">
                <img src="images/facebook.jpg" alt="" className="socialspictures"/>
                </a>
                <a href="https://instagram.com">
                <img src="images/instagram.jpg" alt="" className="socialspictures"/>
                </a>
                <p className="text-dark"> We provide consistent, personal and reliable communication and complete transparency, so customers always know exactly what to expect</p>
            </div>
        </section>
        <footer className="text-white text-center p-2 mt-2 bootom-footer">
                <h5>Developed by Margaret Kariuki &copy; 2025.All rights reserved</h5>
        </footer>
    </div>
    );
    }
     
   
    export default Footer;