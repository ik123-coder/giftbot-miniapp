const tg = window.Telegram.WebApp;
tg.expand();

const user = tg.initDataUnsafe.user;

if (user) {
  document.getElementById("firstName").innerText = user.first_name;

  if (user.photo_url) {
    document.getElementById("avatar").src = user.photo_url;
  }
}

const toast = document.getElementById("toast");

function showToast() {
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

// Карточки меню
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const page = card.dataset.page;

    if (page !== "tasks") {
      showToast();
    }
  });
});

// Tabbar
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    const name = tab.dataset.tab;

    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    if (name !== "home" && name !== "tasks" && name !== "profile") {
      showToast();
    }
  });
});