const words = [
"Python Developer",
"Web Developer",
"MCA Student",
"Problem Solver"
];

let i = 0;
let j = 0;
let current = "";
let deleting = false;

function type() {
    current = words[i];

    if (!deleting) {
        document.getElementById("typing").textContent =
            current.substring(0, j++);
        if (j > current.length) {
            deleting = true;
            setTimeout(type, 1200);
            return;
        }
    } else {
        document.getElementById("typing").textContent =
            current.substring(0, j--);
        if (j === 0) {
            deleting = false;
            i = (i + 1) % words.length;
        }
    }

    setTimeout(type, deleting ? 60 : 120);
}

type();