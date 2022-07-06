import logo from "./logo192.png";
import "./App.css";

const App = () => {
  const name = "React";

  const facts = {
    releaseDate: "May 2013",
    language: "JavaScript",
    license: "MIT",
  };

  const aboutReact = (facts) =>
    `Release date: ${facts.releaseDate}. Language: ${facts.releaseDate}. License: ${facts.license}.`;

  return (<div className="container">
      <img src={logo} alt="react logo"/>
      <h1>{name}</h1>
      <p1>{aboutReact(facts)}</p1>
  </div>);
};

export default App;
