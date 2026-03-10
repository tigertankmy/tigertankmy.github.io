const ARROW_UP_ICON_PATH = "/assets/icons/keyboard_arrow_up_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
const ARROW_DOWN_ICON_PATH = "/assets/icons/keyboard_arrow_down_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";

const NAVIGATION_LINKS = {
	"/": [
		"Home",
	],
	"/register": [
		"Register",
	],
	"/resources": [
		"Resources",
	],
	"/faq": [
		"FAQ",
	],
	"/sponsors-and-partners": [
		"Sponsors & partners",
	],
};

const buttonDropdownNavbarToggle = document.createElement("button");
const buttonText = document.createElement("span");
const arrowIcon = document.createElement("img");
arrowIcon.src = ARROW_DOWN_ICON_PATH;
buttonText.textContent = "Home";

buttonDropdownNavbarToggle.appendChild(buttonText);
buttonDropdownNavbarToggle.appendChild(arrowIcon);

buttonDropdownNavbarToggle.id = "button-dropdown-navbar-toggle";

const ul = document.createElement("ul");

buttonDropdownNavbarToggle.addEventListener("click", () => {
	if (ul.style.display === "block") {
		arrowIcon.src = ARROW_DOWN_ICON_PATH;
		ul.style.display = "none";
		return;
	}
	ul.style.display = "block";
	arrowIcon.src = ARROW_UP_ICON_PATH;
});


for (const [path, [name]] of Object.entries(NAVIGATION_LINKS)) {
	const li = document.createElement("li");
	if (window.location.pathname === path) li.classList.add("current-page");

	const a = document.createElement("a");
	a.href = path;

	const span = document.createElement("span");
	span.classList.add("nav-link-anchor-text");
	span.textContent = name;

	a.appendChild(span);
	li.appendChild(a);
	ul.appendChild(li);
}

const nav = document.querySelector("nav");
nav.appendChild(buttonDropdownNavbarToggle);
nav.appendChild(ul);
