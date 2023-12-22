import "./FeedView.css";

function FeedView({ langue }: { langue: string }) {
  return <div>{langue === "fr" ? <p>FR</p> : <p>EN</p>}</div>;
}

export default FeedView;
