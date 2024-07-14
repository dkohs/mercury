export const Page4 = () => {
  return (
    <div>
      <div className={"page4-subtitle"}>
        CONTACT US
      </div>
      <div className={"page4-bodytext"}>
        text
      </div>
      <div style={{ backgroundColor: "lightgray" }}>
        <form>
          <div id="formtitle">SEND US A MESSAGE</div>
          <div id="form subtitle1">Full Name</div>
          <input type="text" placeholder="Full Name*" />
          <div id="form subtitle2">Email</div>
          <input type="text" placeholder="example@email.com*" />
          <div id="form subtitle3">Subject</div>
          <input type="text" placeholder="Subject*" />
          <div id="form subtitle4">Message</div>
          <input type="text" placeholder="Explain Your Issue Please*" />
          <button>SUBMIT</button>
        </form>
      </div>
    </div>  
  );
};
