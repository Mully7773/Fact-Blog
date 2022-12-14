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

const App = () => {
  const appTitle = "Today I Learned";

  return (
    <>
      <AppContainer>
        {/* HEADER */}
        <header className="header">
          <div className="header__logo">
            <img src="../img/logo.png" alt="Today I Learned Logo" />
            <h1 className="header__heading">{appTitle}</h1>
          </div>

          <button className="btn btn-large shareBtn">Share a fact</button>
        </header>

        <NewFactForm />

        <main className="main">
          <CategoryFilter />
          <FactList />
        </main>
      </AppContainer>
    </>
  );
};

const NewFactForm = () => {
  return <form className="fact-form">Fact form</form>;
};

const CategoryFilter = () => {
  return <aside className="sidebar">CategoryFilter</aside>;
};

const FactList = () => {
  // Temporary variable
  const facts = initialFacts;
  return (
    <section className="fact-list">
      <ul>
        {facts.map((fact) => {
          return (
            <li key={fact.id} className="fact-list__fact">
              <p>
                {fact.text}
                <a className="source" href={fact.source} target="_blank">
                  (Source)
                </a>
              </p>

              <span
                className="fact-list__tag"
                style={{
                  backgroundColor: CATEGORIES.find(
                    (cat) => cat.name === fact.category
                  ).color,
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
        })}
      </ul>
    </section>
  );
};

export default App;
