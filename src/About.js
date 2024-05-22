import React from 'react';

function AboutUs() {
  return (
    <div style={{ backgroundImage: `url('c16.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}>
      <nav className="navbar navbar-expand-lg">
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
                <a className="nav-link text-white" aria-disabled="true" href="/ContactUs">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <AboutSection
        title="BODY BUILDING."
        subtitle="It’ll Build Your Body."
        text="At Gym and Fitness, we believe that fitness and wellbeing are the cornerstones of a full and vibrant life. Established in 2002, we began our journey as a family-owned business dedicated to providing exceptional gym equipment at affordable prices. But, we dreamed bigger than just being an ordinary fitness equipment supplier; we aspired to lead the industry."
        imagePath="c12.jpg"
        textColor="#000000"
        leftAligned={true}
      />
      <hr className="my-4" /> {/* Add horizontal rule as separator */}
      
      <AboutSection
        title="YOGA."
        subtitle="It’ll Keep You Healthy."
        imagePath="c13.jpg"
        text="Two decades later, we are proud to have transformed Gym and Fitness into one of Australia's premier online retailers of fitness equipment. We've moved beyond just supplying gear – we've become advocates for fitness, wellbeing and life enrichment. Our commitment to excellence is reflected not only in the quality equipment we provide but also in the lives we've improved.."
        textColor="#000000"
        leftAligned={false}
      />
      <hr className="my-4" /> {/* Add horizontal rule as separator */}

      <AboutSection
        title="MARTIAL ARTS."
        subtitle="It’ll Enhances Self Protection."
        text="Our real success lies in the thousands of customers we've empowered to live longer, more joyful, and healthier lives. We're more than just a fitness company – we're your partners in health, your cheerleaders on the sideline, motivating you to reach your personal fitness goals. Embrace the fitness journey with us and see how it transforms your world."
        imagePath="c11.jpg"
        textColor="#000000"
        leftAligned={true}
      />
      <hr className="my-4" /> {/* Add horizontal rule as separator */}

      <AboutSection
        title="SPRINT."
        subtitle="It’ll Enhances Cardiac Health."
        text="Join us in our mission to improve lives through fitness and wellness, because at Gym and Fitness, your health is our passion."
        imagePath="c15.jpg"
        textColor="#000000"
        leftAligned={false}
      />
      
      <div className="color">
        <span className="btn" id="white" onClick={() => changeBG('#ffffff')}></span>
        <span className="btn" id="aqua" onClick={() => changeBG('#7fffd4')}></span>
        <span className="btn" id="violet" onClick={() => changeBG('#da70e6')}></span>
        <span className="btn" id="black" onClick={() => changeBG('#000000')}></span>
      </div>
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

function AboutSection({ title, subtitle, text, imagePath, textColor, leftAligned }) {
  return (
    <div className="container my-4">
      <div className="row featurette d-flex align-items-center justify-content-center">
        {leftAligned ? (
          <>
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1 text-dark" style={{ color: textColor }}>{title} <span className="text-body-white">{subtitle}</span></h2>
              <p className="lead" style={{ color: textColor }}>{text}</p>
            </div>
            <div className="col-md-5">
              <img src={imagePath} alt="" height="300" width="300" />
            </div>
          </>
        ) : (
          <>
            <div className="col-md-5">
              <img src={imagePath} alt="" height="300" width="300" />
            </div>
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1 text-dark" style={{ color: textColor }}>{title} <span className="text-body-white">{subtitle}</span></h2>
              <p className="lead" style={{ color: textColor }}>{text}</p>
            </div>
          </>
        )}
      </div>
      <hr className="my-4" /> {/* Add horizontal rule as separator */}
    </div>
  );
}

function changeBG(color) {
  document.body.style.backgroundColor = color;
  let cl = document.getElementById("text");
  if (color === "#000000") {
    for (let elm of cl) {
      cl.style.color = "white";
    }
  } else {
    for (let elm of cl) {
      cl.style.color = "black";
    }
  }
}


export default AboutUs;
