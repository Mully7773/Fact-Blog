import { useEffect, useState } from "react";
import supabase from "./supabase";
import AppContainer from "./components/AppContainer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import NewFactForm from "./components/NewFactForm";
import CategoryFilter from "./components/CategoryFilter";
import FactList from "./components/Facts/FactList";
import "./sass/main.scss";
import "./css/style.css";

// function Counter() {
//   const [counter, setCounter] = useState(0);
//   const increment = () => {
//     setCounter((c) => c + 1);
//   };
//   return (
//     <div>
//       <span style={{ fontSize: "40px" }}>{counter}</span>
//       <button onClick={increment} className="btn btn-large">
//         +1
//       </button>
//     </div>
//   );
// }

const App = () => {
  const appTitle = "Today I Learned";
  const [toggleForm, setToggleForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("all");
  // const [sort, setSort] = useState("");

  useEffect(
    function () {
      async function getFacts() {
        setIsLoading(true);

        let query = supabase.from("facts").select("*");

        if (filter !== "all") {
          query = query.eq("category", filter);
        }

        const { data: facts, error } = await query

          .order("votesInteresting", { ascending: false })
          .limit(1000);

        if (!error) {
          setFacts(facts);
        } else {
          alert("There was a problem getting the data");
        }
        setIsLoading(false);
      }
      getFacts();
    },
    [filter]
  );

  const onToggleForm = () => {
    setToggleForm((prevState) => !prevState);
  };

  return (
    <>
      <AppContainer>
        <Header
          appTitle={appTitle}
          onToggleForm={onToggleForm}
          toggleForm={toggleForm}
        />

        {toggleForm && (
          <NewFactForm setFacts={setFacts} setToggleForm={setToggleForm} />
        )}

        <main className="main">
          <CategoryFilter setFilter={setFilter} />
          {isLoading ? (
            <Loader />
          ) : (
            <FactList facts={facts} setFacts={setFacts} />
          )}
        </main>
      </AppContainer>
    </>
  );
};

export default App;
