import React from "react";
import { Link } from "react-router-dom";


function LearningPath() {
  const obj = [
    {
      id: 1,
      title: "Front-end Development",
      para: "All the courses you need to build beautiful websites. HTML, CSS, JavaScript, React, and more",
      viewLink:"/Frondend "
    },
    {
      id: 2,
      title: "Back-end Development",
      para: "All the courses you need to build powerful APIs for web and mobile apps. Node, Django, ASP.NET MVC, MySQL, and more!",
      viewLink:"/Backend "

    },
    {
      id: 3,
      title: "Mobile Development",
      para: "All the courses you need to build professional, cross-platform mobile apps using React Native.",
      viewLink:"/MobileDev "

    },
  ];

  return (
    <div className="learn-div">
    <div className="container ">
      <div className="contend">
        <h1 className=" overflow-hidden">Learning Paths</h1>

        <p>
          {" "}
          Whether you're a beginner just starting out or an experienced
          developer looking for courses to enhance your skills and reach higher
          levels of software engineering, these learning paths will help you
          achieve your goal.
        </p>
      </div>
      {obj.map((val) => {
        return (
            <div className="containers">
              <div className=" overflow-hidden">
              <h3 className=" overflow-hidden">{val.title}</h3>
              <p>{val.para}</p>
              </div>
              <Link  className="division" to={val.viewLink}>
                View
              </Link>
            </div>
        );
      })}
      <div className="division-1">
        <i class="fa fa-facebook"></i>
        <i class="fa fa-twitter"></i>
        <i class="fa fa-youtube-play"> </i>
      </div>
      <div className="divided">
        <h3 className=" overflow-hidden">Terms of Use</h3>
        <h3 className=" overflow-hidden">Privacy Policy</h3>
      </div>
    </div>
    </div>
  );
}
export default LearningPath;
