import Fact from "./Fact";
import supabase from "../../supabase";

const Sorter = (props) => {
  async function sortData(e) {
    const currentVoteType = e.target.value;
    // console.log(currentVoteType);

    let sortQuery = supabase.from("facts").select("*");

    if (props.filter !== "all") {
      sortQuery = sortQuery.filter("category", "in", `("${props.filter}")`);
    }

    const { data: facts, error } = await sortQuery
      // .filter("category", "in", '("technology")')

      // .filter("category", "in", `("${props.filter}")`)
      .order(currentVoteType, { ascending: false });

    if (!error) {
      props.setFacts(facts);
    }
  }
  return (
    <form className="sort-form">
      <span className="sort-form__heading">Sort:</span>
      <select
        className="sort-form__select sort-form__select-u"
        onChange={sortData}
      >
        <option value="">Choose vote type</option>
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
      <Sorter setFacts={props.setFacts} filter={props.filter} />
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
