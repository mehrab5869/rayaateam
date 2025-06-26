document.addEventListener("DOMContentLoaded", function() {
    var toggleDarkModeBtn = document.querySelector("#toggleDarkMode");
    var moonIcon = document.querySelector("#moonIcon");
    var sunIcon = document.querySelector("#sunIcon");
    var mobileMenu = document.querySelector("#mobileMenu");
    var toggleMenuBtn = document.querySelector("#toggleMenu");
    var closeIcon = document.querySelector("#closeIcon");
    var menuIcon = document.querySelector("#menuIcon");
    var modals = document.querySelectorAll(".modal");
    var modalCloseButtons = document.querySelectorAll(".btn-close");
    var modalButtons = document.querySelectorAll(".btn-modal");

    function updateThemeIcons() {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.add("dark");
            moonIcon.style.display = "none";
            sunIcon.style.display = "block";
        } else {
            document.documentElement.classList.remove("dark");
            moonIcon.style.display = "block";
            sunIcon.style.display = "none";
        }
    }

    function toggleDarkMode() {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        }
        updateThemeIcons();
    }

    if (!localStorage.theme || (localStorage.theme !== "dark" && localStorage.theme !== "light")) {
        localStorage.theme = "light";
    }

    updateThemeIcons();

    toggleDarkModeBtn.addEventListener("click", toggleDarkMode);

    toggleMenuBtn.addEventListener("click", function() {
        if (toggleMenuBtn.dataset.toggle === "false") {
            toggleMenuBtn.dataset.toggle = "true";
            mobileMenu.style.display = "block";
            menuIcon.style.display = "none";
            closeIcon.style.display = "flex";
        } else {
            toggleMenuBtn.dataset.toggle = "false";
            mobileMenu.style.display = "none";
            menuIcon.style.display = "block";
            closeIcon.style.display = "none";
        }
    });

    window.addEventListener("keydown", function(event) {
        if (event.key.toLowerCase() === "n") {
            toggleDarkMode();
        }
    });

    modalButtons.forEach(function(button) {
        button.onclick = function(event) {
            event.preventDefault();
            var modalId = event.target.getAttribute("data-href");
            var modal = document.querySelector(modalId);
            if (modal) modal.style.display = "block";
        };
    });

    modalCloseButtons.forEach(function(button) {
        button.onclick = function() {
            modals.forEach(function(modal) {
                if (modal.style) modal.style.display = "none";
            });
        };
    });

    window.onclick = function(event) {
        if (event.target.classList.contains("modal-area")) {
            modals.forEach(function(modal) {
                if (modal.style) modal.style.display = "none";
            });
        }
    };
});
