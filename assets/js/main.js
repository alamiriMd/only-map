import { coordinates } from "./data1.js";
const body = document.body;
const contentContainer = document.getElementById("contentContainer")
const mainBtn = document.getElementById("mainBtn");

function firstLoadHandler() {
	coordinates.forEach(function (data, index) {
		const buttonClone = mainBtn.cloneNode(true);
		buttonClone.classList.add(data.class);
		buttonClone.querySelector(".btnText").textContent = data.text;
		buttonClone.id = `btn_${index}`;
		buttonClone.style.left = data.coordinates.x + "%";
		buttonClone.style.top = data.coordinates.y + "%";
		contentContainer.appendChild(buttonClone);
	});
}

body.addEventListener("click", function (event) {
	const clickedButton = event.target.closest(".btn");
	if (clickedButton) {
		toggleButtonState(clickedButton);
	} else {
		const allButtons = body.querySelectorAll(".btn");
		allButtons.forEach((button) => {
			button.classList.remove("open");
			const verticalLine = button.querySelector(".verticalLine");
			const buttonText = button.querySelector(".btnText");
			buttonText.classList.remove("hidden");
			verticalLine.classList.remove("hidden");
		});
	}
});

function toggleButtonState(button) {
	const isButtonOpen = button.classList.toggle("open");
	const verticalLine = button.querySelector(".verticalLine");
	const buttonText = button.querySelector(".btnText");

	buttonText.classList.toggle("hidden", isButtonOpen);
	verticalLine.classList.toggle("hidden", isButtonOpen);
}

document.addEventListener("DOMContentLoaded", firstLoadHandler);
