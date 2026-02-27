const tg = window.Telegram.WebApp;
tg.expand();

const user = tg.initDataUnsafe.user;

if (user) {
  document.getElementById("firstName").innerText = user.first_name;
  if (user.photo_url) {
    document.getElementById("avatar").src = user.photo_url;
  }
}

const screens = document.querySelectorAll(".screen");
const tabs = document.querySelectorAll(".tab");
const toast = document.getElementById("toast");

let current = "home";

function showToast() {
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}

function navigate(target) {
  if (target === current) return;

  const currentScreen = document.getElementById(current);
  const nextScreen = document.getElementById(target);

  if (!nextScreen) {
    showToast();
    return;
  }

  currentScreen.classList.remove("active");
  currentScreen.classList.add("exit-left");

  nextScreen.classList.add("active");

  setTimeout(() => {
    currentScreen.classList.remove("exit-left");
  }, 300);

  current = target;
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    if (target === "shop" || target === "friends") {
      showToast();
    }

    navigate(target);
  });
});

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const page = card.dataset.page;

    if (page === "tasks") {
      navigate("tasks");
      tabs.forEach(t => t.classList.remove("active"));
      document.querySelector('[data-tab="tasks"]').classList.add("active");
    } else {
      showToast();
    }
  });
});