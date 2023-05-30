import React from "react";

function CascadingVid() {
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
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwBIwMBEQACEQEDEQH/xAAcAAADAQEBAQEBAAAAAAAAAAAAAgMBBAUHBgj/xABCEAACAQIDBQUEBwYDCQAAAAAAAQIDEQQhMQUGEkFREzJhcZEHFCLRFRZCUlOBoSMzVFWTwXKCohckJWJlkpTC4v/EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMFBAb/xAAzEQEAAgEDAgMFBwQDAQAAAAAAAQIRAwQSITETUWEFIkFScRQVMlORofAzscHhQmKBI//aAAwDAQACEQMRAD8A/MH6doAAAAARqL4jFu6BaO4iQjqQk7SWnMmYEpy4pXMTOZDU3lYsdhU0MAArbPoAQdpCBe50AAaoDlxS/aJ9Ucr90Sy80YG5vIAVN9S4DqCRcQHSXJFwAqsbfJXIksXE/DyJ1GfAu9n+oBf7qt5jqNs3rKw6/ECcE8rtlDBYPSdmaqKmxKr3kzFiUqk2o2i82Zm2ETTlbJpGB3H0KxyS5kzATtLaE5BoS4ixOQxQlRXV0S0IhUbUcvzOUiKTb0Mh1TfMsVyHhDhuzURgMVTcKLhGKXx8FvzGeuAvaq9icoARYepsPBfSm1MJge07L3iqqfaWvw352yLqanCk38kl9B/2Uf8AWn/4n/2ef95f9f3/ANDy9k+z/wCkcftTC/SfZ+44hUuL3e/HeKle3FlqddTfcK1nj3/nkE3o9nkNk7Cxu0/pdVnhaTqdl7vw8duV+J29DOnvJ1bxThjPqOzD+yaFTD0qz23w8cFKzwul1/jOU77E44j8rvju0t2cdh8LTxixXbUu04uz4LZ2tq+h9W31p1YmcYHg8J9OA3D4DAEkBkhIS75EVjS+07mZRiaXdVxkb8T52XSwGPhWssxgam+UfUo1BTRdpXLHdFzopKiuiWJc848TucpjKDsvEnEwo5Nm8qwgAHpPOxqsipsZLONhIg9TkCxcI0AAwDZz4VlqJtgTdZuLVlfqZ5CS8zIvF3RuFh7u5Oe9Wyl0xUDGv/Rt9El9Q303Y2vtzaGHxGzdovC0qdHglDtZxu7t3tE8vbbjT0qzFq5Rx+z2hjtmVtt4KrT97rUsVFVava958C65vI67uaanC0Tjor0N+8DhPqRteq8Dh6FV4WTbVON4vrdI47SZ+0VjPxIexg+0xWCwtHF7MhOl2cbupKMkstbHC0RFpxKPmvtdw1DD7ZwMcPQpUovDZqEVH7T6Hp7CZ4T9R+EPvVK01W1fCY65yCrNrJPMWtgZGo3ZNE5B/DkaWC/CnkszKDN6ZDqC33pZ9LjAZK2iRcGAFAABaLurnWOo16AIqfiZ4jeDxHESRkBAAbF2lcoudAAQmrSOc9wBAAAYBOpFuWRiY6jFTfMcQyppGornoT06ntbka4T5fsnKF8FXrYXE08Rh6kqdWnLihOOsX1HhzPSY6fQ5Ve59cN4/5zif9PyMfY9L5P7pyqlhd5ds4SriKuH2hVhUxM1OtOyvOSVrvLoW21pbETXsvKpsdvTtvaGFq4TGbRq1KFaPDUptK0l00FdpSs5ivU5Vat8946SjCG1KyhFWStHT0Odtnp5/CcqvO2ntbaG2KsK20sRLEVIR4YyklkumR009CKRisfsnKHnVJuLsk/Q3MW8p/Q5Qztmovii7mZmY7wuYnsi3d3ZzUJ2dwLrNXNrAba0CMs3q2BqilyGFw0AKC3gAypyYwZUirKx0joGAAADzsPN8Si3qj5qT1wjpOigARReLvFM6R2GgTqrRmbCZkAAAABBqi+hYhIOoM77eMakOW4jOnJsuR6/xeTHYBQAAUVGcoqStZ6ZhmbRDewn4eoTnA7Cfh6g5wyVKaXE7ZeIWLxMuXFdyK8T4d/PuVh9mzj3pQSb5Hl4egZU76liBRKysaWGlAQaot8i4kMqfUvEOqaWuZrjA1JLQo0AAAC6WoC8S6jMDzcPHiqLwPkrGZyjsOygAArSeTN1Dmgs+6yT2EeZgCVxgOoN6F4jVTXPU1xhDqKXIuFaAHTTn34+rGrGaTHoU9Z470dm7D2ntSlOrs/B1K9OEuGTjbJ2vY+fV3Wjo2iupbDpXTtaMxDr+qG8H8qxHrH5nL7x2n5kL4Gp5D6obwfyqv6x+Y+8dp+ZB4Gp5OyjujvB2cf8AhdfT/l+ZPvHa/O5W22rn8J/qjvB/K6/+n5j7x2vzp9m1flZLdPb8IuUtmV1GKu23HT1H3htZ7XPs2rjOHg1/3TPtcqd3n1dcz4d9P4Yeps47lPPfaLXKGUG9C4mUMqa56l4qZRXQ1gMAAAAArlHqTMBXU6E5BXOROUyFu2SQECxjGHdVkIjCMlVhHWSJNohU3ibZRjcz4iJyrVHlouhmbSKYOo1VtJ3TNaVveHefQotfIBeBJjA1JckEgSlGOrSJmFSliILRNmZvHwRWEuOCl1NxOVaAFr3hLdYkp7LxX0T2WY7DUMHj6WJxFGj+1jJdpUUb/D4+R+d9uaVrXpNYz0fbtbRETn+dH7n6S2f/AB+E/rw+Z4vgavyT+kvq518x9JbP/j8J/Xh8x4Gr8k/pJzr5uyjtbZqpRT2jg9Px4/MfZ9b5J/SU8SnmtR2jga9RU6GNw1So9Iwqxbf5Jkto6lYzasx/4sXrPaSbYqqjsrGVHpGjN/oy6EctSsR5wl5xWX891sqMV5H7ye7w9OOzmlDid2zzt5Gbx9HrbOPdkKCR8vGH1mSS0RRoAAAY5KOozgK6i5IzNgrqN6ZE5SFcm9SDCAAAAAA4XJvvTbOPfujYxcu5FtjE/CBaOFqy1tBeZuNO8+grHBwXfk2bjS8xenSp0+5CPodOMV7BnJLvO3mXMLlOVemstfIzN4gynLEy+zFIx4kolKpOWs2Zm0yF89TIAOrDX4WujO1OwsbUAKezXtDxbRiZgNLLJFicIy0fD0GZToy0Vpb0GZXo7aPD2UXZaDMuFsZfq/ZrSjV3qpyUV+zoVJXXLRf3PK9s3mNrMecw+jZxnVfSN8avY7rbTnz93kl5vI/PbCOW6pHq9LcTjStPo+FYrSKP2ryNNzo8/df1HrbX+nlp8z6QDLHKMVdySGYMiMoyzi7rqMmWgTqrRmbCZgAAAAc9as1JxgYtdEu1qfeMcpF6Nbj+FrM3W2RY2uTxw9KGkb+eZuKVhMK2tHKyNdhOVanHVq/RGeUCbxP3Y/mzPieQnKtUl9q3kjE2kTbvq2ySC/Qg1Rb5FwNUHzyLEB1TXMvFcGUUi4MKUsnkaqYVNgAU9bTnNIl5GpGLy/X+zB05bw1aNWEZqeFk0pRT0lHr5nme2uUbeJicdYdNtMc8Pqfu2H/Ao/018j8x4t/mn9XocY8h7th/4eh/Tj8h4t/mn9TjHk66ODwrpxvhaGn4aHi385TjXyVp4ahSnx0qFKEtLxgkyTe1ukzKxWI7Q/P+0er2W6OL6zlTh6zR9/smM7uvpn+z5t5ONGXxTFv4oo/YPNo5nVhHvPM8rc3jxJext+mnCcsT9xfmfNOo65SlWnLV+hmbTITmZF8K3drkdNMdJ0UtRXiSeoicwAAADLz22cEVlCn2cZJ2vy1NTEYyEhdSi11JHcd1/A7ZCOvJ6ZEm8icm5O8m2ZzIzQg219EXA1U2xiQyprma4h1FFwo05oIziXJ3JkF2+Vhky1eJVNF2aLAvyR0AArPU0Jzpw8rcRjUl6GwY7QqbWo0tjVpUsbVUo05RqcHJtq/kjO6nRrpTbWjNYYpym2Kv1WI2fv8AYahUr1do1ezpxc5cOKTdkvI8umt7LvaKxX9neabiPj+7859advuzW2cZZr756M7Da/lw4xq383XS3l266cW9sY3T8Vj7Dtfy4cba+rn8Uv3Psyx+0No1MfPHYyviIQUFHtZ8Vm7ni+2dHS0opGnWIz5Pt2V73zNpy6varU4N3aEPxcXCPpGT/sjl7ErncTbyj/MR/lrfTjTiPOf9vkGJf7ReCP1Tz6PNneVRtLmeFrznVtPq9nSjFICg2csOh1T6muIZRS5FwuDQdpKxY7mFzoMegEXk7HMYQAAByVaTg7rOJytXCJO/XIyL0aUnJTkmktDda+Y6TouEeGT1M4lDKn1LxDKCRcEGt0LCgBW3yROqBptZtImJGfCvFjoNvJ6RsvEZ8gZvV28gNjZaO5RoVaDvE6R2DFJYz0drOdN5u6jGo9jc2p2W9eypv+I4f+6Lj/cx7QjO01I9HLSn/wCkPtOMo+84SvQul2lOULvldWPxlLcbxbyepaMw+QY7cbb2BWWEjiIJZSw8+LLydn+h+u0vau11O84n1/kvNnb6lWbN3a21jYpYfZ1eyybnHhS/NnbU3220u94/u4eBqWnpV9O3B3fxewcHio47su0rzUlGnJyskubsj837T3dN1eJp2h6G10baUTy+Lyfa5Utgtm0fvVpz9I2/9j6/YVffvb0iHLfz7tYfKcT++z8D9JD46dnKjwrdbTL26xiIhtiKAMAEFXi/hOkDQI1FaRi3cKZAAAAGcMfur0GIA2ks3ZFyE7emvtr0McoRThNjeEuAyVhgHIoR6mVY0+qIhXwrvNNkAm/sp2H0G2k+aSH1GNR1vcdBqfRfoXIYqqUnqar2SFDSsZ9+0n3Zh5+8j3olbAYqWCx+HxUVxSoVY1FG9r2d7fofRq6fiUmmcZjD5onExL6ds/2jbJxFo4yjXwknq2uOPqj8zq+xden4Ji389X3V3VZ79H6XZ+19nbSX+443D1m/sxmuJf5dTztXba2l/UpMO9dStu0vXniKOFwsamKrU6NNLOVSSil+bONaWvOKxmVm0V7vA2hv1sLB3UcS8TNfZoRv+uh6Gn7K3Wp3rj6vntu9Kvacvn2+O8y3jr4Z08NKjTw6ko8Uk272vp5I97YbH7JFs2zMvP3Gv4sxMR2fkaz/AGsj0ZnEZSkdoc54T2wAAYABVaT5GqhzQnVWRmyJmVDy1IElVhHWV/Ik2iERlil9mK/MxNwrqVZK97InK0ibtzdzP1GfD4+o6D0z6gtRNwfDqSe3QLT4oxblkuRK5iOom6kuO6M8uopGXHnzLnKhrIIVNLSNyDc3noOoOFc22MDUl0LgaFADU3aWZqO4sbGM+3aT3h8O8jtLD7XxAAaTabSutHzQHf2lSvGE69SpVklZSqycml+ZmK1r0iIj6dHG3WWSnGLzkipjyTliIpfCmw1FJ+LlqSu3J5XzMas407T6Po0o96EjxXrgAALgwwKam7SLXuixtSz7jy5EnsS891qk3ZI+blMok3xO05Mz9QPh6NrxApCnVl3YW8dDUVmewrHBSl+8kl5Zmo0ZnvJhaOEpLW8v8TOkacQYVVOCy4Im+NfIK5KK4mZ+GRBVpXfQxynIKlVyVkSbZEzIek7O3U1AqzSl+LkrE6oOHrJjBhqVixCtAABJvkUNGDuWIkWNgLEzE5iUtWLdJgHau4vX1cbbbTt6Jykk7WO1d5Gfeh899pP/ABkydz6Ka2nbtLhbRvXvDXUsrSqNJaK5q2pSveWI07TPSEZV4p5XZ81t7px+Hq+iu1vPfonKvJ6Kx8t99qW7Rh2rtaR3NGbkrs4zqXv+Kcu9dOte0GMtsAANsFyxqwMhZMDoWaudDI5FHD7nUc27qKvkfP4UymFIYKEXeUnI1GlUwvClTh3YpeSOkViOxg68sygdlq0h0XKUq0FfO5mbxBknvEejJzgylVbyXI52lCEAlfQgZQbLiQ8admnfM1EYMHKovkUwCDVFvQuJDKn1LxDKmjXGAySRRoAAAAE6qzuZsJTbUXYxPYQfqYnqjUr6IYQyptlwp4x4VY1EBiqZRLhBKSgry0EzgCknHiWgzGAvHGafCyZgBFVpu8TpE9Eg5VAAAALUvwStrYk9hxZy7zOHVGXWVk2Bv+UB6i08zUjYwQxAayKuGgwAACkIp5s3EIdJLkawrQAAAAAAAAABandbJbsINX1OYFFLkMGGgw1ZssIGBgU60NQgaUlZ6ExkSrfCopaGbTiBFapmIHQbVSlzN1FDQAAAAAONRXHJeJxxmZQ6iloi4GhX/9k="
            alt=""
            srcset=""
          />
          <h3 className="sidehead">CSS</h3>
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

export default CascadingVid;


