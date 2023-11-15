const arr = [
    {
        q: "Who was the first US president ?",
        a: "George Washington",
        l: 3,
    },
    {
        q: "What is the capital of France ?",
        a: "Paris",
        l: 3,
    },
    {
        q: "What game engine was used in Team Fortress 2 ?",
        a: "Source Engine",
        l: 2,
    },
    {
        q: "What is the most popular programming language ?",
        a: "JavaScript",
        l: 1,
    },
];

const levels = {
    1: "🥇",
    2: "🥈",
    3: "🥉",
};

const questions = document.getElementById("questions");

if(arr.length < 4) throw new Error("Not enough questions");
for(let i = 0; i < 4; i++) {
    const idx = Math.floor(Math.random() * arr.length);
    const object = arr[idx];
    // remove the question from the array so it won't be picked again
    arr.splice(idx, 1);

    const wrapper = document.createElement("div");
    wrapper.classList.add("question");
    questions.appendChild(wrapper);

    const level = document.createElement("div");
    level.innerHTML = levels[object.l];
    level.classList.add("level");
    wrapper.appendChild(level);

    const question = document.createElement("div");
    question.innerHTML = object.q;
    wrapper.appendChild(question);
    
    const awnser = document.createElement("div");
    awnser.innerHTML = `✅ ${object.a}`;
    awnser.toggleAttribute("hidden");
    wrapper.appendChild(awnser);
}

questions.addEventListener("click", (e) => {
    if (e.target.classList == "level") {
        e.target.parentElement.children[2].toggleAttribute("hidden");
    }
});

const searchbar = document.getElementById("searchbar");
searchbar.addEventListener("keyup", (e) => {
    const value = e.target.value;
    const questions = document.querySelectorAll(".question");
    // keeping the 4 questions node into an array when the page loads might be better
    questions.forEach((question) => {
        const questionText = question.children[1].innerHTML;
        const level = question.children[0].innerHTML;
        if (questionText.toLowerCase().includes(value.toLowerCase()) || value == level) {
            question.style.display = "block";
        } else {
            question.style.display = "none";
        }
    });
})