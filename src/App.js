import { useState } from "react";
import AppContainer from "./components/AppContainer";
import "./css/style.css";

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function Counter() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((c) => c + 1);
  };
  return (
    <div>
      <span style={{ fontSize: "40px" }}>{counter}</span>
      <button onClick={increment} className="btn btn-large">
        +1
      </button>
    </div>
  );
}

const App = () => {
  const appTitle = "Today I Learned";
  const [toggleForm, setToggleForm] = useState(false);

  const onToggleForm = () => {
    setToggleForm((prevState) => !prevState);
  };

  return (
    <>
      <AppContainer>
        {/* HEADER */}
        <Header
          appTitle={appTitle}
          onToggleForm={onToggleForm}
          toggleForm={toggleForm}
        />

        {toggleForm && <NewFactForm />}

        <main className="main">
          <CategoryFilter />
          <FactList />
        </main>
      </AppContainer>
    </>
  );
};

const Header = ({ appTitle, onToggleForm, toggleForm }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="../img/logo.png" alt="Today I Learned Logo" />
        <h1 className="header__heading">{appTitle}</h1>
      </div>
      <button onClick={onToggleForm} className="btn btn-large shareBtn">
        {toggleForm ? "Close" : "Share a fact"}
      </button>
    </header>
  );
};

const NewFactForm = () => {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");

  const getFact = (e) => {
    console.log(e.target.value);

    setText(e.target.value);
  };
  const getSource = (e) => {
    console.log(e.target.value);
    setSource(e.target.value);
  };
  const getCategory = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const submittedFact = {
      fact: text,
      source: source,
      category: category,
    };
    console.log(submittedFact);
    setText("");
    setSource("");
    setCategory("");
  };

  return (
    <form onSubmit={submitForm} className="fact-form">
      <input
        maxLength={200}
        onChange={getFact}
        className="fact-form__input"
        type="text"
        value={text}
        placeholder="Share a fact with the world..."
      />
      <span>{200 - text.length}</span>
      <input
        onChange={getSource}
        className="fact-form__input"
        type="text"
        value={source}
        placeholder="Trustworthy source..."
      />
      <select
        value={category}
        onChange={getCategory}
        className="fact-form__select"
      >
        <option value="">Choose category:</option>
        {CATEGORIES.map((category) => {
          return (
            <option key={category.name} value={category.name}>
              {category.name.toUpperCase()}
            </option>
          );
        })}
      </select>
      <button className="btn btn-large">Post</button>
    </form>
  );
};

const CategoryFilter = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li className="sidebar__category">
          <button className="btn btn-all-categories">All</button>
        </li>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.name} className="sidebar__category">
              <button
                className="btn btn-category"
                style={{ backgroundColor: category.color }}
              >
                {category.name}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

const FactList = () => {
  // Temporary variable
  const facts = initialFacts;
  return (
    <section className="fact-list">
      <ul>
        {facts.map((fact) => {
          return <Fact key={fact.id} fact={fact} />;
        })}
      </ul>
      <p>There are {facts.length} facts in the database. Add your own!</p>
    </section>
  );
};

const Fact = ({ fact }) => {
  return (
    <li className="fact-list__fact">
      <p>
        {fact.text}
        <a className="source" href={fact.source} target="_blank">
          (Source)
        </a>
      </p>

      <span
        className="fact-list__tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)
            .color,
        }}
      >
        {fact.category}
      </span>

      <div className="fact-list__vote-buttons">
        <button>👍 {fact.votesInteresting}</button>
        <button>🤯 {fact.votesMindblowing}</button>
        <button>⛔️ {fact.votesFalse}</button>
      </div>
    </li>
  );
};

export default App;
