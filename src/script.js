const currentYear = new Date().getFullYear();
const copyYear = document.getElementById("curr-year");
copyYear.textContent = currentYear;

const btnNav = document.getElementById("btn-nav");
const navMobile = document.getElementById("nav-mobile");

btnNav.addEventListener("click", () => {
    navMobile.classList.toggle("nav-active");
    }
);