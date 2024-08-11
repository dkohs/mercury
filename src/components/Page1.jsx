import "./1stpage.css";
import heartIcon from "../assets/img/women_smiles.png";

export const Page1 = () => {
  return (
    <div className={"page1"}>
      <div className={"page1-text"}>
        <div className={"page1-subtitle"}>WELCOME TO</div>
        <div className={"page1-subtitle2"}>
          CARDIOVASCUAR DISEASE PREDICTIVE ANALYSIS
        </div>
        <ul className={"page1-bodytext1"}>
          <li>
            In a land where the sun shone a gentle lavender hue and the rivers
            flowed with liquid gold.
          </li>
          <li>
            These mushrooms, with caps adorned in intricate patterns of silver
            and emerald.
          </li>
          <li>
          Each flicker told a story of ancient forest magic, the kind that made
          the trees hum.
          </li>
          <li>
          In the heart of this enchanted forest stood the Great Spore Tree, whose branches
          reached towards the stars.
          </li>
        </ul>
      </div>
      <div className={"women-smiles"}>
        <img src={heartIcon} alt={"women-smiles"} />
      </div>
    </div>
  );
};
