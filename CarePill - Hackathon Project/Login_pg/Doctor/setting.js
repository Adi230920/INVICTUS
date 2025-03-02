document.addEventListener("DOMContentLoaded", function () {
    const backupButton = document.getElementById("backupData");
    const restoreButton = document.getElementById("restoreData");
    const restoreFileInput = document.getElementById("restoreFile");

    // Sample Data (Simulating Patient Records)
    const sampleData = {
        doctor: "Dr. John Doe",
        email: "johndoe@example.com",
        patients: [
            { name: "Alice Johnson", age: 56, condition: "Diabetes", lastVisit: "2025-02-28" },
            { name: "Bob Smith", age: 47, condition: "Hypertension", lastVisit: "2025-02-25" }
        ],
        notifications: true,
        theme: "light",
    };

    // Download Backup
    backupButton.addEventListener("click", function () {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(sampleData, null, 2));
        const downloadAnchor = document.createElement("a");
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "carepill_backup.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        alert("✅ Backup Downloaded Successfully!");
    });

    // Restore Data
    restoreButton.addEventListener("click", function () {
        restoreFileInput.click();
    });

    restoreFileInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                try {
                    const restoredData = JSON.parse(e.target.result);
                    console.log("Restored Data:", restoredData);
                    alert("✅ Data Restored Successfully!");
                } catch (error) {
                    alert("❌ Invalid Backup File!");
                }
            };
            reader.readAsText(file);
        }
    });
});
