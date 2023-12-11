import "./HomeView.css";
import { data } from '../data/data'
import Job from '../components/Job/Job'
import { useState } from "react";

function HomeView({ langue }: { langue: string }) {

  const [expProLeft, setExpProLeft] = useState('50%');
  const [formaLeft, setFormaLeft] = useState('150%');
  const [controlFormaOrExpProText, setControlFormaOrExpProText] = useState(0);

  const handleChevronClick = () => {
    // Mettez à jour les valeurs left en fonction de votre logique de transition
    setExpProLeft(expProLeft === '50%' ? '-50%' : '50%');
    setFormaLeft(formaLeft === '150%' ? '50%' : '150%');
    setControlFormaOrExpProText(controlFormaOrExpProText === 0 ? 1 : 0);

    console.log(expProLeft)
    console.log(formaLeft)
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
            <div id="chevrons-place">
              <button onClick={handleChevronClick}>{langue === "fr" ? (
                <>
                  {expProLeft === '50%' ? (
                    <p className="fontColor">Mon parcours scolaire</p>
                  ) : (
                    <p className="fontColor">Mes experiences professionnelles</p>
                  )}
                </>
              ) : (
                <>
                  {expProLeft === '50%' ? (
                    <p className="fontColor">My school career</p>
                  ) : (
                    <p className="fontColor">My professional experience</p>
                  )}
                </>
              )}</button>
            </div>
            <div className="div-parallelepiped">
              {langue === "fr" ? (
                <p className="text-parallelepiped" dangerouslySetInnerHTML={{ __html: data.fr["text-parallelepiped"][controlFormaOrExpProText % 2] }}></p>
              ) : (
                <p className="text-parallelepiped" dangerouslySetInnerHTML={{ __html: data.en["text-parallelepiped"][controlFormaOrExpProText % 2] }}></p>
              )}
              <img src="/work-svgrepo-com.svg" alt="" className="img-parallelepiped" />
            </div>
          </div>

          <div className="exp-pro-subsection-content" style={{ left: expProLeft }} >
            <div>

              {langue === "fr" ? (
                <div>
                  {
                    data.fr["job-articles"].map((job, index) => (
                      <Job job={job} langage={langue} key={index}></Job>
                    )
                    )
                  }
                </div>
              ) : (
                <div>
                  {
                    data.en["job-articles"].map((job, index) => (
                      <Job job={job} langage={langue} key={index}></Job>
                    )
                    )
                  }
                </div>
              )
              }

            </div>
          </div>

          <div className="forma-subsection-content" style={{ left: formaLeft }} >
            <div>

              {langue === "en" ? (
                <div>
                  {
                    data.fr["job-articles"].map((job, index) => (
                      <Job job={job} langage={langue} key={index}></Job>
                    )
                    )
                  }
                </div>
              ) : (
                <div>
                  {
                    data.en["job-articles"].map((job, index) => (
                      <Job job={job} langage={langue} key={index}></Job>
                    )
                    )
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
