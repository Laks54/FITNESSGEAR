import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShopNow() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" id="menu">
        <div className="container-fluid">
          <a className="navbar-brand text-danger" href="/">FITNESS GEAR</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">SIGNIN</button>
            </form>
          </div>
        </div>
      </nav>

      <h2 style={{ backgroundColor: 'rgb(231, 141, 141)', padding: '50px', textAlign: 'center' }}>BEST PICKED PRODUCTS</h2>
      <section className='row'>
        <div className="col-md-4 mb-4"> {/* Added column class with margin-bottom */}
          <div className="card">
            <img src="/c6.jpg" className="card-img-top" alt="..." height="250" />
            <div className="card-body">
              <h5 className="card-title">KETTLEBELL</h5>
              <p className="card-text text-danger">20% OFF</p>
              <p className="card-text">Rs.2000</p>
              <a href="#" className="btn btn-primary">BUY NOW</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4"> {/* Added column class with margin-bottom */}
          <div className="card">
            <img src="/c7.jpg" className="card-img-top" alt="..." height="250" />
            <div className="card-body">
              <h5 className="card-title">TREADMILL</h5>
              <p className="card-text text-danger">50% OFF</p>
              <p className="card-text">Rs.1000</p>
              <a href="#" className="btn btn-primary">BUY NOW</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4"> {/* Added column class with margin-bottom */}
          <div className="card">
            <img src="/c8.jpg" className="card-img-top" alt="..." height="250" />
            <div className="card-body">
              <h5 className="card-title">PLATES</h5>
              <p className="card-text text-danger">40% OFF</p>
              <p className="card-text">Rs.3000</p>
              <a href="#" className="btn btn-primary">BUY NOW</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4"> {/* Added column class with margin-bottom */}
          <div className="card">
            <img src="/c14.jpg" className="card-img-top" alt="..." height="250" />
            <div className="card-body">
              <h5 className="card-title">DUMBBELL</h5>
              <p className="card-text text-danger">60% OFF</p>
              <p className="card-text">Rs.1400</p>
              <a href="#" className="btn btn-primary">BUY NOW</a>
            </div>
          </div>
        </div>
        {/* Repeat the card elements for other products */}
      </section>

      <br /><br />
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

export default ShopNow;
