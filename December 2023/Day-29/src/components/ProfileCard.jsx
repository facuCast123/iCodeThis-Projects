const ProfileCard = ({ setShow }) => {
  return (
    <div className="profile-card">
      <span className="icon-container">
        <box-icon
          onClick={() => setShow(false)}
          className="close-icon"
          name="x"
          size="md"
        ></box-icon>
      </span>
      <img
        className="profile-picture"
        src="./images/profile-picture.jpg"
        alt="Profile picture"
      />
      <h2 className="profile-name">John Doe</h2>
      <p className="profile-text">
        For custom orders please contact us at design@gmail.com
      </p>
      <span className="profile--button-container">
        <button className="profile-button">Follow</button>
        <button className="profile-button">Message</button>
      </span>
    </div>
  );
};

export default ProfileCard;
