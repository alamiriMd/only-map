import { coordinates } from "./data1.js";
const body = document.body;
const contentContainer = document.getElementById("contentContainer")
const mainBtn = document.getElementById("mainBtn");

function buttonToggle(button) {
	const isButtonOpen = button.classList.toggle("open");
	const verticalLine = button.querySelector(".verticalLine");
	const buttonText = button.querySelector(".btnText");
	buttonText.classList.toggle("hidden", isButtonOpen);
	verticalLine.classList.toggle("hidden", isButtonOpen);
}

function firstLoadHandler() {
	coordinates.forEach(function (data, index) {
		const newButton = mainBtn.cloneNode(true);
		newButton.classList.add(data.class);
		newButton.querySelector(".btnText").textContent = data.text;
		newButton.id = `btn_${index}`;
		newButton.style.left = `${data.coordinates.x}%`;
		newButton.style.top =  `${data.coordinates.y}%`;
		contentContainer.appendChild(newButton);
	});
}

body.addEventListener("click", function (event) {
	const clickedButton = event.target.closest(".btn");
	if (clickedButton) {
		buttonToggle(clickedButton);
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



document.addEventListener("DOMContentLoaded", firstLoadHandler);
