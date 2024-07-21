
import "./2ndpage.css";
export const Page2 = () => {
  return (
    <div className={"page2"}>
      <div className={"page2-text"}>
        <div className={"page2-subtitle"}>BECOME AWARE</div>
        <div className={"page2-bodytext"}>
          With wit and vlor, Lumina outsmarted the Shadow Beasts and reclaimed
          the artifact, restoring balance and peace to the forest. Her return
          was celebrated with a burst of light so bright that it illuminated the
          entire land, etching her legend into the hearts of every mushroom.
        </div>
      </div>
      <form>
        <div id="formtitle">FILL IN THE FOLLOWING INFORMATION</div>
        <div id="">Full Name</div>
        <input type="text" placeholder="Full Name*" />
        <div id="formSubtitle2">Age</div>
        <input type="text" placeholder="Age*" />
        <div id="formSubtitle3">Chest Pain Type</div>
        <input type="text" placeholder="-Select-*" />
        <div id="formSubtitle3">Blood Pressure</div>
        <input type="text" placeholder="-Select-*" />
        <div id="formSubtitle4">Additional Information</div>
        <input
          type="text"
          placeholder="Please Add any Additional Information*"
        />
        <button className="-Submit-btn">Submit</button>
      </form>
    </div>
  );
};
