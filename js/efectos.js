const form = document.querySelector("form");

form.addEventListener("input", function () {
	const email = document.querySelector('input[type="email"]');
	const password = document.querySelector('input[type="password"]');
	const submit = document.querySelector('input[type="submit"]');

	if (email.value != "" && password.value != "") {
		submit.removeAttribute("disabled");
		submit.setAttribute("style", "opacity: 1");
	} else {
		submit.setAttribute("disabled", true);
		submit.setAttribute("style", "opacity: 0.5");
	}
});
