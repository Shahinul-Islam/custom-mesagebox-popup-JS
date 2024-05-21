// Function to open the confirm modal
function openConfirm() {
	document.getElementById("confirmModal").style.display = "flex";
	setTimeout(() => {
		document.getElementById("confirmContent").classList.add("show");
	}, 10);
}

// Function to close the confirm modal
function closeConfirm() {
	document.getElementById("confirmContent").classList.remove("show");
	setTimeout(() => {
		document.getElementById("confirmModal").style.display = "none";
	}, 300);
}

// Function to handle confirm result
function confirmResult(result) {
	let resultText = result ? "You clicked Yes!" : "You clicked No!";
	document.getElementById("confirmResult").innerText = resultText;
	closeConfirm();
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function (event) {
	if (event.target == document.getElementById("confirmModal")) {
		closeConfirm();
	}
};
