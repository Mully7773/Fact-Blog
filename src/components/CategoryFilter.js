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

const CategoryFilter = ({ setFilter }) => {
  const filterChangeHandler = (e) => {
    const filterCategory = e.target.value;
    setFilter(filterCategory);
    console.log(filterCategory);
  };
  return (
    <aside className="sidebar">
      <ul>
        <li className="sidebar__category">
          <button
            value={"all"}
            onClick={filterChangeHandler}
            className="btn btn-all-categories"
          >
            All
          </button>
        </li>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.name} className="sidebar__category">
              <button
                value={category.name}
                onClick={filterChangeHandler}
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

export default CategoryFilter;
