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

export default Header;
