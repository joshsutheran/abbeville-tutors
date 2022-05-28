import "./background.css";

const Background = () => {
  const slogan = `Leading Primary Tuition.`

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
        <h1 className="hero__title">{slogan}</h1>
        <p className="hero__info">Fully Qualified Teachers Delivering Bespoke Educational Support To Primary Aged Pupils.</p>
        <button className="hero__btn contact__btn">Begin Your Journey</button>
      </div>
    </div>
  );
};

export default Background;
