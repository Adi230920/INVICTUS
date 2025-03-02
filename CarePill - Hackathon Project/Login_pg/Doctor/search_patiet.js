document.getElementById("searchInput").addEventListener("keyup", function() {
    let input = this.value.toLowerCase();
    let patientCards = document.querySelectorAll(".patient-card");

    patientCards.forEach(card => {
        let name = card.getAttribute("data-name").toLowerCase();
        let disease = card.getAttribute("data-disease").toLowerCase();
        let city = card.getAttribute("data-city").toLowerCase();

        if (name.includes(input) || disease.includes(input) || city.includes(input)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});
