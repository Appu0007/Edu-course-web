import React from "react";
import { Link } from "react-router-dom";


function MobileDev() {
  const obj = [
    {
      title: "JavaScript Basics for Beginners",
      desc: "An ideal place to start for people who have never programmed with JavaScript or need to refresh their fundamentals.",
      btnlink: "/JavaScriptVid",
    },
    {
      title: "Mastering React",
      desc: "Everything you need to build real websites with React from zero to hero.",
      btnlink: "/CourceReact",
    },
    {
      title: "Ultimate React Native:",
      desc: "Master the fundamentals of building cross-platform apps with React Native and Expo",
      btnlink: "/ReactNative",
    },
  ];
  return (
    <div className="backend-page ">
      <div className="frondend">
        <h1  className="overflow-hidden">Mobile Devolopment</h1>
        <p>
          These days there are a large set of tools available for building
          mobile apps. But these tools fall into two categories: native and
          cross-platform tools.
        </p>
        <p>
          With native tools, you can build apps for a specific problem (eg iOS
          or Android). Each platform has its own programming languages and
          tools. So to target multiple platforms, you have to learn many tools
          and write code in different languages.
        </p>
        <p>
          Alternatively, you can use a cross-platform solution (eg React Native
          or Flutter) to build apps for multiple platforms using a single
          codebase.
        </p>
    
      <div className="mt-5 ">
        <h1 className="overflow-hidden">Building Apps with React Native</h1>
        <p>
          Here are the courses I've created for anyone wanting to build
          professional-quality mobile apps using React Native. Depending on your
          knowledge and experience you may take all these courses in order or
          just the ones you need.
        </p>
      </div>
      </div>
   
        {obj.map((obj) => {
            return(
          <div className="borderbox ">
            <h3 className="overflow-hidden" > {obj.title}</h3>
            <p>{obj.desc}</p>
            <Link  className="division" to={obj.btnlink}>
                View
              </Link>
          </div>)
        })}
     
    </div>
  );
}

export default MobileDev;
