import React from "react";

function GitHub() {
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
            src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/tsmP4fdkSmKaiez6t2jl"
            alt=""
            srcset=""
          />
          <h3 className="sidehead">GitHub</h3>
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

export default GitHub;


