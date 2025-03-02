function takeMedicine(button) {
    button.innerText = "✅ Taken";
    button.style.background = "#28a745";
    button.disabled = true;
}

// Simulating a pop-up for medicine reminder
function showPopup() {
    document.getElementById("medicine-popup").style.display = "block";
}

// Close pop-up
function closePopup() {
    document.getElementById("medicine-popup").style.display = "none";
}

// Simulating a reminder for a scheduled medicine
setTimeout(showPopup, 5000); // Show reminder after 5 seconds
