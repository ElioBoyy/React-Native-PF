import "./HomeView.css";
import { data } from '../data/data'
import Job from '../components/Job/Job'
import Formation from "../components/Formation/Formation";


function HomeView({ langue }: { langue: string }) {

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
              <img src="../../public/chevron-left.svg" alt="" className="chevron-img" />
              <img src="../../public/chevron-right.svg" alt="" className="chevron-img" />
            </div>
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
