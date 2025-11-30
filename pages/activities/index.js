document.querySelectorAll(".card").forEach((card) => {
    const smallText = card.querySelector(".smallText");
    const btnToggle = card.querySelector(".btnToggle");

    btnToggle.addEventListener("click", () => {
        smallText.classList.toggle("expanded");

        if (smallText.classList.contains("expanded")) {
            btnToggle.textContent = "Show less";
        } else {
            btnToggle.textContent = "Show more";
        }
    });
});
