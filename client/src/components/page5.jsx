
import "./5thpage.css";
export const Page2 = () => {
  return (
    <div className={"page5"}>
      <div className={"page5-text"}>
        <div className={"page5-subtitle"}>REGISTER FOR AN ACCOUNT</div>
        <div>
        </div>
      </div>
      <form className={"form"}>
        <div id="formtitle">Register Here</div>
        <div id="">Username</div>
        <input type="text" placeholder="Username"/>
        <div id="formSubtitle2">Email</div>
        <input type="email" placeholder="Email" />
        <div id="formSubtitle3">Sign up for Emails</div>
        <input type="boolean" placeholder="Notifications*" />
        <button className="-Submit-btn">Submit</button>
      </form>
    </div>
  );
};
