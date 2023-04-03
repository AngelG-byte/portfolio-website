import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">Flatiron Grad</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">3 + Projects</span>
      </div>

      <div className="about__box">
        <i class='bx bx-dumbbell'></i>

        <h3 className="about__title">Employment</h3>
        <span className="about__subtitle">Open to Work</span>
      </div>
    </div>
  );
};

export default Info;
