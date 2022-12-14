import Fact from "./Fact";
import Sorter from "./Sorter";

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
      <Sorter
        isLoading={props.isLoading}
        setIsLoading={props.setIsLoading}
        setFacts={props.setFacts}
        filter={props.filter}
      />
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
