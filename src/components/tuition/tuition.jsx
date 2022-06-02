import "./tuition.css";

const Tuition = () => {
  return (
    <div className="tuition">
      <div className="tuition__heading">
        <h4 className="tuition__title">Our Services</h4>
        <p className="tuition__subheading">
          We offer a wide range of services from private tuition, to online
          workshops.
        </p>
      </div>
      <div className="tuition__grid">
        <div className="grid__one grid__line">
          <img
            className="grid__image"
            src={require("../../images/school-boy.jpg")}
          />
          <h4 className="grid__title">Private Tuition</h4>
          <p className="grid__text">
            Our qualified teachers deliver engaging one-to-one lessons which
            accelerate academic performance. We address subject knowledge gaps
            and look to develop each individual child.
          </p>
        </div>
        <div className="grid__two grid__line">
          <img
            className="grid__image"
            src={require("../../images/girl--online--tuition.jpg")}
          />
          <h4 className="grid__title">Online Tuition</h4>
          <p className="grid__text">
            Our modern, professional approach to online schooling delivers
            excellent academic results. Our sessions are planned to ensure high
            levels of engagement alongside progress.
          </p>
        </div>
        <div className="grid__three">
          <img
            className="grid__image"
            src={require("../../images/girl--reading.jpg")}
          />
          <h4 className="grid__title">Interview Prep</h4>
          <p className="grid__text">
            Our Common Entrance examination preparation provides detailed
            feedback on mock exams and a personalised study plan for each child.
            We look to develop the whole child.
          </p>
        </div>
      </div>
      <div className="tuition__location">
        <img src={require("../../images/southwestlondon-map.png")} />
        <div className="tuition__location-text">
          <h2 className="aboutus__info-title">Our Location</h2>
          <h4 className="aboutus__info-subheading">
            We operate in person tuition across South West London, and online tuition nationlly and internationally.
          </h4>
        </div>
      </div>
      <img
        className="tuition__background"
        src={require("../../images/skyline-background.png")}
      />
    </div>
  );
};

export default Tuition;
