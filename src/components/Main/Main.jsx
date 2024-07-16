import "../Main/Main.css";
import pButton from "../../assets/Playbutton.svg";
import image1 from '../../assets/image1.svg'
import image2 from '../../assets/image2.svg'
import image3 from '../../assets/image3.svg'
import image4 from '../../assets/image4.svg'
import image5 from '../../assets/image5.svg'
import rasm1 from '../../assets/rasm1.png'
import rasm2 from '../../assets/rasm2.png'
import rasm3 from '../../assets/rasm3.png'
import rasm4 from '../../assets/rasm4.png'
import Group from "../../assets/Group.png";

function Main() {
  return (
    <div className="main__container">
      <span className="main_span">✈️ • Explore the wonderful indonesia!</span>
      <h1>
        Liburan & nikmati <br />
        <span>tempat baru </span>di <br /> indonesia ️️🏝
      </h1>
      <p>
        Destinize membuat kamu selalu update terkait tempat liburan <br /> baru
        di Indonesia dengan mengikuti perkembangan para <br /> influencer di
        sosial media ✨
      </p>
      <button className="main_btn">Mulai sekarang →</button>
      <img className="main_pb" src={pButton} alt="" />{" "}
      <h4 className="main_h5">Putar Demo</h4>
      <img className="main_group" src={Group} alt="" />
      <div className="image">
        <img className="image1" src={image1} alt="" />
        <img className="image2" src={image2} alt="" />
        <img className="image3" src={image3} alt="" />
        <img className="image4" src={image4} alt="" />
        <img className="image5" src={image5} alt="" />
      </div>
      <div className="hero">
        <span className="hero_span">DESTINASI FAVORIT</span>
        <h2>✈️ • Temukan Destinasi Favoritmu </h2> 

        <img className="rasim1" src={rasm1} alt="" />
        <img className="rasim2" src={rasm2} alt="" />
        <img className="rasim3" src={rasm3} alt="" />
        <img className="rasim4" src={rasm4} alt="" />
        
      </div>
    </div>
  );
}

export default Main;
