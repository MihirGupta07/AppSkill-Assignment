// This is the 3rd questionnaire screen
// The Questions are Imported from Screen3Questions.js file and are passed as props to QuestionItem component
// The Submit button for now, takes you to Screen1
// The Back button takes you to Screen2 again

import React from "react";
import QuestionItem from "./QuestionItem";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Questions } from "./Screen3Questions.js";
import "./ScreenStyle.css";
function Screen3() {
  return (
    <div>
      <div className="screenheader">Step 3: Answer this</div>
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
          <input type="button" value="Back" className="EmptyButton" />
        </Link>
        <Link to="/">
          <input type="button" value="Submit" className="FilledButton" />
        </Link>
      </div>
    </div>
  );
}

export default Screen3;
