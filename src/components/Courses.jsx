import React, { useState } from "react";
import data from "./Object";
import { Link } from "react-router-dom";

const Courses = () => {
  let [searchterm, setsearchterm] = useState("");

  return (
    <div className="row courses-div">
      <div className="search-container">
        <input
          type="search"
          className="input-field"
          placeholder="search..."
          onChange={(event) => setsearchterm(event.target.value)}
        />
      </div>
      {data
        .filter((js) => {
          return searchterm.toLocaleLowerCase() === ""
            ? js
            : js.name.toLowerCase().includes(searchterm);
        })
        .map((val) => {
          return (
            <div key={data.id} className=" m-5 card-cont overflow-hidden">
              <img className="img-cont" src={val.imageurl} alt="" />
              <h3 className="overflow-hidden">{val.name}</h3>
              <p className="overflow-hidden">{val.desc}</p>
              <Link className="card-btn" to={val.btnlink}></Link>
            </div>
          );
        })}
    </div>
  );
};

export default Courses;
