import { Button } from "bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Link to="/emoji">
        <div>
          <button
            className="btn btn-dark btn-block py-3 px-5 my-2 mx-3"
            type="button"
          >
            Emoji
          </button>
        </div>
      </Link>
      <Link to="/gif">
        <div>
          <button
            className="btn btn-dark btn-block py-3 px-5 my-2 mx-3"
            type="button"
          >
            Gif
          </button>
        </div>
      </Link>
    </>
  );
};

export default HomePage;
