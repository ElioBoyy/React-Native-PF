import "./HomeView.css";
import { data } from '../data/data'
import React, { useState } from 'react';

function HomeView({ langue }: { langue: string }) {

  const [buttonText, setButtonText] = useState("+");

  const handleClick = () => {
    setButtonText((prevText) => (prevText === "+" ? "-" : "+"));
  };
  
  return (
    <div>
      <section id="homeview-ms">
        <div id="mid">
          <h1 className="prenom-nom">Mathis</h1>
          <div id="separator_name" />
          <h1 className="prenom-nom">SPORTIELLO</h1>
        </div>
      </section>
      <section id="homeview-content">
        <div id="presentation">
          {langue === "fr" ? (
            <>
              <p dangerouslySetInnerHTML={{ __html: data.fr.presentation }}></p>
              <p dangerouslySetInnerHTML={{ __html: data.fr.presentationHL }}></p>
            </>
          ) : (
            <>
              <p dangerouslySetInnerHTML={{ __html: data.en.presentation }}></p>
              <p dangerouslySetInnerHTML={{ __html: data.en.presentationHL }}></p>
            </>
          )}
        </div>

        <div id="exp-pro">
          <div className="parallelepiped">
            <div className="div-parallelepiped">
              {langue === "fr" ? (
                <p className="text-parallelepiped" dangerouslySetInnerHTML={{ __html: data.fr["text-parallelepiped"] }}></p>
              ) : (
                <p className="text-parallelepiped" dangerouslySetInnerHTML={{ __html: data.en["text-parallelepiped"] }}></p>
              )}
              <img src="/work-svgrepo-com.svg" alt="" className="img-parallelepiped" />
            </div>
          </div>

          <div className="exp-pro-subsection-content">
            <div>

              {langue === "fr" ? (
                <div>
                  {
                    data.fr["job-articles"].map((job, index) => (
                      <article className="job-article" key={index}>
                        <div className="compagny">
                          <h3>{job[0]}</h3>
                          <a href={job[2]} target="_blank">
                            <img
                              src={job[1]}
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="job">
                          <p className="libelle-job">{job[3]}</p>
                          <p dangerouslySetInnerHTML={{ __html: job[4]}}></p>
                        </div>
                        <div></div>
                        <button className="open_more_infos" onClick={handleClick}>{buttonText}</button>
                      </article>
                    )
                    )
                  }
                </div>
              ) : (
                <div>
                  {
                    data.en["job-articles"].map((job, index) => (
                      <article className="job-article" key={index}>
                        <div className="compagny">
                          <h3>{job[0]}</h3>
                          <a href={job[2]} target="_blank">
                            <img
                              src={job[1]}
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="job">
                          <p className="libelle-job">{job[3]}</p>
                          <p dangerouslySetInnerHTML={{ __html: job[4]}}></p>
                        </div>
                        <div></div>
                        <button className="open_more_infos" onClick={handleClick}>{buttonText}</button>
                      </article>
                    ))
                  }
                </div>
              )
              }

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeView;
