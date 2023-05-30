import React from "react";

function NodeCourses() {
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
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAABLFBMVEUiIiJAQjeCzSgiIiFAQjVAQjgiIiQ2NzFAQTkgICAiIiAiISUiIx8jIiJBQzkgICE7PTQhIicnJyQeGR1PcS17ujMaChsfJB8gFCJUeCeK1y4bFiIUFxkgHBsmICAtLSw7WCczMzAbJCslHyYvMCkhISoiJBqM0zKIyzQ1Ni6BwTQdKhgRAB8dIi4pHR0eDCkZFBUlJhVnki54qj8TCh8iHxh9uT0yTB9vojYqOhogNA9ejC8bIRkhFRobFh1ljTdzqC5YgC2I1x58tTYiLR8uQBooNRpEWy0WFRSMxzmR0DYbIjInFSMeGy2A0DhQcTYNACc/TxU0Mx8JABJOYTAgCx+RyUuCszMUJRZRcyp6pTkOFxUaIwI0UyAyRitYcyxehyJbhjpDXyBFTy4wBAljAAAJd0lEQVR4nO2a+1/ayBrGEyaZ3AYGghJJEKQhBC9bFUFthRTx0uo52u3pba27vXj+///hvAkgFwO73XaF8/m83x9aYZIw8+SdZ955E0FAEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEOQnwLhBiK7PuxuLCOVM5/AfnXdHFhHKFbWkC9SYd0cWEcrTaipt4qyKRUvLqqQqDHSad1cWj1AcUUypZYLiPCASR5IktYyh84CBOKLC0ZQn6U0rUEfR5t2VxaMnDsiD4jwExZkBijMDFGcGKM4MUJwZ/Ig45B/ozw9DKRUImdk15mUsxjK0OOMqAuzGqZ6Wpoqjw2/MqvUUYTdPk9BuZZLf0f1/ljDP59qsO0d+YU+3nWxxloDQRg2DzRAn+pEZtZ4nbntndydLm1WW+eu9/2ehlDC9rJYZm15pSG7v1vfWGp419QidsXKJz4wcXlIqM2o9pJlb26/tHeS8q+rC1DwMqlfklCzLFT3+phIa7NzUEgn/8FkuGllMAME1pJSqlqaLw4miSlK6ok8JP8N5duj7G3at/rzBfmQ8Pw3oqWGUlFQ0HlEx+YQ8rKkbGb61tpyIqB212swz9OSkioaZhvOBtNhjVBwW/oqgpORw0yWmGZ8wOFoEtwk2X9TsjXe3Nxd2LX9byHhshr89DuCiphJuoyNxVFVhZDzqdUYa5x070cfeeN1Y1b0xS6BUY4qq9sQRY8ShYDalfrskyuo6Gy9nWExw2jcf7MQx2No2iNRdfrfztDl9Cj8SBlGiPXRvYDBCuTzWztyVzSPfrg3ESdTsk4Md1x1fTcqy2FvA48UxuNkrY/RaJEmujEYOKV4V1va7/ovT7Sa4G3fO9q7tvc+5ea9YvBTdcVmV+/1WVTVd4sMDggKEeWKoTRg8/uG5M3aNNJwlSVPF0WBGge5qJF+okiyn0qWRwArOwGw6oHmGeV6SER683AfrOR39lcfHVFPiQ9S0GbVWf9GDlyd24iG1I26wqiuEZh7OSlGUJy/SF4eAx1eiHwHDH2lORWVmOJ8JLDgGs7lrc9djzWTR9TJMD17la/bF623mzS0xNFV1cky9YajRSurR5tplN3H9QJvrbvdTQK0w7HlJlOKucS8O4UrcDYBYVcP2ZDWTXbNrx62V6r+q1pMnVcrb/76yLG/7tH59ec7mVk0kZqw2oWlG4hhV53Vc3EDkJJYdIoS3XlOkyQk1Lo7A1dh2VVJNmL6EUSfv53+1LMgAC4y4wfkfd29OX8EM2zq0X2aq8xJHN1MjA0vf32AYLgujQjfaU8RJJDa2dqMVi5dnRw7IJ48cMPpnKhRHyFSv8vYxzB99Z//D78HBx5rt+7XOuWNtH/pv5pcoUzPVN2JZVUzdBHmizsuSFD7SFVgmuzRFm8RyzorSEE2Ro3UKfDalmJDspKSxjScRtChyQsdW1Uq2pKaiz3I/cmjSWgFxHEJZYaO2ew6LYb1+uGHv7wqNQ3tt1ZjXkkVNMTIdGE5F14kGuUgkFowjSpW/RxwZkmNIIFkFhh4nDoghrze3/9NeLfeMToLIEQbi5EEcAuK0juzDtznHKXy0b4L2YoiTqvQ8xij/bXHEtAa7Tsj2dDk2cuDLirtZv9w745W+6VSaD8X5anfauYaTe7e/dPW+vhDiiKZBQ4RK5EF/Rxw4BZZt2BXwdKw4EE6lxsdEN/Gh1VsG1oXI0MfF2V27TFyc1I/vTt+u7G4vRuSIZi/to711We2vVt8VOQpMqjAn0aaII4biQFZw0TIje+rb9bg4mzt3y9d+Fyz58NTLzVUcYShOv6c/JE7vGlPFkUuNfVj7Ln6D7KqiDfZW4+JY73ONZ29uXnQS9qfb+U4r/jPFSWtCeBLX05IYI44sShUOu4T9A9etEC7Ei/P7p73NVc3Z+fUP/6L1fq6R8zPFkeRSVP7UKv2k8KE4Yulq5/Mrp0gFXWeDgs2YOH5r2b7Zcpxs7sDeuJ2v53DIc0bFIUJJHRPHyN5MSwL3Cyyq6N1HjphKm4Zm3qeSDz0nPMI1whoIGdZzDIGBON92XEpvYbV6DW6T//LlRc0+Ct5DEujMrer1Z+IYXjA1ck5uDRpFijIsVqjK+oMMeVQc2P0rjE/UkC3YPtj5q5YQilMt3GyAH9v25fF7qwGec+U+tigD7sVJDcURR8TRhdUlf5o4Bbe/t0qNVnKG25F7cYTh3gpa1bI2Jg6pesEX/2vOJcnbDX836bQOlpaW1jad6spWx345v7dSh5HTC17CzbHIIUb75RRx/M5Wk/Wm1VAceVCzmYgccaxdLQkj9SLChOLB5XXnPJd9BasVc4ur2SC76vHGWce+2J1S1H4EDFOKcn1lWNEFz4iqX9FqAhlv9q5XPK5NaFPfNPT+4EYKWYOaTfjhvhTKk0qvxBUWufrWM157D95tdGtHn78mltuEhM++KAs269f2x4OCN7fIMcwo0Me6SkqqHO7KBx+dwnHNro1r4+99zt17AdXCjHe8fCylVJPpg+nDSVh8l0ZLG+tjY6bt1jfYi9vXx45b9KjgrRTyl3Yt71hsfq/swixSJx/HRI9pBuLAZiBTzW0e+iNrVre7f/fWva99U4Py6IxRdeRKOHGG1w2vOVpIlVKlMd9pFVfOv3U6S7lGttp8mg3uNq6vj35zLI/Mr9hFmVom2uRjJM4FpVcJ1MMHcJbg5Q5OhtZzkb8NDKZ7/aPD/RTnbH20BLqe1IgQ7dUGBxGNlIfiDDcPfTLMdbO5rexd/dkVmM2eb3fOAiPDkgad3wMs6HTc11wbZl4E+me4DVhhe95Tf77iJqkwVLT3R5jghIMH75l0lD4aS8MBcnhIafIAHdKdosv++6Hr558f1ezltbcu1XWDLOi7BaN4u9Wr2+NL2/Y/HjQ8Q4+9m1opHTlY+Lw3rj18QBbatlqKf8uUZIRm67jW9bsXNzsrxtyfWf1VqOGyonNeP7nb8gS9KsT7AOdlSa48SPIGGDR6iLPOqRHXTsB7jYxzdrj/YjOwrN3/m9d09aSQFCwtcBydUZIx4h7TgvfAxkCHpYnEPwvXw69hoZ72CorFYHslcKcQwDz2BC/umEXEMHQSvcEDg0tS+mc+EN9M+v+QaaeHb7AQQmHW6skkW4w3CRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRDk8fkfvjbwpRX5LZQAAAAASUVORK5CYII="
            alt=""
            srcset=""
          />
          <h3 className="sidehead">NodeCourses</h3>
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

export default NodeCourses;