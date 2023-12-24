import { useEffect, useState } from "react";
import "./Formation.css";

interface FormationProps {
  forma: any;
  length: number;
  keyp: number;
}

function Formation({ forma, keyp, length }: FormationProps) {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Attach event listener for window resize
    window.addEventListener("resize", updateWindowWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  var leftRight = "row";
  var trans = "translate(-50px)";
  if (keyp % 2 === 0) {
    leftRight = "row";
    trans = "translate(-50px)";
  } else {
    leftRight = "row-reverse";
    trans = "translate(50px)";
  }

  return (
    <>
      <div
        className="flex-formation"
        style={{
          flexDirection: windowWidth > 1600 ? (leftRight as any) : "column",
        }}
      >
        <div className="forma-content">
          <h2 dangerouslySetInnerHTML={{ __html: forma[0] }}></h2>
          <div className="job">
            <h3 dangerouslySetInnerHTML={{ __html: forma[1] }}></h3>
            {forma[2].map((txt: any) => (
              <p dangerouslySetInnerHTML={{ __html: txt }}></p>
            ))}
          </div>
        </div>

        {windowWidth > 1600 ? (trans = trans) : (trans = "")}
        <div style={{ transform: trans }}>
          <p
            className="dates"
            style={{ transform: "scaleX(1.3)" }}
            dangerouslySetInnerHTML={{ __html: forma[3][0] }}
          ></p>
          <div
            style={{
              width: "70%",
              height: "1px",
              borderBottom: "1px solid #53195d",
              left: "50%",
              transform: "translate(-50%) rotate(-3deg)",
              position: "relative",
            }}
          />
          <p
            className="dates"
            style={{ transform: "translate(50px) scaleX(1.3)" }}
            dangerouslySetInnerHTML={{ __html: forma[3][1] }}
          ></p>
        </div>
      </div>

      {keyp == length - 1 ? (
        <></>
      ) : (
        <div
          style={{
            borderBottom: "1px",
            borderBottomColor: "#53195d38",
            borderBottomStyle: "dashed",
            marginBottom: "100px",
          }}
        />
      )}
    </>
  );
}

export default Formation;
