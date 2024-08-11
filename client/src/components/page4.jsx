import "./4thpage.css";
export const Page4 = () => {
  return (
    <div>
    <div className={"page4"}>
      <div className={"page4-text"}>
        <div className={"page4-subtitle"}>CONTACT US</div>
          <div className={"page4-bodytext"}>
            And so, in this fantastical realm of shimmering flora and luminous
            fuana, the story of Lumina lived on, insiring generations of glowing
            muchrooms to embrace their inner light and cherish the magic that
            bound their world together.
          </div>
      </div>
      <div className={"MessageForm"}>
        <form>
          <div id="formtitle">SEND US A MESSAGE</div>
          <div id="MessageFormSubtitle1">Full Name</div>
          <input type="text" placeholder="Full Name*" />
          <div id="MessageFormSubtitle2">Email</div>
          <input type="text" placeholder="example@email.com*" />
          <div id="MessageFormSubtitle3">Subject</div>
          <input type="text" placeholder="Subject*" />
          <div id="MessageFormSubtitle4">Message</div>
          <input type="text" placeholder="Explain Your Issue Please*" />
          <button className="Message-btn">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};
