import React from "react";

function Mysql() {
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
            src="data:image/jpeg;base64,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"
            alt=""
            srcset=""
          />
          <h3 className="sidehead">MYSQL</h3>
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

export default Mysql;