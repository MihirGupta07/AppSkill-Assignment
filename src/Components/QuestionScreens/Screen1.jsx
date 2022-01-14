// This is the 1st questionnaire screen
// The Questions are Imported from Screen1Questions.js file and are passed as props to QuestionItem component
// The Next button takes you to Screen2

import React from "react";
import QuestionItem from "./QuestionItem";
import { Questions } from "./Screen1Questions.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./ScreenStyle.css";
function Screen1() {
  return (
    <div>
      <div className="screenheader">Step 1: Answer this awesome Question</div>
      {Questions.map((question) => (
        <QuestionItem
          qNumber={question.qNumber}
          qImageURL={question.qImageURL}
          qText={question.qText}
          qOptions={question.qOptions}
        />
      ))}
      <div className="Buttons">
        <Link to="/Screen2">
          <input type="button" value="Next" className="FilledButton" />
        </Link>
      </div>
    </div>
  );
}

export default Screen1;
