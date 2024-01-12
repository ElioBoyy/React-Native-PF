import { data } from "../../data/data";
import { ToggleLanguage } from "../ToggleLanguage/ToggleLanguage";
import "./Header.css";
import { useEffect, useState } from "react";
import MSPortfolio from "../../../public/ms.svg";

interface HeaderProps {
  toggleLangue: any;
  langue: string;
}

function Header({ toggleLangue, langue }: HeaderProps) {
  const [location, setLocation] = useState("about-me");
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [clickedState, setClickedState] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0); // Nouveau state pour stocker la valeur précédente du défilement

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Attach event listener for window resize
    window.addEventListener("resize", updateWindowWidth);

    const handleScroll = () => {
      // Mettez à jour la valeur précédente du défilement ici
      setPrevScrollPosition(scrollPosition);
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const handleClickHam = () => {
    setClickedState(clickedState ? false : true);
  };

  return (
    <header>
      {windowWidth >= 1200 ? (
        <>
          <div
            id="header-bg"
            style={{
              top: scrollPosition > prevScrollPosition ? "-80px" : "0px",
            }}
          />
          <div
            id="header"
            style={{
              top: scrollPosition > prevScrollPosition ? "-80px" : "0px",
            }}
          >
            <img
              src={MSPortfolio}
              alt="MS Logo"
              id="header-logo-ms"
              className="header-disp"
            />
            <div>
              {langue === "fr" ? (
                <div id="header-btns-div" className="header-disp">
                  <a
                    href="/"
                    className="header-btns-btn underline-on-hover"
                    dangerouslySetInnerHTML={{ __html: data.fr["header"][0] }}
                  ></a>

                  <a
                    href="/feed"
                    className="header-btns-btn underline-on-hover"
                    dangerouslySetInnerHTML={{ __html: data.fr["header"][1] }}
                  ></a>

                  <a
                    href="/contact"
                    className="header-btns-btn underline-on-hover"
                    dangerouslySetInnerHTML={{ __html: data.fr["header"][2] }}
                  ></a>
                  <ToggleLanguage toggleLangue={toggleLangue} langue={langue} />
                </div>
              ) : (
                <div id="header-btns-div" className="header-disp">
                  <a
                    href="/"
                    className="header-btns-btn underline-on-hover"
                    dangerouslySetInnerHTML={{ __html: data.en["header"][0] }}
                  ></a>

                  <a
                    href="/feed"
                    className="header-btns-btn underline-on-hover"
                    dangerouslySetInnerHTML={{ __html: data.en["header"][1] }}
                  ></a>

                  <a
                    href="/contact"
                    className="header-btns-btn underline-on-hover"
                    dangerouslySetInnerHTML={{ __html: data.en["header"][2] }}
                  ></a>
                  <ToggleLanguage toggleLangue={toggleLangue} langue={langue} />
                </div>
              )}
              <div
                id="selected-btn-dot"
                className={
                  location === "about-me"
                    ? "about-me"
                    : location === "feed"
                    ? "feed"
                    : "contact"
                }
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="hamMenu" onClick={handleClickHam}>
            <div
              className="hamSlice"
              style={{
                transform: clickedState
                  ? "rotate(45deg) translate(11px, 11px)"
                  : "",
              }}
            />
            <div
              className="hamSlice"
              style={{ opacity: clickedState ? 0 : 1 }}
            />
            <div
              className="hamSlice"
              style={{
                transform: clickedState
                  ? "rotate(-45deg) translate(12px, -13px)"
                  : "",
              }}
            />
          </div>

          <div
            className="menu"
            style={{ right: clickedState ? "0px" : "-402px" }}
          >
            {langue === "fr" ? (
              <>
                <a
                  href="/"
                  className="header-btns-btn underline-on-hover"
                  dangerouslySetInnerHTML={{ __html: data.fr["header"][0] }}
                  onClick={() => setLocation("about")}
                ></a>
                <a
                  href="/feed"
                  className="header-btns-btn underline-on-hover"
                  dangerouslySetInnerHTML={{ __html: data.fr["header"][1] }}
                  onClick={() => setLocation("feed")}
                ></a>
                <a
                  href="/contact"
                  className="header-btns-btn underline-on-hover"
                  dangerouslySetInnerHTML={{ __html: data.fr["header"][2] }}
                  onClick={() => setLocation("contact")}
                ></a>
                <ToggleLanguage toggleLangue={toggleLangue} langue={langue} />
              </>
            ) : (
              <>
                <a
                  href="/"
                  className="header-btns-btn underline-on-hover"
                  dangerouslySetInnerHTML={{ __html: data.en["header"][0] }}
                  onClick={() => setLocation("about")}
                ></a>
                <a
                  href="/feed"
                  className="header-btns-btn underline-on-hover"
                  dangerouslySetInnerHTML={{ __html: data.en["header"][1] }}
                  onClick={() => setLocation("feed")}
                ></a>
                <a
                  href="/contact"
                  className="header-btns-btn underline-on-hover"
                  dangerouslySetInnerHTML={{ __html: data.en["header"][2] }}
                  onClick={() => setLocation("contact")}
                ></a>
                <ToggleLanguage toggleLangue={toggleLangue} langue={langue} />
              </>
            )}
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
