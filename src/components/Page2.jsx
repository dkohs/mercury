
import "./2ndpage.css";
export const Page2 = () => {
  return (
    <div className={"page2"}>
      <div className={"page2-text"}>
        <div className={"page2-subtitle"}>BECOME AWARE</div>
        <div>
          <ul className={"page2-bodytext"}>
            <li>
          With wit and vlor, Lumina outsmarted the Shadow Beasts and reclaimed the artifact.
            </li>
            <li>
          Her return was celebrated with a burst of light so bright
            </li>
            <li>
          That it illuminated the entire land etching her legend into the hearts of every mushroom.
          </li>
          </ul>
        </div>
      </div>
      <form className={"form"}>
        <div id="formtitle">FILL IN THE FOLLOWING INFORMATION</div>
        <div id="">Full Name</div>
        <input type="text" placeholder="Full Name*"/>
        <div id="formSubtitle2">Age</div>
        <input type="text" placeholder="Age*" />
        <div id="formSubtitle3">Chest Pain Type</div>
        <input type="text" placeholder="-Select-*" />
        <div id="formSubtitle4">Blood Pressure</div>
        <input type="text" placeholder="Blood Pressure*" />
        <div id="formSubtitle5">Cholestrol</div>
        <input type="text" placeholder="Cholestrol*" />
        <div id="formSubtitle6">MaxHR</div>
        <input type="text" placeholder="Max Heart Rate*" />
        <div id="formSubtitle7">Exercise Angina</div>
        <input type="text" placeholder="Exercise Angina*" />
        <div id="formSubtitle8">Additional Information</div>
        <input
          type="text"
          placeholder="Please Add any Additional Information*"
        />
        <button className="-Submit-btn">Submit</button>
      </form>
    </div>
  );
};
