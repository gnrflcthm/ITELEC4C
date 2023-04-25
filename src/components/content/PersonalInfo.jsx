import React from "react";
import envelope from "../../assets/icons/envelope-solid.svg";
import phone from "../../assets/icons/phone-solid.svg";
import globe from "../../assets/icons/globe-solid.svg";
import cake from "../../assets/icons/cake-candles-solid.svg";
import fan from "../../assets/icons/fan-solid.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";

function PersonalInfo() {
  return (
    <div className="page-content personal-info-container">
      <div className="avatar">
        <img
          src="https://media.licdn.com/dms/image/C5603AQGOi52pOOccvg/profile-displayphoto-shrink_800_800/0/1631927528044?e=1681344000&v=beta&t=R9NYW9DOSgLqn6Bjo1D_qGzEf7KaTFp_RWAlaxpd3dA"
          alt="display photo"
        />
      </div>
      <div className="info">
        <h2 className="name">Gian Rafael C. Thiam</h2>
        <div className="contact">
          <div className="d-row">
            <img src={envelope} alt="email" className="icon" />
            <h3>gianthiam126@gmail.com</h3>
          </div>
          <div className="d-row">
            <img src={phone} alt="phone" className="icon" />
            <h3>+63 918 316 2131</h3>
          </div>
          <div className="d-row">
            <img src={globe} alt="website" className="icon" />
            <h3>
              <a href="https://gian-thiam.vercel.app/">
                https://gian-thiam.vercel.app/
              </a>
            </h3>
          </div>
        </div>
        <div className="extra">
          <div className="d-row">
            <img src={cake} alt="birthday" className="icon" />
            <h3>01/26/2001</h3>
          </div>
          <div className="d-row">
            <img src={fan} alt="birthday" className="icon" />
            <h3>1 or 2</h3>
          </div>
        </div>
        <div className="socials">
            <a href="https://www.linkedin.com/in/gian-rafael-thiam-a0237a221/" className="social-icon"><img src={linkedin} alt="LinkedIn" /></a>
            <a href="https://github.com/gnrflcthm" className="social-icon"><img src={github} alt="GitHub" /></a>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
