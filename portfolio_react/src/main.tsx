import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./fonts/Poppins/Poppins-Regular.ttf";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


// https://iconmonstr.com/ -> SVG