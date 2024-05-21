// Function to open the modal
function openModal() {
	document.getElementById("myModal").style.display = "flex";
	setTimeout(() => {
		document.getElementById("modalContent").classList.add("show");
	}, 10);
}

// Function to close the modal
function closeModal() {
	document.getElementById("modalContent").classList.remove("show");
	setTimeout(() => {
		document.getElementById("myModal").style.display = "none";
	}, 300);
}

// Function to handle name submission
function submitName() {
	let person = document.getElementById("modalInput").value;
	let text;
	if (person == null || person == "") {
		text = "User cancelled the prompt.";
	} else {
		text = "Hello " + person + "! How are you today?";
	}
	document.getElementById("demo").innerHTML = text;
	closeModal();
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function (event) {
	if (event.target == document.getElementById("myModal")) {
		closeModal();
	}
};
