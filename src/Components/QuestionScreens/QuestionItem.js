// This file exports the Question component
// This class recieves the Question Number, Question Image URL, Question Text, and Question Options as Props

import React, { Component } from "react";
import "./QuestionItem.css";
export default class QuestionItem extends Component {
  render() {
    return (
      <div className="questionContainer">
        <div className="questionNumber">{this.props.qNumber}</div>
        <img
          className="questionImage"
          src={this.props.qImageURL}
          alt="qImage"
        />
        <div className="questionContent">
          <div className="questionText">{this.props.qText}</div>
          <div className="questionOptionSelect">Select one option</div>
          <ul className="questionOptions">
            {this.props.qOptions.map((Option) => (
              <li class="questionOption">{Option}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
