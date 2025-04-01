import React from 'react'
import Footer from './Footer';

const Aboutus = () => {
  return (
    <div className="row justify-content-center">

        <h1 className='display-4 text-danger'>About Us</h1>

        <div className="col-md-6">
            <div className="card shadow p-4 m-3">
                <img src="images/team image.jpg" alt="our team" />
            </div>
        </div>
        <div className="col-md-6 justify-content-start">
            <h2 className='text-success'>Members:</h2>
            <ul >
                <li>Brian Manyeki : CEO</li>
                <li>Margaret Wairimu: COO</li>
                <li>Joseph Kariuki: Member</li>
                <li>Linet Ngigi: Member</li>
            </ul>
            <p>Our long term key business objective is to continuously supply commercial vehicles, tractors and trailers through dealerships in a manner that satisfies the aspirations of our target customers in the lucrative East African markets. This will be achieved through implementation of efficient marketing, distribution and supply standards as well as high quality control standards, after sales services, cost efficiency and modern technological innovations and the recruitment of a competent professional workforce and supply chain actors</p>

            <h3 className='text-primary'>Over 30+ services, over 1200+ customers served...</h3>

            
        </div>
        <Footer/>
    </div>
  )
}

export default Aboutus;