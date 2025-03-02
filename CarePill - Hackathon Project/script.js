let currentTab = 0;
showTab(currentTab);

function showTab(n) {
    let tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab, index) => {
        tab.style.display = index === n ? "block" : "none";
    });
}

function nextStep(step) {
    let tabs = document.querySelectorAll(".tab");
    tabs[currentTab].classList.remove("active");

    if (step === "patient") currentTab = 1;
    else if (step === "doctor") currentTab = 1;
    else if (step === "details") currentTab = 2;
    else if (step === "disease") currentTab = 3;
    else if (step === "medicines") currentTab = 4;

    tabs[currentTab].classList.add("active");
}
