import "../2-hero/hero.css";
function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section flex">
        <div className="W-I flex">
          <a target="_blank" href="">
            <div className="icon-instagram" />
          </a>
          <a target="_blank" href="">
            <div className="icon-whatsapp" />
          </a>
        </div>

        <div>
          <img className="rog" src="./rog-g16.png" alt="rog" />
        </div>
      </div>
      <div className="right-section ">
        <p>
          أفضل أسعار اللابتوب
          <br />
          في دمشق
        </p>
      </div>
    </section>
  );
}

export default Hero;
