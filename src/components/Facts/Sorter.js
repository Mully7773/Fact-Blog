import supabase from "../../supabase";
import Loader from "../Loader";

const Sorter = (props) => {
  async function sortData(e) {
    props.setIsLoading(true);
    const currentVoteType = e.target.value;
    // Prevent error from clicking on 'Choose vote type'
    if (!currentVoteType) return;

    let sortQuery = supabase.from("facts").select("*");

    // Conditionally render category filtered sort when 'all' is not the current state snapshot (add .filter to the chain of methods)
    if (props.filter !== "all") {
      sortQuery = sortQuery.filter("category", "in", `("${props.filter}")`);
    }

    const { data: facts, error } = await sortQuery.order(currentVoteType, {
      ascending: false,
    });

    if (!error) {
      props.setFacts(facts);
    }

    props.setIsLoading(false);
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
      {props.isLoading ? <Loader /> : null}
    </form>
  );
};

export default Sorter;
