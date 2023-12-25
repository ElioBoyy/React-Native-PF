import "./ContactView.css";
import React, { useState, useEffect } from "react";
import LinkedinLogo from "../assets/iconmonstr-linkedin-3.svg";
import GithubLogo from "../assets/iconmonstr-github-3.svg";
import InstaLogo from "../assets/iconmonstr-instagram-11.svg";
import Heart from "../../public/heart.svg";
import HeartFilled from "../../public/heartFilled.svg";
import { data } from "../data/data";

function ContactView({ langue }: { langue: string }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSvg1, setIsSvg1] = useState(true);

  const vhToPixels = (vh: number) => window.innerHeight * vh;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleComponentClick = () => {
    setIsSvg1((prevIsSvg1) => !prevIsSvg1);

    if (isSvg1) {
      data.likeCounter["like"] += 1;
    } else {
      data.likeCounter["like"] -= 1;
    }
  };

  const style: React.CSSProperties = {
    position: scrollPosition >= vhToPixels(2) ? "absolute" : "fixed",
    top: scrollPosition >= vhToPixels(2) ? vhToPixels(2) : "0px",
  };

  return (
    <div id="contact-view">
      <div className="socials" style={style}>
        <div className="socials-txt">
          <a href="#Linkedin" className="underline-on-hover">
            Linkedin
          </a>
          <a href="#GitHub" className="underline-on-hover">
            GitHub
          </a>
          <a href="#Instagram" className="underline-on-hover">
            Instagram
          </a>
        </div>
        <div />
      </div>
      <article className="socialLogos" id="Linkedin">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mathis-sportiello-3a19091a1/"
        >
          <img src={LinkedinLogo} alt="LinkedinLogo" />
        </a>
        <p>@ Mathis Sportiello</p>
      </article>
      <article className="socialLogos" id="GitHub">
        <a target="_blank" href="https://github.com/ElioBoyy">
          <img src={GithubLogo} alt="GitHubLogo" />
        </a>
        <p>@ ElioBoyy</p>
      </article>
      <article className="socialLogos" id="Instagram">
        <a
          target="_blank"
          href="https://www.instagram.com/mathissportiello/?hl=fr"
        >
          <img src={InstaLogo} alt="InstagramLogo" />
        </a>
        <p>@ mathissportiello</p>
      </article>

      <div id="contacts-endpage">
        <h1>Me contacter</h1>
        <div id="contacts-endpage-h1">
          <div id="conventional-contacts">
            {langue === "fr" ? (
              <>
                <div>E-mail : mathis.sportiello@gmail.com</div>
                <div>Téléphone : 06.44.16.98.01</div>
                <div>
                  Adresse : 21 rue des Ecureuils, Annecy (74940), France
                </div>
              </>
            ) : (
              <>
                <div>E-mail : mathis.sportiello@gmail.com</div>
                <div>Mobile phone : +33 6.44.16.98.01</div>
                <div>
                  Address : 21 rue des Ecureuils, Annecy (74940), France
                </div>
              </>
            )}
          </div>
          <div id="separator-endpage" />
          <div id="like-section">
            <img
              src={isSvg1 ? Heart : HeartFilled}
              alt=""
              onClick={handleComponentClick}
            />
            {langue === "fr" ? (
              <h1>Likes totaux : {data.likeCounter["like"]}</h1>
            ) : (
              <h1>Total likes : {data.likeCounter["like"]}</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactView;
