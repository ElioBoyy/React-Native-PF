import "./HomeView.css";

function HomePage() {
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
          <p>
            <span className="text-bolder">Développeur étudiant</span> en 3e
            année de BUT informatique, passionné par la création de{" "}
            <span className="text-bolder">sites web</span> et d'
            <span className="text-bolder">applications</span>, prêt à créer le
          </p>
          <p id="presentation-futur-numerique">Futur Numérique</p>
        </div>

        <div id="exp-pro">
          <p className="exp-pro-subsection-title">
            Mes experiences professionnelles
          </p>
          <div className="exp-pro-subsection-content">
            <article className="job-article">
              <div className="compagny">
                <h3>Allegro Microsystems</h3>
                <button>
                  <img
                    src="../../public/Allegro_MicroSystems_logo.svg"
                    alt=""
                  />
                </button>
              </div>
              <div className="job">
                <p className="libelle-job">
                  Stagiaire développeur d'applications
                </p>
                <p>Description du poste</p>
              </div>
            </article>
            <article className="job-article">
              <div className="compagny">
                <h3>Allegro Microsystems</h3>
                <button>
                  <img
                    src="../../public/Allegro_MicroSystems_logo.svg"
                    alt=""
                  />
                </button>
              </div>
              <div className="job">
                <p className="libelle-job">
                  Stagiaire développeur d'applications
                </p>
                <p>Description du poste</p>
              </div>
            </article>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </div>
  );
}

export default HomePage;
