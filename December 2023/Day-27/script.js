const bookmarkEl = document.getElementById("card--bookmark");
const bookmarkIcon = document.getElementById('bookmark-icon');


bookmarkEl.addEventListener("click", () => {
    bookmarkIcon.classList.toggle("bxs-bookmark")
}
);