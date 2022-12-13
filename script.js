"use strict";

const showFormBtn = document.querySelector(".shareBtn");

const formEl = document.querySelector(".fact-form");

showFormBtn.addEventListener("click", () => {
  formEl.classList.toggle("hidden");
  if (!formEl.classList.contains("hidden")) {
    showFormBtn.textContent = "Close";
  } else {
    showFormBtn.textContent = "Share a fact";
  }
});
