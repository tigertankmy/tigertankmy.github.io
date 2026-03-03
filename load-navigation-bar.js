const links = {
	"/": "Home",
	"/register": "Register",
	"/resources": "Resources",
	"/faq": "FAQ",
	"sponsors-and-partners": "Sponsors & partners",
};

const ul = document.createElement("ul");

for (const [href, name] of Object.entries(links)) {
	const li = document.createElement("li");
	const a = document.createElement("a");
	a.href = href;
	a.textContent = name;

	li.appendChild(a);
	ul.appendChild(li);
}

const nav = document.querySelector("nav");
nav.appendChild(ul);
