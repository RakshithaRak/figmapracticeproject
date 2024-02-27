import brandBaseLogo from "../../assets/icons/brandBaselogo.png";
import imageLogo from "../../assets/icons/imageheader.png";
import notificationHeaderIcon from "../../assets/icons/notificationheader.png";
import burgerRegularIcon from "../../assets/icons/burgerRegularIcon.png";

import "./Header.scss";

const Header = ({ onSetIsSideBar }) => {
  return (
    <header>
      <p>Upload CSV</p>

      <div className="burgerRegularIcon-container">
        <img
          className="mobile-view-burgerRegularIcon"
          src={burgerRegularIcon}
          alt="Hamburger"
          onClick={onSetIsSideBar}
        />
      </div>

      <section className="mobile-view-logo">
        <img src={brandBaseLogo} alt="Brand Icon" />
        <p>Base</p>
      </section>

      <div>
        <img
          className="notification-header-icon"
          src={notificationHeaderIcon}
          alt="Notification Header Icon"
        />
        <img className="image-logo" src={imageLogo} alt="Image Logo" />
      </div>
    </header>
  );
};
export default Header;
