import { useEffect } from "react";
import "./ContactView.css";
import LinkedinLogo from "../assets/iconmonstr-linkedin-3.svg"
import GithubLogo from "../assets/iconmonstr-github-3.svg"
import InstaLogo from "../assets/iconmonstr-instagram-11.svg"

function ContactView({ langue }: { langue: string }) {

    useEffect(() => {
        var Social = document.getElementById('social-network');
        var SocialText = document.getElementById('social-network-txtzone');
        var Logos = document.getElementsByClassName('social-network-logos');
        var SocialTextWidth = 0;

        if (SocialText) {
            SocialTextWidth = SocialText.offsetWidth;
        } else {
            console.error('Element not found');
        }

        if (Logos.length > 0) {
            const socialWidth = window.innerWidth;
            for(var i = 1; i <= Logos.length ; i++){
                const firstLogo = Logos[0] as HTMLElement;
                firstLogo.style.width = (socialWidth * .8 - 82 - SocialTextWidth).toString();
            }
          } else {
            console.error('Logo element not found');
          }
    }, []);

    

    return (
        <div id="contact-view">
            <section id="social-network">
                <div id="social-network-txtzone">
                    <h1>Linkedin</h1>
                    <h1>GitHub</h1>
                    <h1>Instagram</h1>
                </div>
                <div style={{ flex:0, position:"relative", height:"100%", width:"0px", border:"1px solid black", marginLeft:"80px", marginRight:"80px"}} />
                <div className="social-network-logos">
                    <img src={LinkedinLogo} alt="" />
                    <img src={GithubLogo} alt="" />
                    <img src={InstaLogo} alt="" />
                </div>
            </section>
        </div>
    );
}

export default ContactView;
