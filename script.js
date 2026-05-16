// SCROLL ANIMATION

const hiddenElements = document.querySelectorAll("section, .card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});


// DYNAMIC TITLE EFFECT

const titles = [
    "Aspiring Data Scientist",
    "Machine Learning Enthusiast",
    "Backend Developer",
    "Business Analyst"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === titles.length) {
        count = 0;
    }

    currentText = titles[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".hero p").textContent = letter;

    if (letter.length === currentText.length) {

        count++;
        index = 0;

        setTimeout(type, 1500);

    } else {

        setTimeout(type, 80);

    }

})();