import "./FeedView.css";
import { data } from "../data/data";

function FeedView({ langue }: { langue: string }) {
  return <>
    <div id="FeedViewCSS">
      {langue === 'fr' ? (
      <article id="gym" style={{flexDirection: "row-reverse"}}>
        <img src={data.fr["feed"][0][0]} style={{margin: '-100px'}}></img>
        <div className="FeedViewTxt">
          <h1 dangerouslySetInnerHTML={{ __html: data.fr["feed"][0][1] }}></h1>
          <p dangerouslySetInnerHTML={{ __html: data.fr["feed"][0][2] }}></p>
        </div>
      </article>
      <article id="plane">
        <video src={data.fr["feed"][1][0]} autoPlay muted loop></video>
        <div className="FeedViewTxt">
          <h1 dangerouslySetInnerHTML={{ __html: data.fr["feed"][1][1] }}></h1>
          <p dangerouslySetInnerHTML={{ __html: data.fr["feed"][1][2] }}></p>
        </div>
      </article>
      <article id="fishing" style={{flexDirection: "row-reverse"}}>
        <img src="" alt="" />
        <div className="FeedViewTxt">
          <h1 dangerouslySetInnerHTML={{ __html: data.fr["feed"][2][1] }}></h1>
          <p dangerouslySetInnerHTML={{ __html: data.fr["feed"][2][2] }}></p>
        </div>
      </article> ) : (
          <article id="gym" style={{flexDirection: "row-reverse"}}>
        <img src={data.en["feed"][0][0]} style={{margin: '-100px'}}></img>
        <div className="FeedViewTxt">
          <h1 dangerouslySetInnerHTML={{ __html: data.en["feed"][0][1] }}></h1>
          <p dangerouslySetInnerHTML={{ __html: data.en["feed"][0][2] }}></p>
        </div>
      </article>
      <article id="plane">
        <video src={data.en["feed"][1][0]} autoPlay muted loop></video>
        <div className="FeedViewTxt">
          <h1 dangerouslySetInnerHTML={{ __html: data.en["feed"][1][1] }}></h1>
          <p dangerouslySetInnerHTML={{ __html: data.en["feed"][1][2] }}></p>
        </div>
      </article> )}
    </div>
  </>
}

export default FeedView;
