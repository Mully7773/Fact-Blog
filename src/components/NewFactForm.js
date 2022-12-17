import { useState } from "react";
import supabase from "../supabase";

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

// Valid URL helper function
function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

const NewFactForm = (props) => {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const getFact = (e) => {
    console.log(e.target.value);
    if (e.target.value.length <= 200) {
      setText(e.target.value);
    }
  };
  const getSource = (e) => {
    console.log(e.target.value);
    setSource(e.target.value);
  };
  const getCategory = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    // Form validation
    if (text && isValidHttpUrl(source) && category && text.length <= 200) {
      // Create new fact object
      // const submittedFact = {
      //   id: Math.round(Math.random() * 10000000),
      //   text,
      //   source,
      //   category,
      //   votesInteresting: 0,
      //   votesMindblowing: 0,
      //   votesFalse: 0,
      //   createdIn: new Date().getFullYear(),
      // };

      // Upload fact to Supabase and receive new fact object
      setIsUploading(true);
      const { data: submittedFact, error } = await supabase
        .from("facts")
        .insert([{ text, source, category }])
        .select();

      setIsUploading(false);

      // console.log(submittedFact);
      // submittedFact is an array, so we need to get the first element of the array
      // Render fact to array
      if (!error)
        props.setFacts((prevFacts) => {
          return [submittedFact[0], ...prevFacts];
        });
    }

    // Reset input fields
    setText("");
    setSource("");
    setCategory("");

    // Close the form
    props.setToggleForm((prevForm) => (prevForm = false));
  };

  if (isUploading) {
    return (
      <p style={{ textAlign: "right" }} className="message">
        Uploading...
      </p>
    );
  }

  return (
    <form onSubmit={submitForm} className="fact-form">
      <input
        // maxLength={200}
        onChange={getFact}
        className="fact-form__input"
        type="text"
        value={text}
        placeholder="Share a fact with the world..."
        disabled={isUploading}
      />
      <span>{200 - text.length}</span>
      <input
        onChange={getSource}
        className="fact-form__input"
        type="text"
        value={source}
        placeholder="Trustworthy source..."
        disabled={isUploading}
      />
      <select
        value={category}
        onChange={getCategory}
        className="fact-form__select"
        disabled={isUploading}
      >
        <option value="">Choose category:</option>
        {CATEGORIES.map((category) => {
          return (
            <option key={category.name} value={category.name}>
              {category.name.toUpperCase()}
            </option>
          );
        })}
      </select>
      <button className="btn btn-large" disabled={isUploading}>
        Post
      </button>
    </form>
  );
};

export default NewFactForm;
