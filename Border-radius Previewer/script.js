const box = document.getElementById("box");
const inputs = document.querySelectorAll("input");
const css_code = document.getElementById("css_code");
const copy_button = document.getElementById("copy_btn");

function updateBorderRadius() {
	const top_left = +document.getElementById("top_left").value;
	const top_right = +document.getElementById("top_right").value;
	const bottom_left = +document.getElementById("bottom_left").value;
	const bottom_right = +document.getElementById("bottom_right").value;
	const top_left_vertical = +document.getElementById("top_left_vertical").value;
	const top_right_vertical =
		+document.getElementById("top_right_vertical").value;
	const bottom_left_vertical = +document.getElementById("bottom_left_vertical")
		.value;
	const bottom_right_vertical = +document.getElementById(
		"bottom_right_vertical"
	).value;

	let borderRadiusValue = "";

	if (
		top_left_vertical === 0 &&
		top_right_vertical === 0 &&
		bottom_right_vertical === 0 &&
		bottom_left_vertical === 0
	) {
		borderRadiusValue = `${top_left}px ${top_right}px ${bottom_right}px ${bottom_left}px`;
	} else {
		borderRadiusValue = `${top_left}px ${top_right}px ${bottom_right}px ${bottom_left}px / ${top_left_vertical}px ${top_right_vertical}px ${bottom_right_vertical}px ${bottom_left_vertical}px`;
	}

	box.style.borderRadius = borderRadiusValue;

	css_code.textContent = `border-radius: ${borderRadiusValue};`;
}

inputs.forEach((input) => input.addEventListener("input", updateBorderRadius));

copy_btn.addEventListener("click", () => {
	navigator.clipboard.writeText(css_code.textContent);
	copy_btn.textContent = "Copied";
	setTimeout(() => (copy_btn.textContent = "Copy CSS"), 1500);
});
