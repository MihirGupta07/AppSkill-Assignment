// This file exports the static paragraphs component which is the second component of our web page.
// This component does not change on any screens hence, its called Static paragraphs

import React, { Component } from "react";
import "./StaticParagraphs.css";
export default class StaticParagraphs extends Component {
  render() {
    return (
      <div className="container">
        <h1>My Awesome Website</h1>
        <p className="p1">
          Occaecat ipsum id Lorem dolore. Exercitation quis adipisicing veniam
          enim magna eu magna sint dolor. Aliquip fugiat aliquip veniam
          excepteur sunt irure minim proident. Cupidatat elit laborum ad
          adipisicing. Excepteur Lorem cillum sint consequat tempor minim ad.
        </p>
        <p className="p2">
          Ea culpa nulla reprehenderit commodo.Reprehenderit ut labore velit
          voluptate aliquip esse consequat culpa sunt proident.
        </p>
      </div>
    );
  }
}
