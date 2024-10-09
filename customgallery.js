const credentials = {
            "Harshsri23": "har0293",
            "Dhruvpach21": "pach8523",
            "Ishugup22": "ish4569",
            "Princekush24": "prin7532",
            "Divyanshu25" : "div9027",
            "Yashdar26" : "yas4856",
            "Devanshi32" : "deva4585"
        };

        // Disable right-click
        document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });

        // Disable common keyboard shortcuts (F12, Ctrl+Shift+I, Ctrl+U)
        document.onkeydown = function (e) {
            if (e.keyCode == 123 || 
                (e.ctrlKey && e.shiftKey && e.keyCode == 73) || 
                (e.ctrlKey && e.keyCode == 85)) {
                return false;
            }
        };

        // Redirect to gallery page if already logged in
        if (sessionStorage.getItem("loggedIn") === "true") {
            window.location.href = "maingallery";
        }

        document.getElementById("loginButton").addEventListener("click", function () {
            const username = document.getElementById("usernameInput").value.trim();
            const password = document.getElementById("passwordInput").value.trim();
            const errorMessage = document.getElementById("errorMessage");
            const loadingSpinner = document.getElementById("loadingSpinner");

            // Reset error message
            errorMessage.textContent = '';

            // Show loading spinner
            loadingSpinner.style.display = "block";

            setTimeout(() => {
                // Hide loading spinner
                loadingSpinner.style.display = "none";

                if (credentials[username] && credentials[username] === password) {
                    // Store session
                    sessionStorage.setItem("loggedIn", "true");
                    sessionStorage.setItem("username", username);

                    // Redirect to gallery page
                    window.location.href = "maingallery";
                } else {
                    errorMessage.textContent = "Invalid username or password.";
                }
            }, 2000);
        });
