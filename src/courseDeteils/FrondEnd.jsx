import React from "react";
import { Link } from "react-router-dom";

function FrondEnd() {
  return (
    <div className="into  ">
      <div className="frond  overflow-hidden">
        <div className="indro">
          <h1 className="development overflow-hidden">Front-end Development</h1>
          <p>
            Every web or mobile application has two parts: a front-end and a
            back-end. The front-end is what the user sees and interacts with.
            It’s the app on your phone or the website you visit. So, front-end
            developers are in charge of building beautiful, interactive user
            interfaces. The average salary for a front-end Developer is $102,768
            per year in the United States. Here are the courses I've created to
            help you pursue a career as a professional front-end developer.
            Depending on your knowledge and experience level, you can take all
            the courses in order or just pick the ones that you need.
          </p>
        </div>

        <div className="frondend">
          <h2 className=" overflow-hidden">HTML and CSS</h2>
          <p>
            Front-end development starts with HTML and CSS. These are the
            languages behind every web page on the Internet. My HTML/CSS series
            teaches you everything you need to know from absolute basics to
            advanced concepts.
          </p>
        </div>

        <div className="borderbox">
          <h4 className=" overflow-hidden">HTML/CSS </h4>
          <p>
            Everything you need to convert Photoshop designs to fast,
            mobile-friendly websites.
          </p>
          <Link className="division" to={"/Hypertext"}>
            ViewCourse
          </Link>
        </div>

        <div className="frondend">
          <h2 className=" overflow-hidden">JavaScript</h2>
          <p>
            HTML and CSS are only used for building static pages. To add
            functionality to a page, you need to learn JavaScript
          </p>
        </div>

        <div className="borderbox">
          <h4 className=" overflow-hidden">JavaScript Basics for Beginners</h4>
          <p>
            Ideal place to start for people who have never programmed with
            JavaScript or need to refresh their fundamentals.
          </p>
          <Link className="division" to={"/JavaScriptVid"}>
            ViewCourse
          </Link>
        </div>

        <div className="frondend">
          <h2 className=" overflow-hidden">Libraries</h2>
          <p>
            The React.js framework is an open-source JavaScript framework and
            library developed by Facebook. It's used for building interactive
            user interfaces and web applications quickly and efficiently with
            significantly less code than you would with vanilla JavaScript.
          </p>
        </div>

        <div className="borderbox">
          <h4 className=" overflow-hidden">React 18 for Beginners</h4>
          <p>
            A Step-by-Step Guide to Building Modern Web Apps with React and
            TypeScript
          </p>
          <Link className="division" to={"/CourceReact"}>
            ViewCourse
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default FrondEnd;
