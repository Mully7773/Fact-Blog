const API = config.APIKEY;
const AUTH = config.AUTHORIZATION;

const showFormBtn = document.querySelector(".shareBtn");

const factsList = document.querySelector(".sidebar__facts-list");

const formEl = document.querySelector(".fact-form");

factsList.innerHTML = "";

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

const filteredCategory = CATEGORIES.find((cat) => cat.name === "society").color;
console.log(filteredCategory);

// Load data from Supabase

async function loadFacts() {
  const res = await fetch(
    "https://uvhufftzsxoaxjmpcooi.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey: API,
        authorization: AUTH,
      },
    }
  );
  const data = await res.json();
  console.log(data);
  createFactsList(data);
}

loadFacts();

const createFactsList = (dataArray) => {
  const html = dataArray
    .map((el) => {
      return `<li class="fact-list__fact">
      <p>
       ${el.text}
        <a
          class="source"
          href="${el.source}"
          target="_blank"
          >(Source)</a
        >
      </p>
      <span class="fact-list__tag" style="background-color: ${
        CATEGORIES.find((cat) => cat.name === el.category).color
      }"
        >${el.category}</span
      >
      <div class="fact-list__vote-buttons">
        <button>👍 ${el.votesInteresting}</button>
        <button>🤯 ${el.votesMindblowing}</button>
        <button>⛔️ ${el.votesFalse}</button>
      </div>
      </li>
    `;
    })
    .join("");
  factsList.insertAdjacentHTML("afterbegin", html);
};

showFormBtn.addEventListener("click", () => {
  formEl.classList.toggle("hidden");
  if (!formEl.classList.contains("hidden")) {
    showFormBtn.textContent = "Close";
  } else {
    showFormBtn.textContent = "Share a fact";
  }
});
