import AppContainer from "./components/AppContainer";
import "./css/style.css";

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
  return <section className="fact-list">Facts List</section>;
};

export default App;
