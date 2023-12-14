import Header from "./components/header/Header.tsx";
import ContactView from "./views/ContactView.tsx"
import FeedView from "./views/FeedView.tsx";
import HomeView from "./views/HomeView.tsx";
import { useState} from 'react'
import { Routes, Route } from "react-router-dom";

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
      <Routes>
        <Route path="/" element={<HomeView langue={langue}/>} />
        <Route path="/feed" element={<FeedView langue={langue} />} />
        <Route path="/contact" element={<ContactView langue={langue} />} />
      </Routes>
      {/* <HomeView langue={langue}/> */}
    </div>
  );
}

export default App;
