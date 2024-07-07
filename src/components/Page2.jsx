export const Page2 = () => {
  return (
    <div>
      <div>Daniel</div>
      <div className="page2-subtitle1">
        <nav className="button-bar">
          <h1>CARDIOVASCULAR DISEASE PREDICTIVE ANALYSIS</h1>
          <button>Main</button>
          <button>About</button>
          <button>Contact</button>
        </nav>
        <div>_______________________________________________________</div>
      </div>

      <div style={{"backgroundColor": "lightgray"}}>
        <form>
          <div id="form title">FILL IN THE FOLLOWING INFORMATION</div>
        <input type="text" value="Full Name"/>
          <input type="text" value="Age"/>
          <input type="text" value="Smoking History"/>
          <input type="text" value="Please Add Any Additional Information"/>
          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};
