import React from "react";
import "./experience.css";
function Experience() {
  return (
    <>
      <div className="heading" style={{marginTop:'8vh'}}>EXPERIENCE</div>
      <div className="dot1"></div>
      <div className="dot2"></div>
      <div className="Experience">
        <div className="line"></div>
        <div className="internships">
          <div className="internship1 internship">
            <h5 style={{color:'green'}}>February 2023- April 2023</h5>
            <h5 style={{fontWeight:'bold'}}>FrontEnd Developer</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam sed minus ut, autem incidunt id quidem quisquam maiores rem magni aspernatur minima temporibus nemo accusantium aliquam obcaecati tempora maxime aliquid recusandae dolorem tenetur ipsam! Praesentium a tempore sunt, ipsam molestias velit at? Quo sit dolore harum commodi, expedita earum, recusandae suscipit eum quibusdam repudiandae asperiores?</p>
          </div>
          <div className="internship2 internship">
            <h5 style={{color:'green'}}>February 2022- May 2022</h5>
            <h5 style={{fontWeight:'bold'}}>React Developer</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus magnam necessitatibus facere eos fugit deserunt. Doloribus saepe quam ab quae, veniam culpa eum illum ea nostrum adipisci voluptates similique laboriosam, fuga incidunt, sit dolor quidem harum rerum distinctio a! Non, amet laboriosam minus dolorem cupiditate ratione ad illo vero maiores aperiam debitis eligendi sapiente voluptate!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
