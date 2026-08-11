// ===== 栃奈阪KOREA BGM制御 =====
// 開くと問答無用で流れる。ミュートを押すまで永遠に流れ続ける。

(function () {
  window.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("bgmAudio");
    var btn = document.getElementById("muteBtn");
    if (!audio || !btn) return;

    audio.volume = 0.6;

    function tryPlay() {
      var p = audio.play();
      if (p !== undefined) {
        p.catch(function () {
          // ブラウザの自動再生ブロック対策：
          // 最初のクリック/タッチで即座に鳴らす
          var resume = function () {
            audio.play();
            document.removeEventListener("click", resume);
            document.removeEventListener("touchstart", resume);
            document.removeEventListener("keydown", resume);
          };
          document.addEventListener("click", resume);
          document.addEventListener("touchstart", resume);
          document.addEventListener("keydown", resume);
        });
      }
    }

    tryPlay();

    btn.addEventListener("click", function () {
      if (audio.muted) {
        audio.muted = false;
        btn.textContent = "🔊 BGMミュート";
        btn.classList.remove("muted");
        tryPlay();
      } else {
        audio.muted = true;
        btn.textContent = "🔇 ミュート中（押すと再生）";
        btn.classList.add("muted");
      }
    });
  });
})();
