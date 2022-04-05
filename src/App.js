import "./App.css";
import iron from "./images/iron.png";
import menu from "./images/menu.png";
import declarative from "./images/declarative.png";
import components from "./images/components.png";
import single from "./images/single.png";
import jsx from "./images/jsx.png";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <nav>
          <img src={iron} />
          <img src={menu} />
        </nav>
        <div className="container">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developper.
          </p>
          <button href="">Awesome!</button>
        </div>
      </div>
      <div className="wrapper">
        <article>
          <img src={declarative} />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </article>
        <article>
          <img src={components} />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </article>
        <article>
          <img src={single} />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the componenet's.</p>
        </article>
        <article>
          <img src={jsx} />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </article>
      </div>
    </div>
  );
}

export default App;
