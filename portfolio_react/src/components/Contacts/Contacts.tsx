function Contacts({ langue }: { langue: string }) {
  return (
    <div id="contacts-endpage">
      <div id="contacts-endpage-h1">
        <div id="like-section">
          {langue === "fr" ? (
            <h1 className="text-bolder">Me contacter</h1>
          ) : (
            <h1 className="text-bolder">Contact me</h1>
          )}
        </div>
        <div id="separator-endpage" />
        <div id="conventional-contacts">
          {langue === "fr" ? (
            <>
              <div>
                <span className="text-bolder">E-mail</span> :
                mathis.sportiello@gmail.com
              </div>
              <div>
                <span className="text-bolder">Téléphone</span> : 06.44.16.98.01
              </div>
              <div>
                <span className="text-bolder">Adresse</span> : 21 rue des
                Ecureuils, Annecy (74940), France
              </div>
            </>
          ) : (
            <>
              <div>
                <span className="text-bolder">E-mail</span> :
                mathis.sportiello@gmail.com
              </div>
              <div>
                <span className="text-bolder">Mobile phone</span> : +33
                6.44.16.98.01
              </div>
              <div>
                <span className="text-bolder">Address</span> : 21 rue des
                Ecureuils, Annecy (74940), France
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contacts;
