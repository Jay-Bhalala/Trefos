import React from "react";
import "./css-files/aboutUs.css";

function AboutUs(props) {
  return (
    <div>
      <div className="about-us-heading-text">
        <h1 className="about-us-text">About Us</h1>
        <p>What Cratos is all About</p>
      </div>
      <div className="about-us-heading-text-2">
        <div className="our-mission-container">
          <h1>Our Mission</h1>
        </div>
        <div className="our-mission-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
      <div className="lol">
        <div className="about-us-heading-text-3">
          <h1>How we Impact</h1>
        </div>
        <div className="how-we-impact-container">
          <div className="values-conatiner">
            <h2>Community Values</h2>
            <div className="impact-description-container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut
              </p>
            </div>
          </div>
          <div className="values-conatiner">
            <h2>Volunteering</h2>
            <div className="impact-description-container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut
              </p>
            </div>
          </div>
          <div className="values-conatiner">
            <h2>Regulating resources</h2>
            <div className="impact-description-container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <h1>Our Team</h1>
        <div class="team">
          <div class="team_member">
            <div class="team_img">
              <img src="https://i.imgur.com/2pGPLrl.png" alt="Team_image" />
            </div>
            <h3>Paul Doe</h3>
            <p class="role">UI developer</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              quaerat tempora, voluptatum quas facere dolorum aut cumque nihil
              nulla harum nemo distinctio quam blanditiis dignissimos.
            </p>
          </div>
          <div class="team_member">
            <div class="team_img">
              <img src="https://i.imgur.com/jQj1I8E.png" alt="Team_image" />
            </div>
            <h3>Rosie Meg</h3>
            <p class="role">Tester</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              quaerat tempora, voluptatum quas facere dolorum aut cumque nihil
              nulla harum nemo distinctio quam blanditiis dignissimos.
            </p>
          </div>
          <div class="team_member">
            <div class="team_img">
              <img src="https://i.imgur.com/2Necikc.png" alt="Team_image" />
            </div>
            <h3>Alex Wood</h3>
            <p class="role">Support Lead</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              quaerat tempora, voluptatum quas facere dolorum aut cumque nihil
              nulla harum nemo distinctio quam blanditiis dignissimos.
            </p>
          </div>
          <div class="team_member">
            <div class="team_img">
              <img src="https://i.imgur.com/2Necikc.png" alt="Team_image" />
            </div>
            <h3>Alex Wood</h3>
            <p class="role">Support Lead</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              quaerat tempora, voluptatum quas facere dolorum aut cumque nihil
              nulla harum nemo distinctio quam blanditiis dignissimos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
