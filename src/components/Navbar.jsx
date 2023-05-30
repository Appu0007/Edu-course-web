import React,{useState,useEffect} from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <div className="nav-div">
      <nav>
        <div className="img-container">
          <Link to="/firstcontainer">
            <img
              width={"80px"}
              src="	https://edumetrix.io/static/media/coin.c062b2cf16bee63f2da9.png"
              alt=""
            />
          </Link>
          <div>
            <span className="edu-font1">Edu</span>
            <span className="edu-font2">M</span>
            <span className="edu-font3">etrix</span>
          </div>
        </div>
        {(toggleMenu || screenWidth > 844) && (
        <div className="nav-links ">

          <Link className="links  overflow-hidden" to="/mycourses"  >
            My Course{" "}
          </Link>
          <Link className="links  overflow-hidden" to="/courses">
            {" "}
            Course
          </Link>
          <Link className="links  overflow-hidden" to="/LearningPath">
            Learning Path
          </Link>
          <Link className="links  overflow-hidden" to="/SignUp">
            Sign Up
          </Link>
           
          <Outlet />
          
        </div>
        )}
        <div className="btn-toggle">
          <div onClick={toggleNav}  className="btn-nav ">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>

      </nav>

    </div>
  );
}

export default Navbar;
