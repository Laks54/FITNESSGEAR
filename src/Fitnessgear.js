import React from 'react';
import { Carousel } from 'react-bootstrap'; // Import React Bootstrap components
import './Fitnessgear.css';


function FitnessGear() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-danger" href="/">FITNESS GEAR</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/About">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" aria-disabled="true" href="/ShopNow">ShopNow</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" aria-disabled="true" href="/ContactUs">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='carousal-container'>
        <Carousel className='carousal'>
          <Carousel.Item>
            <img src="c5.jpg" alt="Image 1" className="d-block w-100 carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="c4.jpg" alt="Image 2" className="d-block w-100 carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="c3.jpg" alt="Image 2" className="d-block w-100 carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="c2.jpg" alt="Image 2" className="d-block w-100 carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="c1.jpg" alt="Image 2" className="d-block w-100 carousel-image" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div>
      <div className='introduction'>
        <div className='container text-center'> {/* Center align content */}
          <h1 className='welcome-heading mb-5'>Welcome</h1> {/* Add a class for styling */}
            <p>Welcome to FitnessGear, where fitness meets community! We are dedicated to helping you achieve your fitness goals in a supportive and motivating environment. Whether you're a seasoned athlete or just starting your fitness journey, our state-of-the-art facilities and expert trainers are here to guide and inspire you every step of the way.

              At FitnessGear, we believe that fitness is not just about physical strength, but also about mental well-being. That's why we offer a wide range of classes and programs designed to challenge your body and mind, including high-intensity interval training, yoga, pilates, and more. Our passionate instructors are committed to helping you reach your full potential, whatever your fitness level or goals may be.

              But it's not just about the workouts – it's also about the community. Joining FitnessGear means becoming part of a supportive and inclusive family where you'll find encouragement, accountability, and friendship. Whether you're sweating it out in a group class, hitting the weights in the gym, or relaxing in our sauna, you'll always feel welcome and valued.

              So why wait? Take the first step towards a healthier, happier you and join us at FitnessGear today. Your fitness journey starts here!</p>
                                                               <p>Join Us</p>
          </div>
        </div>
      </div>
      <footer>
        <p>Conditions of Use & Sale
        Privacy Notice
        Interest-Based Ads
        © 1996-2023, FITNESS GEAR.com, Inc. or its affiliates
        </p>
      </footer>
    </div>
  );
}

export default FitnessGear;
