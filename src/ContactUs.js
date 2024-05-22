import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


function ContactUs() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
        {/* Add bg-primary class for background color */}
        <div className="container-fluid">
          <a className="navbar-brand text" href="/">FITNESS GEAR</a>
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
                <a className="nav-link text-white" href="/ShopNow">ShopNow</a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link text-white" aria-disabled="true" href="/Contactus">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    

      <div class="container">
    <h2>Contact Us</h2>

    <form action="submit_form.php" method="post">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="name" name="name" required/>
        </div>

        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" name="email" required/>
        </div>

        <div class="form-group">
            <label for="message">Message:</label>
            <textarea class="form-control" id="message" name="message" rows="4" required/>
            
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
    </div>
  );
}

export default ContactUs;
