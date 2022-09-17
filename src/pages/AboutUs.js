import React from "react";
import "./css-files/aboutUs.css";

function AboutUs(props) {
  return (
    <div>
      <div className="about-us-heading-text">
        <h1 className="about-us-text">About Us</h1>
        {/* <p>What Trefo is all About</p> */}
      </div>
      <div className="about-us-heading-text-2">
        <div className="our-mission-container">
          <h1 className="about-us-text4">Mission</h1>
        </div>
        <div className="our-mission-container">
          <p>
            We aim to minimize the amount of food being wasted in our community
            by redistrubting excess food from restaurants into the hands of
            those in need. We strive to provide clean, high-quality food to food
            banks who can help the hungry.
          </p>
        </div>
      </div>

      <div className="about-us-heading-text-10">
        <div className="our-mission-container">
          <h1 className="about-us-text4">Impact</h1>
        </div>
        <div className="our-mission-container">
          <p>
            In the U.S., around 85% of the food not used by restaurants is
            thrown out. We aim to reduce this number by providing food banks
            with a network of readily available restaurants who can provide
            extra food to them. We value every piece of food donated and
            distrubted.
          </p>
        </div>
      </div>

      <div class="wrapper">
        <h1 className="about-us-text4">Team</h1>
        <div class="team">
          <div class="team_member">
            <div class="team_img">
              <img
                class="rounded-circle z-depth-2"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQEoAq_eO6uAiA/profile-displayphoto-shrink_200_200/0/1619297408553?e=1668643200&v=beta&t=RMhJsU5ucbc85vhseDhshMVxzfaOse9vAv0JdL3q-gc"
                alt="Team_image"
              />
            </div>
            <h3>Jay Bhalala</h3>
            <p class="role">Founder & President</p>
          </div>
          <div class="team_member">
            <div class="team_img">
              <img
                class="rounded-circle z-depth-2"
                src="https://media-exp1.licdn.com/dms/image/C5603AQGSH3NUBJpvAw/profile-displayphoto-shrink_200_200/0/1650497222877?e=1668643200&v=beta&t=d_jbqg9q0elRktFKYh-lbiTMWFL78FtSIddsYAaF4Es"
                alt="Team_image"
              />
            </div>
            <h3>Jeremy Chuah</h3>
            <p class="role">Founder & President</p>
          </div>
          <div class="team_member">
            <div class="team_img">
              <img
                class="rounded-circle z-depth-2"
                src="https://media-exp1.licdn.com/dms/image/C4D03AQGNVANBE7dCww/profile-displayphoto-shrink_400_400/0/1655150440686?e=1668643200&v=beta&t=pGWoG_VGd0dlqU7Eu65mWkuNaHVesr4MXSaHM-olAU0"
                alt="Team_image"
              />
            </div>
            <h3>Emmanuel Tawiah</h3>
            <p class="role">Growth</p>
          </div>
          <div class="team_member">
            <div class="team_img">
              <img
                class="rounded-circle z-depth-2"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQHDveFR7dRwbw/profile-displayphoto-shrink_200_200/0/1646675440410?e=1668643200&v=beta&t=5MrvQ1u19uIm4O9_plfXId11V7rK57SlWRYVkLrQQjU"
                alt="Team_image"
              />
            </div>
            <h3>Nikhil Jain</h3>
            <p class="role">Marketing Lead</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
