import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./blueReality.jpeg" alt="" width={200} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them
          </span>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            604,Airen Height,Opposite-C21Mall
          </span>

          <div className="flexCenter f-menu">
            <div className="flexCenter iccons">
              <span>
                <a href="">
                  <FaFacebook size={40}/>
                </a>
              </span>
              <span>
                <a href="">
                  <FaInstagram size={40}/>
                </a>
              </span>
              <span>
                <a href="">
                  <FaLinkedin size={40}/>
                </a>
              </span>
              <span>
                <a href="">
                  <FaTwitter size={40} />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
