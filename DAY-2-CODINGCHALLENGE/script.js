// Tabs
const tabs = document.querySelectorAll(".tabs button");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    console.log(tab.innerText + " tab clicked");
  });
});

// Buttons
const messageBtn = document.querySelector(".message-btn");
const contactBtn = document.querySelector(".contact-btn");

messageBtn.addEventListener("click", () => {
  alert("Opening chat...");
});

contactBtn.addEventListener("click", () => {
  alert("Viewing contacts...");
});
