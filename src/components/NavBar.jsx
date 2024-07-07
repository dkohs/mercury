import "./NavBar.css";
import heartIcon from "../assets/img/heart_icon.png";
import womenSmiles from "../assets/img/women_smiles.png";

export const NavBar = () => {
  return (
    <div>
      <div className={"navbar-left-container"}>
        <div className={"navbar-logo"}>
          <img src={heartIcon} alt={"heart-icon"} />
        </div>
        <div className={"navbar-title"}>
          CARDIOVASCULAR DISEASE PREDICITVE ANALYSIS
        </div>
      </div>
      <div className={"navbar-right-container"}>
        <ul className={"navbar-list"}>
          <li className={"navbar-list-item"}>Main</li>
          <li className={"navbar-list-item"}>About</li>
          <li className={"navbar-list-item"}>Contact</li>
        </ul>
        <button className={"navbar-button"}>Get Started</button>
      </div>
          <div className={"page-1-picture"}>
          <img src={womenSmiles} alt={"womenSmiles"} />
        </div>
    </div>
  );
};
