
let stage = 0;
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const finalMessage = document.getElementById("finalMessage");
const heartsContainer = document.getElementById("heartsContainer");

yesBtn.addEventListener("click", () => {
    stage++;
    if (stage === 1) {
        question.textContent = "Sen de beni özledin mi?";
    } else if (stage === 2) {
        question.textContent = "Emin misin?";
    } else {
        finalMessage.classList.remove("hidden");
        question.classList.add("hidden");
        yesBtn.classList.add("hidden");
        noBtn.classList.add("hidden");

        for (let i = 0; i < 50; i++) {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            const colors = ["#ff69b4", "#dda0dd", "#87cefa"];
            heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.top = "100vh";
            heart.style.animationDuration = 2 + Math.random() * 3 + "s";
            heartsContainer.appendChild(heart);
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }
    }
});

function moveNoButton() {
    const x = Math.floor(Math.random() * 300) - 150;
    const y = Math.floor(Math.random() * 300) - 150;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);
