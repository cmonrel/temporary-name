/**
 * NavBar Component
 *
 * This component represents the navigation bar for the application.
 *
 * @module components/NavBar/NavBar
 */

import { useLocation, useNavigate } from "react-router";
import { useTheme } from "../../theme/ThemeContext"; 

import "./NavBar.css";

/**
 * The navigation bar component.
 *
 * This component renders the navigation bar for the application. It
 * includes a logo, links to the different pages, a notifications dropdown
 * and a logout button.
 *
 * @returns {ReactElement} A React element representing the navigation bar.
 */
export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {theme, setTheme} = useTheme();

  const currentPath = location.pathname;

  return (
    <>
      <div className="navbar">
        <div className="navbar-inner">
          <div className="navbar-top">
            <span className="navbar-logo">
              {/** TODO: Poner el tamaño correctamente */}
              <img
                onClick={() => navigate("/")}
                src="/Logo_Violeta.PNG"
                alt="Logo"
                style={{ width: "30px", height: "30px", objectFit: "contain", cursor: "pointer" }}
              />
              &nbsp;
            </span>
          </div>

          <div className="navbar-menu">
            <button
              onClick={() => navigate("/character-creation")}
              className={ `nav-btn ${currentPath === "/character-creation" ? "is-active" : "" }` }
            >
              <span className="nav-icon"></span>
              &nbsp; Character creation
            </button>

            <button
              onClick={() => navigate("/checks")}
              className={ `nav-btn ${currentPath === "/checks" ? "is-active" : "" }` }
            >
              <span className="nav-icon"></span>
              &nbsp; Checks
            </button>

            <button
              onClick={() => navigate("/items-influence")}
              className={ `nav-btn ${currentPath === "/items-influence" ? "is-active" : "" }` }
            >
              <span className="nav-icon"></span>
              &nbsp; Items and Influence
            </button>

            <button
              onClick={() => navigate("/combat")}
              className={ `nav-btn ${currentPath === "/combat" ? "is-active" : "" }` }
            >
              <span className="nav-icon"></span>
              &nbsp; Combat
            </button>

            <button
              onClick={() => navigate("/wounds-healing-sanity")}
              className={ `nav-btn ${currentPath === "/wounds-healing-sanity" ? "is-active" : "" }` }
            >
              <span className="nav-icon"></span>
              &nbsp; Wounds, Healing and Sanity
            </button>

            <button
              onClick={() => navigate("/arguments")}
              className={ `nav-btn ${currentPath === "/arguments" ? "is-active" : "" }` }
            >
              <span className="nav-icon"></span>
              &nbsp; Arguments
            </button>

            <button
              onClick={() => navigate("/opponents")}
              className={ `nav-btn ${currentPath === "/opponents" ? "is-active" : "" }` }
            >
              <span className="nav-icon"></span>
              &nbsp; Opponents
            </button>

            <button
              onClick={() => navigate("/crafting")}
              className={ `nav-btn ${currentPath === "/crafting" ? "is-active" : "" }` }
            >
              <span className="nav-icon"></span>
              &nbsp; Crafting
            </button>

            <button
              onClick={() => navigate("/magic")}
              className={ `nav-btn ${currentPath === "/magic" ? "is-active" : "" }` }
            >
              <span className="nav-icon"></span>
              &nbsp; Magic
            </button>
          </div>

          <div className="navbar-bottom">
            <div className="theme-group theme-group--light">
              <button
                className={`theme-dot ${theme === "parchment" ? "is-active" : ""}`}
                onClick={() => setTheme("parchment")}
                aria-label="Parchment theme"
              />
              <button
                className={`theme-dot ${theme === "cathedral" ? "is-active" : ""}`}
                onClick={() => setTheme("cathedral")}
                aria-label="Cathedral theme"
              />
              <button
                className={`theme-dot ${theme === "herbal" ? "is-active" : ""}`}
                onClick={() => setTheme("herbal")}
                aria-label="Herbal theme"
              />
            </div>

            <div className="theme-divider" />

            <div className="theme-group theme-group--dark">
              <button
                className={`theme-dot ${theme === "violet" ? "is-active" : ""}`}
                onClick={() => setTheme("violet")}
                aria-label="Violet theme"
              />
              <button
                className={`theme-dot ${theme === "blood" ? "is-active" : ""}`}
                onClick={() => setTheme("blood")}
                aria-label="Blood theme"
              />
              <button
                className={`theme-dot ${theme === "alchemy" ? "is-active" : ""}`}
                onClick={() => setTheme("alchemy")}
                aria-label="Alchemy theme"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
