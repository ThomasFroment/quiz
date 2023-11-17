const arr = [
    {
        q: "What is the chemical symbol for water?",
        a: "H2O",
        l: 3,
    },
    {
        q: "What is the largest mammal in the world?",
        a: "Blue whale",
        l: 3,
    },
    {
        q: "What is the sum of angles in a triangle?",
        a: "180°",
        l: 3,
    },
    {
        q: "What does the acronyme 'WWW' stand for?",
        a: "World Wide Web",
        l: 3,
    },
    {
        q: "Who is known as the 'King of Pop'?",
        a: "Michael Jackson",
        l: 3,
    },
    {
        q: "Who painted the famous artwork 'Starry Night'?",
        a: "Vincent van Gogh",
        l: 3,
    },
    {
        q: "What is the process in which plants make their own food?",
        a: "Photosynthesis",
        l: 2,
    },
    {
        q: "What is the value of pi (π) to four decimal places?",
        a: "3.1415",
        l: 2,
    },
    {
        q: "What is the programming language represented by the acronym 'HTML'?",
        a: "HyperText Markup Language",
        l: 2,
    },
    {
        q: "What is the smallest country in the world by land area?",
        a: "Vatican City",
        l: 1,
    },
    {
        q: "Who was the first emperor of China?",
        a: "Qin Shi Huang",
        l: 1,
    },
    {
        q: "Who wrote the poem 'The Iliad'?",
        a: "Homer",
        l: 1,
    },
    {
        q: "What is one of the most famous Napoleon's quotes?",
        a: "'Never interrupt your enemy when he is making a mistake'",
        l: 1,
    },
    {
        q: "Which game geatures a protagonist named Geralt of Rivia?",
        a: "The Witcher 3: Wild Hunt",
        l: 2,
    },
    {
        q: "What is the name of the protagonist the the game 'Dark Souls'?",
        a: "The Chosen Undead",
        l: 1,
    },
    {
        q: "What is the most popular sandbox game?",
        a: "Minecraft",
        l: 3,
    },
    {
        q: "In Undertale, what is the name of the character who serves as a judge?",
        a: "Sans",
        l: 2,
    },
    {
        q: "Sir what can we do ?",
        a: "easteregg",
        l: 1,
    },
];

const levels = {
    1: "🥇",
    2: "🥈",
    3: "🥉",
};

const quizELEMENT = document.getElementById("quiz");
const questions = [];

if (arr.length < 4) throw new Error("Not enough questions");
for (let i = 0; i < 4; i++) {
    const idx = Math.floor(Math.random() * arr.length);
    const object = arr[idx];
    arr.splice(idx, 1);

    const wrapperELEMENT = document.createElement("div");
    wrapperELEMENT.classList.add("wrapper");
    quizELEMENT.appendChild(wrapperELEMENT);
    questions.push(wrapperELEMENT);

    const levelELEMENT = document.createElement("div");
    levelELEMENT.innerHTML = levels[object.l];
    levelELEMENT.classList.add("level");
    wrapperELEMENT.appendChild(levelELEMENT);

    const questionELEMENT = document.createElement("div");
    questionELEMENT.innerHTML = object.q;
    wrapperELEMENT.appendChild(questionELEMENT);

    if (object.a != "easteregg") {
        const awnserELEMENT = document.createElement("div");
        awnserELEMENT.innerHTML = `✅ ${object.a}`;
        awnserELEMENT.toggleAttribute("hidden");
        wrapperELEMENT.appendChild(awnserELEMENT);
    } else {
        const awnserELEMENT = document.createElement("img");
        awnserELEMENT.setAttribute(
            "src",
            "https://media.tenor.com/x7YhM61cvC4AAAAC/there%27s-nothing-we-can-do.gif"
        );
        awnserELEMENT.toggleAttribute("hidden");
        wrapperELEMENT.appendChild(awnserELEMENT);
    }
}

quizELEMENT.addEventListener("click", (e) => {
    if (e.target.classList == "level") {
        e.target.parentElement.children[2].toggleAttribute("hidden");
    }
});

const searchbarELEMENT = document.getElementById("searchbar");
searchbar.addEventListener("keyup", (e) => {
    const value = e.target.value;
    questions.forEach((question) => {
        const questionText = question.children[1].innerHTML;
        const level = question.children[0].innerHTML;
        if (
            questionText.toLowerCase().includes(value.toLowerCase()) ||
            value == level
        ) {
            question.style.display = "block";
        } else {
            question.style.display = "none";
        }
    });
});
