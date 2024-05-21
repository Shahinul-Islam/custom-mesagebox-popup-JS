// Function to open the modal
function openModal() {
	document.getElementById("myModal").style.display = "flex"; // Show the modal
	setTimeout(() => {
		document.getElementById("modalContent").classList.add("show"); // Add show class for transition effect
	}, 10);
}

// Function to close the modal
function closeModal() {
	document.getElementById("modalContent").classList.remove("show"); // Remove show class for transition effect
	setTimeout(() => {
		document.getElementById("myModal").style.display = "none"; // Hide the modal
	}, 300);
}

// Function to handle credential submission
function submitCredentials() {
	let email = document.getElementById("emailInput").value; // Get email input value
	let password = document.getElementById("passwordInput").value; // Get password input value
	let text;
	// Validate email and password
	if (email == null || email == "" || password == null || password == "") {
		text = "Please enter both email and password."; // Error message if inputs are empty
	} else {
		text = "Email: " + email + "<br>Password: " + password; // Success message with entered credentials
	}
	document.getElementById("demo").innerHTML = text; // Display the message
	closeModal(); // Close the modal
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function (event) {
	if (event.target == document.getElementById("myModal")) {
		closeModal(); // Close the modal
	}
};
