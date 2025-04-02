import React from "react";
import gsap from "gsap";

export default class Splash extends React.Component {
  componentDidMount() {
    var tml = gsap.timeline();

    if (window.innerWidth > 1024) {
      tml.to(".splash-screen .ft-logo-top", {
        y: "-45%",
        opacity: 1,
        duration: 0.7,
      })
        .to(
          ".splash-screen .ft-logo-btm",
          {
            y: "100%",
            opacity: 1,
            duration: 0.7,
          },
          "<"
        )
        .to(".splash-screen", {
          opacity: 0,
          display: "none",
          duration: 1,
          delay: 1,
        });
    } else {
      tml.to(".splash-screen .ft-logo-top", {
        y: "-45%",
        opacity: 1,
        duration: 1,
      })
        .to(
          ".splash-screen .ft-logo-btm",
          {
            y: "-150%",
            opacity: 1,
            duration: 1,
          },
          "<"
        )
        .to(".splash-screen", {
          opacity: 0,
          display: "none",
          duration: 1.7,
        });
    }
  }

  render() {
    return <>
    
    <div className="splash-screen">
        <div className="splash-box">
        <img src="images/footer-logo-top.png" className="img-fluid ft-logo-top" alt="logo"/>
        <img src="images/footer-logo-btm.png" className="img-fluid ft-logo-btm" alt="logo"/>
        </div>
    </div>
    
    </>;
  }
}
