import "./css/style.css";

const App = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="../img/logo.png" alt="Today I Learned Logo" />
        <h1 className="header__heading">Today I Learned</h1>
      </div>

      <button className="btn btn-large shareBtn">Share a fact</button>
    </header>
  );
};

export default App;
