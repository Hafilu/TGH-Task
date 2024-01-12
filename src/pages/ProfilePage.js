import React from "react";
import "./ProfilePage.css";
const ProfilePage = () => {
  return (
    <>
      <div className="profile-details">
        <div className="profile-avatar">
          <img src={process.env.PUBLIC_URL + "/dp.jpg"} alt="Profile" />
        </div>

        <h5>Jhon Doe</h5>

        <p>jhondoe</p>

        <p className="tagline">UI Developer | let's redesign the world.</p>

        <p className="likes">2957 likes.</p>
      </div>
    </>
  );
};

export default ProfilePage;
