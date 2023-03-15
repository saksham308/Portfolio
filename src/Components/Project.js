import React from "react";
import "./Project.css";
import arrow from "./box-arrow-up-right.svg";
function Project() {
  return (
    <>
      <h1 id="project" className="heading" style={{ marginTop: "2rem" }}>
        MY PROJECTS
      </h1>
      <div className="container">
        <div className="image">
          <img
            className="image__img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcYhT4y4Zes_pUm6cgNumeM0ItF8gmIDQi_L7xxGP&"
            alt="Bricks"
          />

          <div className="image__overlay  ">
            <div className="image__title">Netflix Clone</div>
            <button className="image__description">
              <a href="https://netflix-clone-a95d2.web.app/" target="_blank">
                {" "}
                Watch Live{" "}
              </a>
            </button>
          </div>
        </div>

        <div className="image">
          <img
            className="image__img"
            src="https://static.wixstatic.com/media/ea6ac8_b6b0cbe25615488e855f515846354dda~mv2.jpg/v1/fill/w_640,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea6ac8_b6b0cbe25615488e855f515846354dda~mv2.jpg"
            alt="Bricks"
          />
          <div className="image__overlay  ">
            <div className="image__title">Portflio Website</div>
            <button className="image__description">
              <a href="#" target="_blank">
                {" "}
                Watch Live{" "}
              </a>
            </button>
          </div>
        </div>

        <div className="image">
          <img
            className="image__img"
            src="https://www.mpl.live/blog/wp-content/uploads/2022/02/Black-Jack.png"
            alt="Bricks"
          />
          <div className="image__overlay  ">
            <div className="image__title">Black Jack Game</div>
            <button className="image__description">
              <a
                href="https://saksham308.github.io/black_jack_game/"
                target="_blank"
              >
                {" "}
                Watch Live{" "}
              </a>
            </button>
          </div>
        </div>

        <div className="image">
          <img
            className="image__img"
            src="https://www.codefuel.com/wp-content/uploads/2022/02/How-to-make-a-chrome-extention.jpg"
            alt="Bricks"
          />
          <div className="image__overlay  ">
            <div className="image__title">Chrome Extension</div>
            <button className="image__description">
              <a
                href="https://github.com/saksham308/Chrome-Extension.git"
                target="_blank"
              >
                {" "}
                Watch Live{" "}
              </a>
            </button>
          </div>
        </div>
        <div className="image">
          <img
            className="image__img"
            src="https://alphalogix.co.uk/wp-content/uploads/2019/09/followup.jpg"
            alt="Bricks"
          />
          <div className="image__overlay  ">
            <div className="image__title">Contact Management App</div>
            <button className="image__description">
              <a
                href="https://contact-manager-97982.web.app/"
                target="_blank"
              >
                {" "}
                Watch Live{" "}
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
