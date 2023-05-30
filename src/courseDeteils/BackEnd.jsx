import React from "react";
import { Link } from "react-router-dom";

function Backend() {
  return (
    <div className="backend-page overflow-hidden">
      <div className="indro">
        <h1 className="heading overflow-hidden">Back-end Development</h1>
        <p>
          Every web or mobile app has 2 parts: a front-end and a back-end. The
          front-end is what the user sees and interacts with. The back-end is
          where the data gets processed and stored. The average salary for a
          back-end developer is $121,112 per year in the United States. Here are
          the courses I've created for anyone pursuing a career as a
          professional back-end developer
        </p>
      </div>
      <div className="borderbox">
        <h3 className="overflow-hidden">JavaScript Basics for Beginners</h3>
        <p>
          JavaScript Basics for Beginners An ideal place to start for people who
          have never programmed with JavaScript or need to refresh the
          fundamentals.
        </p>
        <Link className="division" to={"/JavaScriptVid"}>
          ViewCourse
        </Link>
      </div>
      <div className="borderbox ">
        <h3 className="overflow-hidden">The Complete Node.js Course</h3>
        <p>
          Learn to build highly-scalable, fast, and secure backends with Node,
          Express, and MongoDB.
        </p>
        <Link className="division" to={"/JavaScriptVid"}>
          ViewCourse
        </Link>
      </div>
    </div>
  );
}

export default Backend;
