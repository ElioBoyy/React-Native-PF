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
          <div className="parallelepiped">
            <div className="div-parallelepiped">
              <p className="text-parallelepiped">
                Mes experiences professionnelles
              </p>
              <img src="/work-svgrepo-com.svg" alt="" className="img-parallelepiped" />
            </div>
          </div>

          <div className="exp-pro-subsection-content">
            <div id="right-exp-pro"/>
            <div>
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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aperiam laborum magni debitis iure dolorem sed expedita temporibus? Fugiat rem, optio quae autem est temporibus enim quos praesentium sunt magni perferendis deleniti libero dolor reprehenderit soluta? Aperiam velit quidem, expedita autem commodi deserunt beatae, eum perferendis soluta iure odio debitis ab asperiores, amet reprehenderit natus laboriosam. Quis eos quos nemo incidunt impedit temporibus culpa ab ad. Minima et saepe dolore ullam natus molestias praesentium, tenetur culpa, modi velit accusantium maiores odio, voluptate repellat repudiandae! Ipsam assumenda soluta facere culpa nesciunt. Reiciendis eaque eius unde perspiciatis voluptatem totam, qui, similique et exercitationem corrupti tempora autem cumque facere dicta quisquam, ipsam nihil. Dolor iste perspiciatis illum? Facilis corrupti officiis in eveniet eius earum quia obcaecati, iure inventore aperiam illum blanditiis dicta incidunt laborum, quisquam magni eum necessitatibus fugiat harum voluptates molestias debitis praesentium? Sequi mollitia voluptates non repellendus reprehenderit incidunt perspiciatis, enim itaque tempora ullam nisi amet fuga fugit maiores ipsum harum est. Nostrum id animi voluptate incidunt ullam tempore ut provident repellendus architecto odit vel laborum omnis, aperiam accusamus temporibus soluta libero recusandae eius! Numquam minima praesentium error repellendus, perspiciatis, quam nihil, necessitatibus explicabo animi amet dolore quasi! Consequatur, non corrupti?</p>
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
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id perspiciatis iste alias, libero nostrum repudiandae suscipit ullam expedita doloremque veniam laudantium sapiente! Accusantium necessitatibus reiciendis, aliquam, neque nemo quaerat dolore laborum obcaecati natus repellat iusto nisi ducimus quidem molestias tempora alias nihil magni? Culpa hic placeat beatae ea quas, ducimus voluptas itaque harum illum velit cumque consequatur provident, magnam aspernatur eaque eos, maiores ad. Consequatur doloribus sint velit saepe cum nisi sit possimus. Ducimus sint vel eligendi fuga id aperiam, nihil adipisci quis eius. Obcaecati sed dolorem accusantium distinctio?</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
