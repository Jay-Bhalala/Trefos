import React from "react";
import "./css-files/volunteer.css";

function Volunteer() {
  return (
    <div>
    <div className="about-us-heading-text">
      <h1 className="about-us-text">Volunteer With Us!</h1>
    </div>
    <div className="about-us-heading-text-2">
      <div className="our-mission-container">
        <p>At our organization, we highly appreciate the work of volunteers. Because our services require food banks to pick up restaurants' excess foods, we allow volunteers the opportunity to aid in this process. If you or an accompanying guardian have a driver's license, you can contact any of the food banks below and inform them that you will be picking up food for them from a restaurant through Trefos and dropping it off to them. Make sure to check the food bank's operating hours to make sure that you don't arrive there at a time when it is closed. It might be easier to find a restaurant closest to you. You can do this by going to the "Discover Restaurants" tab and clicking on the "Map Of All Registered Restaurants" button to access a map of all the available restaurants near you and choose the most convenient one. Make sure the restaurant you have chosen has available food and that it meets the requirements of the food bank you are delivering it to.</p>
      </div>
    </div>
    <div className="about-us-heading-text-10">
        <div className="our-mission-container60">
          <h1 className="about-us-text4">Parter Food Banks & Accompanying Information</h1>
        </div>
        <div className="our-mission-container61">
            <ul>
                <li>Food Bank Name</li>
                <ul>
                    <li>Website: ...</li>
                    <li>Operating Hours: ...</li>
                    <li>Phone Number: ...</li>
                    <li>Email: ...</li>
                </ul>
                <li>etc</li>
                <li>etc</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;