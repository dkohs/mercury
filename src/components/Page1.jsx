import heartIcon from "../assets/img/women_smiles.png";

export const Page1 = () => {
  return (
    <div className={"page1"}>
      <div className={"page1-text"}>
        <div className={"page1-subtitle"}>WELCOME TO</div>
        <div className={"page1-subtitle2"}>
          CARDIOVASCUAR DISEASE PREDICTIVE ANALYSIS
        </div>
        <div className={"page1-bodytext"}>
          In a land where the sun shone a gentle lavender hue and the rivers
          flowed with liquid gold, there lived a community of sentient
          mushrooms. These mushrooms, with caps adorned in intricate patterns of
          silver and emerald, communicated through a symphony of bioluminescent
          flickers. Each flicker told a story of ancient forest magic, the kind
          that made the trees hum with life and the air shimmer with mystery. In
          the heart of this enchanted forest stood the Great Spore Tree, whose
          branches reached towards the stars, and whose roots whispered secrets
          to the earth.
        </div>
      </div>
      <div className={"women-smiles"}>
        <img src={heartIcon} alt={"women-smiles"} />
      </div>
    </div>
  );
};
