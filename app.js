const login = document.querySelector(".wrapper");
const sign = document.querySelector("#container");
const signBtn = document.querySelector(".signBtn");
const loginBtn = document.querySelector(".loginBtn");
const close1 = document.querySelector(".close1");
const close2 = document.querySelector(".close2");
const enter = document.querySelector(".entry");
const navList = document.querySelector(".nav__list");
const list = document.querySelector(".list");
const menu = document.querySelector(".mobile-menu");

menu.addEventListener("click", function () {
  addClass();
});
enter.addEventListener("click", function () {
  login.classList.add("active");
  navList.classList.remove("active-nav-list"),
    list.classList.remove("active-ul");
});
signBtn.addEventListener("click", function () {
  login.style.display = "none";
  sign.style.display = "block";
  enter.style.display = "none";
});
loginBtn.addEventListener("click", function () {
  if (sign.style.display === "block") {
    sign.style.display = "none";
    login.style.display = "block";
    enter.style.display = "flex";
  }
});

close1.addEventListener("click", function () {
  login.classList.remove("active");
});
close2.addEventListener("click", function () {
  if (sign.style.display === "block") {
    sign.style.display = "none";
    login.style.display = "block";
    login.classList.remove("active");
    enter.style.display = "flex";
  }
});

function addClass() {
  if (navList.classList.length === 1) {
    return (
      navList.classList.add("active-nav-list"), list.classList.add("active-ul")
    );
  } else {
    return (
      navList.classList.remove("active-nav-list"),
      list.classList.remove("active-ul")
    );
  }
}

// sign.style.display = "none";
