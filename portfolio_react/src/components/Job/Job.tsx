import { useState } from "react";
import "./Job.css";
import { urlRegex } from "../../data/techno";

interface JobProps {
  job: any;
  langage: any;
}

function Job({ job, langage }: JobProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const [buttonText, setButtonText] = useState("+");
  const handleClick = () => {
    invIsExpanded();
    setButtonText((prevText) => (prevText === "+" ? "-" : "+"));
  };

  const invIsExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  const regexDrive: RegExp = /^(?!https?:\/\/drive.google.com\/).+/;

  return (
    <article className="job-article">
      <div className="compagny">
        <h2>{job[0]}</h2>
        <a href={job[2]} target="_blank">
          <img src={job[1]} alt="" />
        </a>
      </div>
      <div className="job">
        <h2 className="libelle-job">{job[3]}</h2>
        <p dangerouslySetInnerHTML={{ __html: job[4] }}></p>
      </div>
      <div className={`content ${isExpanded ? "active" : ""}`}>
        {job[5].length > 0 && (
          <>
            {langage === "fr" ? (
              <h2>Compétences techniques</h2>
            ) : (
              <h2>Hard skills</h2>
            )}
            <div className="flex-skills">
              {job[5].map((techno: string) =>
                urlRegex.test(techno) ? (
                  <p
                    className="p_badges"
                    dangerouslySetInnerHTML={{ __html: techno }}
                  ></p>
                ) : (
                  <img
                    src={techno}
                    alt=""
                    className="github_badges"
                    key={techno}
                  />
                )
              )}
            </div>
          </>
        )}

        {job[6].length > 0 && (
          <>
            {langage === "fr" ? (
              <h2>Compétences générales</h2>
            ) : (
              <h2>Soft skills</h2>
            )}
            <div className="flex-skills">
              {job[6].map((techno: string) =>
                urlRegex.test(techno) ? (
                  <p
                    className="p_badges"
                    dangerouslySetInnerHTML={{ __html: techno }}
                  ></p>
                ) : (
                  <img
                    src={techno}
                    alt=""
                    className="github_badges"
                    key={techno}
                  />
                )
              )}
            </div>
          </>
        )}

        {job[7] && job[7].length > 0 && (
          <>
            {langage === "fr" ? <h2>Pour compléter</h2> : <h2>To complete</h2>}
            <div className="flex-skills">
              {job[7].map((techno: string) =>
                urlRegex.test(techno) ? (
                  <p
                    className="p_badges"
                    dangerouslySetInnerHTML={{ __html: techno }}
                  ></p>
                ) : (
                  <a href={techno} target="_blank" key={techno}>
                    {regexDrive.test(techno) ? (
                      langage === "fr" ? (
                        <p>Visiter le repo GitHub</p>
                      ) : (
                        <p>Visit the GitHub repo</p>
                      )
                    ) : langage === "fr" ? (
                      <p>Télécharger ma lettre de recommandation</p>
                    ) : (
                      <p>Download my reference letter</p>
                    )}
                  </a>
                )
              )}
            </div>
          </>
        )}
      </div>
      <button className="open_more_infos" onClick={handleClick}>
        {buttonText}
      </button>
    </article>
  );
}

export default Job;
