import "./background.css";

const Background = () => {
  return (
    <div className="background">
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="hero">
        <h1 className="hero__title">Leading Primary Tutors</h1>
        <p className="hero__info">
          Fully qualified teachers delivering bespoke educational support to
          pupils aged 4-11.
        </p>
        <button className="hero__btn contact__btn">Begin Your Journey</button>
        <svg class="arrows">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>
    </div>
  );
};

export default Background;
