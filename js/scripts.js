const searchForm  = document.querySelector(".search-hostel-button");
const search = document.querySelector(".search-form");
const form = search.querySelector("form");
const dateIn = search.querySelector("[name = date-in]");
const dateOut = search.querySelector("[name = date-out]");
const adult = search.querySelector("[name = adult]");

searchForm.addEventListener("click", function(e) {
  e.preventDefault();
  if (search.classList.contains("form-show")) {
    search.classList.remove("form-show");
  } else {
    search.classList.add("form-show");
    dateIn.focus();
  }
});

form.addEventListener("submit", function(e) {
  if (!dateIn.value || !dateOut.value || !adult.value) {
    e.preventDefault();
    alert("Заполните обязательные поля");
  }
})

window.addEventListener("keydown", function(e) {
  if (e.keyCode === 27) {
    if (search.classList.contains("form-show")) {
      e.preventDefault();
      search.classList.remove("form-show");
    }
  }
})
