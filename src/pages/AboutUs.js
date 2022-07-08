import React from "react";
import "./css-files/aboutUs.css";

function AboutUs(props) {
  return (
    <div>
      <div className="about-us-heading-text">
        <h1 className="about-us-text">About Us</h1>
        <p>What Trefo is all About</p>
      </div>
      <div className="about-us-heading-text-2">
        <div className="our-mission-container">
          <h1>Our Mission</h1>
        </div>
        <div className="our-mission-container">
          <p>
            Our mission is to minimize the amount of food being
            wasted in our community by redistrubting
            excesses food from restaurant into the hands
            of those in need. We strive to provide clean
            high quality food back into our North Texas
            community.
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
              Currently, in the U.S. around 85% of the food that is not 
              used by a restaurant is usually thrown out and we aim to 
              reduce this number by giving back to our commmunity. We value
              every piece of food donated and distrubted.
              </p>
            </div>
          </div>
          <div className="values-conatiner">
            <h2>Volunteering</h2>
            <div className="impact-description-container">
              <p>
                We and our volunteering team help to find potiential restaurants
                donors and assist with the deliver food to local food banks in a 
                timely matter.
              </p>
            </div>
          </div>
          <div className="values-conatiner">
            <h2>Regulating resources</h2>
            <div className="impact-description-container">
              <p>
                We continuous emphasize that every piece counts because
                thats what often times makes the difference. A little resources
                conservation hear and there often times can make a huge impact
                in a large community such as ours.
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
              <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEoAq_eO6uAiA/profile-displayphoto-shrink_400_400/0/1619297408553?e=1662595200&v=beta&t=6PeG9fwDDA5OGlePVlTyRWxQQLFEg8ZuJ-ot6__ysDA" alt="Team_image" />
            </div>
            <h3>Jay Bhalala</h3>
            <p class="role">Backend developer</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              quaerat tempora, voluptatum quas facere dolorum aut cumque nihil
              nulla harum nemo distinctio quam blanditiis dignissimos.
            </p>
          </div>
          <div class="team_member">
            <div class="team_img">
              <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGNVANBE7dCww/profile-displayphoto-shrink_400_400/0/1655150440686?e=1662595200&v=beta&t=gQU7-bD29WXv2fL56lruwOOfGdgtU1-bs-uNITl75rg" alt="Team_image" />
            </div>
            <h3>Emmanuel Tawiah</h3>
            <p class="role">Backend developer</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              quaerat tempora, voluptatum quas facere dolorum aut cumque nihil
              nulla harum nemo distinctio quam blanditiis dignissimos.
            </p>
          </div>
          <div class="team_member">
            <div class="team_img">
              <img src="https://media-exp1.licdn.com/dms/image/C5603AQGSH3NUBJpvAw/profile-displayphoto-shrink_400_400/0/1650497222877?e=1662595200&v=beta&t=8bCzHiEOVLlbSUl1FQrLxhRgV3Ue3vyxzRpWJbslqW8" alt="Team_image" />
            </div>
            <h3>Jeremy Chuah</h3>
            <p class="role">Frontend developer</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              quaerat tempora, voluptatum quas facere dolorum aut cumque nihil
              nulla harum nemo distinctio quam blanditiis dignissimos.
            </p>
          </div>
          <div class="team_member">
            <div class="team_img">
              <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHDveFR7dRwbw/profile-displayphoto-shrink_400_400/0/1646675440410?e=1662595200&v=beta&t=rZAoNVorbdytFF2xMpXyUiqEHABn3hNQ4o7twpHAejU" alt="Team_image" />
            </div>
            <h3>Nikil Jain</h3>
            <p class="role">Frontend developer</p>
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
