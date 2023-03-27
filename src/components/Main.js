import { Link } from "react-router-dom";

function Main() {
    return (
       <div className="content">
        <p className="summary">Bitcoin is an innovative payment network and a new kind of money.</p>
        
          <div className="btn-container">
          <Link className="btn btn-light btn-home" id="one" to="/">Get started with Bitcoin</Link>
          <Link className="btn btn-light btn-home" id="two" to="/chooseWallet">Choose your wallet</Link>
          <a className="btn btn-light btn-home" id ="two" href="/">Buy Bitcoin</a>
          </div>

          <div className="mainvideo">
            {/* <iframe title="myflame" src="https://www.youtube.com/watch?v=Gc2en3nHxA4&t=4s&embedded=true"  crossOrigin="anonymous"></iframe> */}
          <button className="mainvideo-btn-open">What is Bitcoin?</button>
          </div>
        
       </div>
            
      
    );
  }
  
  export default Main;