document.addEventListener("DOMContentLoaded", function () {
    const dismissButtons = document.querySelectorAll(".dismiss-btn");
    const notifyButtons = document.querySelectorAll(".notify-btn");

    dismissButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".alert-card").remove();
        });
    });

    notifyButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("🚀 Notification sent to family via WhatsApp and Email!");
        });
    });
});
