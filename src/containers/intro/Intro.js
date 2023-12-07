import React  from 'react';
import './Intro.css'
export function Intro() {
  return <div className="text-center bg-light intro-content">
    <div className="profile-container">
      <div id="my-photo"></div>
      <div id="portfolio-photo"></div>
    </div>
    <div className="col-lg-5 p-lg-5 mx-0 my-5">
      <h2 className="display-6 ">Hi!</h2>
      <h2 className="display-6">I am</h2>
      <h1 className="display-4">Shivani Roy</h1>
      <h2 className="display-6">and I am a</h2>
      <h1 className="display-4">Software Engineer</h1>
      <p className="lead">I am dedicated to driving excellence in software engineering.</p>
    </div>
  </div>
}

