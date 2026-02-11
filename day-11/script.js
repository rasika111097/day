// Tabs interaction
const tabs = document.querySelectorAll(".tabs button");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    alert(tab.innerText + " section clicked");
  });
});

// Buttons interaction
const messageBtn = document.querySelector(".btn");
const contactBtn = document.querySelector(".btn.primary");

if (messageBtn) {
  messageBtn.addEventListener("click", () => {
    alert("Opening chat with Rasika Ranjith...");
  });
}

if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    alert("Viewing contacts...");
  });
}
