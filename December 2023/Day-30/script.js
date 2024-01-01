const dropdownBtn = document.getElementById("dropdown-btn")
const dropdownBtnTwo = document.getElementById("dropdown-btn-two")
const dropdownContent = document.querySelector(".dropdown-content")
const dropdownContentTwo = document.querySelector(".two")

dropdownBtn.addEventListener("click", () => {
    dropdownContent.classList.toggle("show")
})

dropdownBtnTwo.addEventListener("click", () => {
    dropdownContentTwo.classList.toggle("show")
})

document.addEventListener('click', (e) => {
    if (!e.target.closest('#dropdown-btn')) dropdownContent.classList.remove("show")
})

document.addEventListener('click', (e) => {
    if (!e.target.closest('#dropdown-btn-two')) dropdownContentTwo.classList.remove("show")
})