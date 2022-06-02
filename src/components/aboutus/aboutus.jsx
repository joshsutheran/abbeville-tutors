import "./aboutus.css";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="teachers">
        <div className="aboutus__info">
          <h2 className="aboutus__info-title">Qualified Teachers</h2>
          <h4 className="aboutus__info-subheading">
            Our tutors have a wealth of classroom experience
          </h4>
          <p className="aboutus__info-text">
            All of our tutors are fully qualified teachers (QTS), possessing
            years of experience in the classroom
          </p>
          <p className="aboutus__info-text">
            Our tutors therefore provide individualised learning that has been
            designed and tailored to fit each individual child's needs.
          </p>
        </div>
        <div className="aboutus__image">
          <img
            className="aboutus__image-teacher"
            src={require("../../images/teacher.png")}
          />
        </div>
      </div>
      <div className="primaryfocus">
        <div className="aboutus__image">
          <img
            className="aboutus__image-pupils"
            src={require("../../images/students.png")}
          />
        </div>
        <div className="aboutus__info">
          <h2 className="aboutus__info-title">Primary Education Specialists</h2>
          <h4 className="aboutus__info-subheading">
            We specialise in supporting young children between the ages of 4 and 11
          </h4>
          <p className="aboutus__info-text">
          We are not a one size fits all agency. We provide the very best primary tutors, that are experienced and skilled in supporting younger children.
          </p>
          <p className="aboutus__info-text">
            Our support ranges from tailored support for entrance examinations at 7+ and 11+, through to bespoke support for pupils with SEN needs.
          </p>
        </div>
      </div>
      <div className="support">
        <div className="aboutus__info">
          <h2 className="aboutus__info-title">Assessment and Feedback</h2>
          <h4 className="aboutus__info-subheading">
            Regular assessment, monitoring and individualised feedback for each student
          </h4>
          <p className="aboutus__info-text">
            We regularly monitor and assess our students to ensure progress is being made, and to identify how best to support individual students.
          </p>
          <p className="aboutus__info-text">
            We communicate and share long term plans with parents and carers to ensure clarity on how each session is used.
          </p>
        </div>
        <div className="aboutus__image">
          <img
            className="aboutus__image-service"
            src={require("../../images/exam.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
