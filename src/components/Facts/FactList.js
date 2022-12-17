import Fact from "./Fact";
import supabase from "../../supabase";

const Sorter = (props) => {
  async function sortData(e) {
    // e.preventDefault();
    const currentVoteType = e.target.value;
    console.log(currentVoteType);
    const { data: facts, error } = await supabase
      .from("facts")
      .select("*")
      .order(currentVoteType, { ascending: false });

    if (!error) {
      props.setFacts(facts);
    }
  }
  return (
    <form className="sort-form">
      <select
        className="sort-form__select-sort"
        style={{ height: "4rem", width: "8rem" }}
        onChange={sortData}
      >
        <option value="">Sort</option>
        <option value="votesInteresting">Interesting</option>
        <option value="votesMindblowing">Mindblowing</option>
        <option value="votesFalse">Disputed</option>
      </select>
    </form>
  );
};

const FactList = (props) => {
  if (props.facts.length === 0) {
    return (
      <p className="message">
        There are currently no facts for this category. Try adding one!
      </p>
    );
  }

  console.log(props);
  return (
    <section className="fact-list">
      <Sorter setFacts={props.setFacts} />
      <ul>
        {props.facts.map((fact) => {
          return <Fact setFacts={props.setFacts} key={fact.id} fact={fact} />;
        })}
      </ul>
      <p>There are {props.facts.length} facts in the database. Add your own!</p>
    </section>
  );
};

export default FactList;
