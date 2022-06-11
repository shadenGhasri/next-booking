
import rocketImg from "../assets/rocket.png"
import Signup from '../components/signup';

function Sigin() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-5">
            <Signup />
          </div>
          <div className="col-md-7 my-auto">
            <img className="img-fluid w-100" src="/assets/rocket.png" alt=""/>
          </div>
        </div>
      </div>
    );
  }
  
  export default Sigin;