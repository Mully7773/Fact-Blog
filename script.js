"use strict";

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const showFormBtn = document.querySelector(".shareBtn");

const factsList = document.querySelector(".sidebar__facts-list");

const formEl = document.querySelector(".fact-form");

factsList.innerHTML = "";

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
      <span class="fact-list__tag" style="background-color: #3b82f6"
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
createFactsList(initialFacts);

showFormBtn.addEventListener("click", () => {
  formEl.classList.toggle("hidden");
  if (!formEl.classList.contains("hidden")) {
    showFormBtn.textContent = "Close";
  } else {
    showFormBtn.textContent = "Share a fact";
  }
});
