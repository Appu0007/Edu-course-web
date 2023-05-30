import React from "react";

function CourceReact() {
  const list = [
    {
      id: 1,
      name: "about the bundle",
    },
    {
      id: 2,
      name: "Follow me around",
    },
    {
      id: 3,
      name: "Learning paths",
    },
  ];


  return (
    <div className="d-flex sidebar-div">
        <div className="image-div">
          <img
            className="image"
            src="data:image/png;base64,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"
            alt=""
            srcset=""
          />
          <h3 className="sidehead">React</h3>
        </div>

        <div className="Vidcontainer">
          <div className="sub">
            <h4 className="subhead">Getting started</h4>
          </div>
          {list.map((vid) => {
            return (
              <div className="content-box">
                <div className="name1 ">
                  <i class="fa fa-check"></i>
                  <span className="para">{vid.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  );
}

export default CourceReact;


