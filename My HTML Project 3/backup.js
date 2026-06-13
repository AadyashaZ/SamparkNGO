//LOADING SCREEN//
const facts = [
    "🩷 Every child deserves love, care, and a safe place to live.",
    "📚 Education can break the cycle of poverty.",
    "🌱 Small acts of kindness can change lives.",
    "🤝 Volunteers make communities stronger.",
    "🌍 Together we can make a difference."
];

document.getElementById("fact").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * facts.length);
    this.textContent = facts[randomIndex];
});

setInterval(() => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").textContent = facts[randomIndex];
}, 2000);

window.addEventListener("load", function () {
    setTimeout(function () {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";
        setTimeout(function () {
            loader.style.display = "none";
        }, 1000);
    }, 8000);
});

//HIDDEN ELEMENTS//
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));

//QUOTE GENERATOR//
const quotes = [
    "💛 No act of kindness, no matter how small, is ever wasted.",
    "🌱 A single seed of kindness can grow into a forest of hope.",
    "🤝 Together, we can make a difference.",
    "✨ Kindness is free. Sprinkle it everywhere.",
    "🌍 Be the reason someone believes in good people.",
    "😊 Small actions create big changes.",
    "❤️ Helping one person might not change the world, but it could change their world.",
    "☀️ Carry sunshine into someone's life today.",
    "🌼 Compassion is the heart of every strong community.",
    "💫 Every kind word plants a seed of happiness."
];

document.getElementById("quoteBtn").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
});

//GO TO TOP BUTTON//
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//DONATION POPUP//
function openPopup() {
    document.getElementById("donatePopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("donatePopup").style.display = "none";
}

function payNow() {

    const name = document.getElementById("donorName").value;
    const email = document.getElementById("donorEmail").value;
    const amount = document.getElementById("donationAmount").value;

    if (!name || !email || !amount) {

        alert("Please fill all fields.");
        return;
    }

    alert(
        "Thank you " + name +
        "! Payment gateway will be connected here. ❤️"
    );
}

//VOLUNTEERING POPUP//
function openVolunteerPopup() {
    document.getElementById("volunteerPopup").style.display = "flex";
}

function closeVolunteerPopup() {
    document.getElementById("volunteerPopup").style.display = "none";
}

function submitVolunteer() {

    const name =
        document.getElementById("volunteerName").value;

    const phone =
        document.getElementById("volunteerPhone").value;

    if (!name || !phone) {
        alert("Please fill all fields 😊");
        return;
    }

    document.querySelector("#volunteerPopup .popup-content").innerHTML = `
        <h2>🎉 Thank You!</h2>

        <p>
            Thank you for being a volunteer, ${name}! 🤝❤️🌟
        </p>

        <p>
            Welcome to the Sampark family 💛😊
        </p>
    `;
}

//DARK MODE//
const darkModeBtn = document.getElementById("darkModeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkModeBtn.textContent = "☀️";
}

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        darkModeBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        darkModeBtn.textContent = "🌙";
    }

});

//HELP BUTTON//
function openHelpPopup() {
    document.getElementById("helpPopup").style.display = "flex";
}

function closeHelpPopup() {
    document.getElementById("helpPopup").style.display = "none";
}

function submitHelp() {

    const name = document.getElementById("helpName").value;
    const phone = document.getElementById("helpPhone").value;
    const location = document.getElementById("helpLocation").value;
    const type = document.getElementById("helpType").value;
    const description = document.getElementById("helpDescription").value;

    if (
        !name ||
        !phone ||
        !location ||
        !type ||
        !description
    ) {
        alert("Please fill all fields 😊");
        return;
    }

    document.querySelector("#helpPopup .popup-content").innerHTML = `
        <h2>✅ Request Submitted</h2>
        <p>
            Thank you, ${name}! ❤️
        </p>
        <p>
            Your request has been received.
        </p>
        <p>
            Our Sampark team will contact you soon. 🤝
        </p>
        <p>
            Stay strong 🌟
        </p>
    `;
}