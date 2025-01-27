document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("valentine-btn").addEventListener("click", () => {
    document.getElementById("response").classList.remove("hidden");
    document.getElementById("buttons").classList.remove("hidden");
    document.getElementById("valentine-btn").classList.add("hidden");
    document.getElementById("music").play();
  });

  document.getElementById("yes-btn").addEventListener("click", () => {
    document.getElementById("result").textContent = "Yay! You just made me the happiest person! 💖";
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("buttons").classList.add("hidden");
    createHearts();
    document.getElementById("photos").classList.remove("hidden");
  });

  document.getElementById("no-btn").addEventListener("click", () => {
    document.getElementById("result").textContent = "Aww, I'll try harder next time! 😢";
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("buttons").classList.add("hidden");
  });

  // Create hearts when the page loads
  createHearts();

  function createHearts() {
    const numHearts = 20;
    for (let i = 0; i < numHearts; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.top = `${Math.random() * 100}vh}`; // Add initial random vertical position
      heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
      heart.style.animationDelay = `${Math.random() * 5}s`; // Stagger the start times
      document.body.appendChild(heart);
    }
  }
});
