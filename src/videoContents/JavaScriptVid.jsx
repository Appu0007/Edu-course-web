import React from "react";

function JavaScriptVid() {
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
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHQAzgMBEQACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAACAwABBQYHBP/EADgQAAMAAQIDAwgJAwUAAAAAAAABAgMEEQUGEiExURMUQVRhcZGyByIjMlWBk6GxFmJjNUJDcoP/xAAbAQEBAAMBAQEAAAAAAAAAAAAAAQMEBQYCB//EADIRAQABAwEEBwcEAwAAAAAAAAABAgMRBAUhMVESExRBUnGxIjIzNMHR8CMkYZEVQoH/2gAMAwEAAhEDEQA/APMCowBSgGkA0gGkA0gHsVCSASQC2A3sBmwGbAZsBpoAtABoAtBRaJgBoANABoCdIDQGAYBtIByBRIBoBygGkXCGkAkgGkAukDfSBtSBnSBrYA7AFoAtAFoANBU2QBgBoCbQAYGAYApQFEgKJANIBpFDSCKSgGkAkgFsAukDOkDOkDHIBaALQAaAFIANATaCi0QTYE6AFIAgYBSUBRIByBRIByVFEA5QFEgGkAkgFsEy3sDLOkGWmvYDINBci0AKQE2gBSAm0AGiSqbQE6AFIAAbQFJApIDQFEUUkIokA5QFEgOY5V0+HU8w6HBqcUZcN3SqLW6f1KNPaFyq3pa66ZxMfdktRE1xEvUZ5b4D+E6P9I8zTtDU+Of7b02aOSs8scBfdwjSP/yM0a7UeOXzNqjkX9McBS/0jSfpGTtt/wAcvnqqOTX9M8B/CdH+kTtt/wAcr1VHIXyzwH8J0f6RjnXajxysWaOSGflzgU47c8K0ial7PyRinaGpzHtz/b66mjHB41K3iX6Wj2c8XNgWQCkBKgBQE2FTZAKAnQE33gJAUlAOQKICklRSUBRAUlAUlAc1yf2czcPfhdfJRobV+SufnfDNY+JD1yL9p4ymp05h136RsjXK2XpqpazY+2Xs+86+ysTqIif5a1/3XAfRRdviHEuvJdfY4+yrb/3PxOhtfFNFGI75+jDp98y9IeT2nCmpt4Cr9pjqqfWHz6i/sr/6swTV7ULjc8OhfZz7j9Eni48C0QToCdICdATpAToigwJ0BN94G5ApIFJApIDkqKyBSQKSBRAcxyo+nmLQv++vko0Nqx+yufnfDNY+JD1Gcux4iNzqS4D6QMnVyzlX+XH/ACdjY8/uo8pa+oj2HBfRbfRruIv/AAx8zOjtucUUef2YNN70q86c363Fr8nDuFZvN5wvbLmlb3VeCfoS+O+5Nn7Ot124u3YznhHdhb16Yq6NLionnPSdOZanii62lvkyvKlu/TL32Xb4Gef8bczTind/z7Pj9WN70nJkfkaTe76X2/keRiM1x5uhPB41K+pPuR+jTxcaBognQE6AnQE6AnRFToCdATrvA3IFJAogKSBSSopIFJApIFJA5bll7ce0T/ur5aNHacZ0lf53wy2fiQ9H8p7TxnRdPLgeeMnVy/kW/wDyx/J09kRjVR5Sw6if03C/R1TjWa5+OKP5Z0Nue5R5/Rh0vGXw838Kz6bieo1iiq02e3k613S33p+Bs7M1NFyzTb/2p7nxeomK8vt4RzvqsLjFxWFnxdz1Edlr2tLsf5bGrqti0VZqs7p5Pu3qZjdU7q885MLuKVTUdSa7mmu88/FGKsTxbc1ZjLyefuL3I/QO9yBognTAnQE6AnQE6IqbAnQE6A3IFJApIFJAclRWQHIFZApIHJcv108Z0leFV8rNPaPytf53stn4kO2cZ4yuF6aMyxeV6sinp6tuzZ9v7Hm9JpJ1Fc0xONzduXOhGXU+Pcw5OL4owTg8jhl9TTrqdP0fkdzRbPjTVTXM5lq3L3TjDluSsFYNNn1NrbyzSnf0pen4v9jR2xciqum3yZdPTiMr5ebtPg1ufT59PlcY7cLJj2pPbv3XY127+Jip2Vdqt03KJ3zHk+pv0xMxLqvGNTpdXxC8ug07w4ml9XpU7v0vZdx3NLRdotRTdnM/RrVzTVV7LvnDHem4RpsOVPrjCpe/o7O48zqJivUVVRwy3Kd1GP4efr7k+49i5oUAKAnQE2BOgJsip0BOgJ13gYgKSBSQKICiKhyBRAUkCkgffweuniWnrwp/KzU1/wAtX+d7Ja9+HYtbi0+uxqNTLtS91tTWz/I87YvV2KulQ3aqYqjEvkx8K4bjvq8h1+y6bXwNmraGoqjGcPiLNEOSWfZJTsklskjRmJmcyy+Tj9Rw7Qai3d4FNt7txTndm5b12otx0c5jyY6rVMnpNBodLayYsC8ou6rfU17tyXdZfux0ZncU2qad+H3VqPqv3GpTT7UMk8HSF91e49nPFzAZBOgJ0AKYEmFCiCbAnQAfeBpAUlgUQFJAaKKSwiiYDTApLArjyVjtXjpzS7mvQfNdFNdM01cJWJmJzC/nmp9YyfE1uwabw+r762vm2tVqfWMnxQ7Bp/D6nW182edaj1jJ8UOw6fw+p1tfNnnWo9YyfFDsOn8PqdbXza871PrGT4odg0/h9Tra+bT1mp9YyfsOw6fw+p1tfN8zZtsYNgBsCdATpgBklU2wJ0wBQE2BgDkCiAcsCiAcsqKJgOWBRMBJgJMBKgN9QGdQGnQBbALYAbAnTADYE2AGRU2AKAnQBAwDcgUlgUTAaYDllDQQ5YDTAaYC3A3uBm4G9wNNgFsAtgFsAUwA2AKYlU2yANgTpgBgaAwDAHLApLAaYDTAaZQkwhpgJMBdQG+oDfUBnUBrqA02AGwC2AWwoNkAbADYAoCdMAgYBgGAbkBpgNMBoBpgNMqEgN7gLcBAZuBgGtwNMDTADAIlRZAGAGAGAGBoDAP/2Q=="
          alt=""
          srcset=""
        />
        <h3 className="sidehead">JavaScript</h3>
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

export default JavaScriptVid;
