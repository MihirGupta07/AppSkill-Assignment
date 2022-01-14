// This is the main App.js file
// All the components are imported here
// The three main components of our website are namely,
// 1. Navbar: This is displayed on all three questionnaire screens
// 2. Static Paragraphs: This is also displayed on all three questionnaire screens
// 3. The questionnaire: There are three questionnaire screens and we can navigate between them using next and previous buttons
// React-Router-Dom is used to navigate between questionnaires.

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import StaticParagraphs from "./Components/StaticParagraphs";
import Screen1 from "./Components/QuestionScreens/Screen1";
import Screen2 from "./Components/QuestionScreens/Screen2";
import Screen3 from "./Components/QuestionScreens/Screen3";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <StaticParagraphs />
        <Switch>
          <Route exact path="/">
            <Screen1 />
          </Route>
          <Route exact path="/Screen2">
            <Screen2 />
          </Route>
          <Route exact path="/Screen3">
            <Screen3 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
