import Header from "./components/header/Header.tsx";
import HomeView from "./views/HomeView.tsx";
import { useState} from 'react'

function App() {

  const [langue, setLangue] = useState("fr")

  const toggleLangue = () => {
    if (langue === "fr") {
      setLangue("en")
    } else {
      setLangue("fr")
    }
  }

  return (
    <div>
      <Header toggleLangue={toggleLangue} langue={langue} />
      <HomeView langue={langue}/>
    </div>
  );
}

export default App;
