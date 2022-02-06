// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

const form = document.querySelector("#signup");

const userReq = "Por favor rellene el usuario";
const passReq = "Por favor rellene la contraseña";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let userOk = hasValue(form.elements["user"], userReq);
	let passOk = hasValue(form.elements["password"], passReq);
	// if valid, submit the form.
	if (userOk && passOk) {
		alert("DEMO: NO SE HA ENVIADO NINGUN FORMULARIO\n\nUsuario es: "+form.elements["user"].value+"\nContraseña es: "+form.elements["password"].value);
	}
});
