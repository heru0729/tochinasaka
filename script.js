const bgm = document.getElementById("bgm");
const muteBtn = document.getElementById("muteBtn");

function tryPlay() {
  bgm.play().catch(() => {
    document.addEventListener("click", () => bgm.play(), { once: true });
  });
}
tryPlay();

muteBtn.addEventListener("click", () => {
  bgm.muted = !bgm.muted;
  muteBtn.textContent = bgm.muted ? "🔈 再生" : "🔇 ミュート";
  if (!bgm.muted) {
    bgm.play();
  }
});

const layer = document.getElementById("bgTextLayer");
const phrase = "We are Tochinasaka!";
const count = 60;
for (let i = 0; i < count; i++) {
  const span = document.createElement("span");
  span.textContent = phrase;
  layer.appendChild(span);
}
