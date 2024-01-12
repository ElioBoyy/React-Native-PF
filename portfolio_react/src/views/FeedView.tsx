import "./FeedView.css";
import { data } from "../data/data";
import planeImg from "../../public/200_00_0-removebg-preview.png";
import Contacts from "../components/Contacts/Contacts";

function FeedView({ langue }: { langue: string }) {
  return (
    <>
      <div id="FeedViewCSS">
        {langue === "fr" ? (
          <>
            <article id="gym">
              <img
                src={data.fr["feed"][0][0]}
                style={{ margin: "-100px" }}
              ></img>
              <div className="FeedViewTxt">
                <h1
                  dangerouslySetInnerHTML={{ __html: data.fr["feed"][0][1] }}
                ></h1>
                <p
                  dangerouslySetInnerHTML={{ __html: data.fr["feed"][0][2] }}
                ></p>
              </div>
            </article>
            <article id="plane">
              <img src={planeImg} alt="" />
              <div className="FeedViewTxt">
                <h1
                  dangerouslySetInnerHTML={{ __html: data.fr["feed"][1][1] }}
                ></h1>
                <p
                  dangerouslySetInnerHTML={{ __html: data.fr["feed"][1][2] }}
                ></p>
              </div>
            </article>
            <article id="fishing">
              <img src="" alt="" />
              <div className="FeedViewTxt">
                <h1
                  dangerouslySetInnerHTML={{ __html: data.fr["feed"][2][1] }}
                ></h1>
                <p
                  dangerouslySetInnerHTML={{ __html: data.fr["feed"][2][2] }}
                ></p>
              </div>
            </article>
          </>
        ) : (
          <>
            <article id="gym" style={{ flexDirection: "row-reverse" }}>
              <img
                src={data.en["feed"][0][0]}
                style={{ margin: "-100px" }}
              ></img>
              <div className="FeedViewTxt">
                <h1
                  dangerouslySetInnerHTML={{ __html: data.en["feed"][0][1] }}
                ></h1>
                <p
                  dangerouslySetInnerHTML={{ __html: data.en["feed"][0][2] }}
                ></p>
              </div>
            </article>
            <article id="plane">
              <video src="planeImg" autoPlay muted loop></video>
              <div className="FeedViewTxt">
                <h1
                  dangerouslySetInnerHTML={{ __html: data.en["feed"][1][1] }}
                ></h1>
                <p
                  dangerouslySetInnerHTML={{ __html: data.en["feed"][1][2] }}
                ></p>
              </div>
            </article>
            <article id="fishing" style={{ flexDirection: "row-reverse" }}>
              <img src="" alt="" />
              <div className="FeedViewTxt">
                <h1
                  dangerouslySetInnerHTML={{ __html: data.en["feed"][2][1] }}
                ></h1>
                <p
                  dangerouslySetInnerHTML={{ __html: data.en["feed"][2][2] }}
                ></p>
              </div>
            </article>
          </>
        )}
      </div>
      <Contacts langue={langue}></Contacts>
    </>
  );
}

export default FeedView;
