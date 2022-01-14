// This is the 2nd questionnaire screen
// The Questions are Imported from Screen2Questions.js file and are passed as props to QuestionItem component
// The Next button takes you to Screen3
// The Back button takes you to Screen1 again

import React from "react";
import QuestionItem from "./QuestionItem";
import { Questions } from "./Screen2Questions.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./ScreenStyle.css";
function Screen2() {
  return (
    <div>
      <div className="screenheader">Step 2: Answer this Question</div>
      {Questions.map((question) => (
        <QuestionItem
          qNumber={question.qNumber}
          qImageURL={question.qImageURL}
          qText={question.qText}
          qOptions={question.qOptions}
        />
      ))}
      <div className="Buttons">
        <Link to="/">
          <input type="button" value="Back" className="EmptyButton" />
        </Link>
        <Link to="/Screen3">
          <input type="button" value="Next" className="FilledButton" />
        </Link>
      </div>
    </div>
  );
}

export default Screen2;
