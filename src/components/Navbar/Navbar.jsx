import React from "react";
import Logo from "../../assets/Logo.svg";
import { MdLanguage } from "react-icons/md";
import locatI from "../../assets/locatsaI.svg";
import searchIcon from "../../assets/lang-logo.svg";
import { VscChevronDown } from "react-icons/vsc";
import buttonsI from "../../assets/Buttons.svg";
import { CiSearch } from "react-icons/ci";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="container">
        <img className="logo" src={Logo} alt="Logo" />
        <CiSearch className="search-icon" />
        <input
          className="search_input"
          type="text"
          placeholder="Cari apapun disini..."
        />
        <MdLanguage className="lang-icon" />
        <span className="lang_span"> Bahasa Indonesia</span>
        <img className="search-logo" src={searchIcon} alt="" />
        <img className="locat-i" src={locatI} alt="" />
        <h6>Lokasi</h6>
        <h3>Indonesia, Yogyakarta</h3>
        <img className="search-logo2" src={searchIcon} alt="" /> <br />
        <div className="hrdiv">
          <hr />
        </div>
      </div>

      <hr className="hr" />

      <div className="header">
        <h5>Gunung</h5>
        <VscChevronDown className="chevron" />

        <h5>Pantai</h5>
        <VscChevronDown className="chevron" />

        <h5>Kuliner</h5>
        <VscChevronDown className="chevron" />

        <h5>Romantis</h5>
        <VscChevronDown className="chevron" />

        <h5>Sejarah</h5>
        <VscChevronDown className="chevron" />

        <h5>Edukasi</h5>
        <VscChevronDown className="chevron" />

        <h5>Romantis</h5>
        <VscChevronDown className="chevron" />

        <h5>Alam</h5>
        <VscChevronDown className="chevron" />

        <img className="img-but" src={buttonsI} alt="" />
      </div>

      
    </>
  );
}

export default Navbar;
