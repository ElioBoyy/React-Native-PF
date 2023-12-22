import { useState } from "react";
import "./ContactView.css";
import LinkedinLogo from "../assets/iconmonstr-linkedin-3.svg";
import GithubLogo from "../assets/iconmonstr-github-3.svg";
import InstaLogo from "../assets/iconmonstr-instagram-11.svg";

function ContactView({ langue }: { langue: string }) {
  const [clickedSocial, setClickedSocial] = useState("linkedin");

  const handleSocialClick = (state: string) => {
    setClickedSocial(state);
  };

  return (
    <div id="contact-view">
      {langue === "fr" ? <p>FR</p> : <p>EN</p>}
      <section id="social-network">
        <div id="social-network-txtzone">
          <h1
            id="linkedin"
            onClick={() => handleSocialClick("linkedin")}
            className={clickedSocial === "linkedin" ? "active" : ""}
          >
            Linkedin
          </h1>
          <h1
            id="github"
            onClick={() => handleSocialClick("github")}
            className={clickedSocial === "github" ? "active" : ""}
          >
            GitHub
          </h1>
          <h1
            id="instagram"
            onClick={() => handleSocialClick("instagram")}
            className={clickedSocial === "instagram" ? "active" : ""}
          >
            Instagram
          </h1>
        </div>
        <div
          style={{
            flex: 0,
            position: "relative",
            height: "100%",
            width: "0px",
            border: "1px solid black",
            marginLeft: "80px",
            marginRight: "80px",
          }}
        />
        <div className="social-network-logos">
          <img
            src={LinkedinLogo}
            alt=""
            style={{
              transform:
                clickedSocial === "linkedin"
                  ? "translateY(0px)"
                  : "translateY(-300px)",
            }}
          />
          <img
            src={GithubLogo}
            alt=""
            style={{
              transform:
                clickedSocial === "github"
                  ? "translateY(-300px)"
                  : clickedSocial === "instagram"
                  ? "translateY(-600px)"
                  : "translateY(0px)",
            }}
          />
          <img
            src={InstaLogo}
            alt=""
            style={{
              transform:
                clickedSocial === "instagram"
                  ? "translateY(-600px)"
                  : "translateY(-300px)",
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default ContactView;
