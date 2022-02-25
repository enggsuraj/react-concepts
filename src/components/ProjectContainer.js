import React from "react";
import ticket120 from "../assets/ticket120.png";
import unr from "../assets/unr.png";

import covid from "../assets/covid.png";
import todo from "../assets/todo.png";
import chess from "../assets/chess.png";
import linkedin from "../assets/linkedin.png";

function ProjectContainer() {
  return (
    <div className="projectContainer">
      <div className="project_item">
        <img class="project_icon" src={ticket120} alt="" />
        <div className="project_description">
          <a
            href="https://ticket120.toolcarton.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>ticket120</h3>
            <p>IRCTC Train Ticket Advanced Booking Date Calculator</p>
          </a>
        </div>
      </div>

      <div className="project_item">
        <img class="project_icon" src={unr} alt="" />
        <div className="project_description">
          <a
            href="https://ulhasnagarvaccine.toolcarton.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>UNR Vaccine Availability</h3>
            <p>
              UNR Vaccine Slot availability | उल्हासनगर वैक्सीन स्लॉट उपलब्धता
            </p>
          </a>
        </div>
      </div>

      <div className="project_item">
        <img class="project_icon" src={chess} alt="" />
        <div className="project_description">
          <a
            href="https://chess-unicode.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Chess Unicode</h3>
            <p>
              ♞ Tap And Paste Chess Emoji ♜ - Symbols | Unicode | Black & White
              | Crown
            </p>
          </a>
        </div>
      </div>

      <div className="project_item">
        <img class="project_icon" src={covid} alt="" />
        <div className="project_description">
          <a
            href="https://covid.blogtheorem.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Covidtheorem</h3>
            <p>Corona Dashbaord for Countries.</p>
          </a>
        </div>
      </div>

      <div className="project_item">
        <img class="project_icon" src={todo} alt="" />
        <div className="project_description">
          <a
            href="https://react-taskmanager.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>React ToDo</h3>
            <p>React ToDo Manager Application</p>
          </a>
        </div>
      </div>

      <div className="project_item">
        <img class="project_icon" src={linkedin} alt="" />
        <div className="project_description">
          <a
            href="https://innetwork.blogtheorem.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>LinkedIn Clone</h3>
            <p>innetwork - a responsive Linkedin clone application</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectContainer;
