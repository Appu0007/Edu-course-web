import React from "react";

function Azure() {
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
          <h3 className="sidehead">Azure</h3>
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

export default Azure;


