import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <h1>Abbeville Tutors</h1>
      </div>
      <div className="header__nav">
          <ul>
              <li><a href="About Us">About Us</a></li>
              <li><a href="Tuition">Tuition</a></li>
              <li><a href="Our Tutors">Our Tutors</a></li>
          </ul>
      </div>
      <div className="header__contact-us">
          <button className="contact__btn">Contact Us</button>
      </div>
    </div>
  );
};

export default Header;
