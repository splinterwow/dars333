import "../Main/Main.css";
import pButton from '../../assets/Playbutton.svg'
import Group from '../../assets/Group.png'

function Main() {
  return (
    <div className="main__container">
      <span className="main_span">✈️ • Explore the wonderful indonesia!</span>
      <h1>
        Liburan & nikmati <br />
        <span>tempat baru </span>di <br /> indonesia ️️🏝
      </h1>
      <p>Destinize membuat kamu selalu update terkait tempat liburan <br /> baru di Indonesia dengan mengikuti perkembangan para <br /> influencer di sosial media ✨</p>
      <button className="main_btn">Mulai sekarang →</button>
      <img className="main_pb" src={pButton} alt="" /> <h4 className="main_h5">Putar Demo</h4>
      <img className="main_group" src={Group} alt="" />
    </div>
  );
}

export default Main;
