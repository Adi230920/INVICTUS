document.addEventListener("DOMContentLoaded", function () {
    const downloadButtons = document.querySelectorAll(".download-btn");
    const sendButtons = document.querySelectorAll(".send-btn");
    const searchInput = document.getElementById("searchPatient");
    const reportCards = document.querySelectorAll(".report-card");

    // Download Report as PDF
    downloadButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("📥 Downloading Report...");
        });
    });

    // Send Report to Family
    sendButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("📨 Report sent to family doctor and relatives!");
        });
    });

    // Search Functionality
    searchInput.addEventListener("input", function () {
        const searchValue = this.value.toLowerCase();

        reportCards.forEach(card => {
            const name = card.querySelector("h3").innerText.toLowerCase();
            const disease = card.querySelector("p:nth-child(2)").innerText.toLowerCase();
            
            if (name.includes(searchValue) || disease.includes(searchValue)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
});
