import { Link } from "react-router-dom";

const ImageCarousel = () => {
  return (
    
    <section className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>

          {/* Carousel Items with Captions */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/truck1.jpg" alt="Truck 1" className="d-block w-100" height="300px" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Heavy Duty Truck</h5>
                <p>Designed for industrial transport.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src="images/truck2.jpg" alt="Truck 2" className="d-block w-100" height="300px" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Off-Road Truck</h5>
                <p>Built for rough terrain handling.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src="images/truck3.jpg" alt="Truck 3" className="d-block w-100" height="300px" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Long-Haul Truck</h5>
                <p>Efficient over long distances.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src="images/truck4.jpg" alt="Truck 4" className="d-block w-100" height="300px" />
              <div className="carousel-caption d-none d-md-block">
                <h5>City Delivery Truck</h5>
                <p>Compact and perfect for urban deliveries.</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <Link to="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </Link>

          <Link to="#mycarousel" className="carousel-control-next" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </Link>
        </div>
      </div>
      <div className="col-md-1"></div>
    </section>
  );
};

export default ImageCarousel;
