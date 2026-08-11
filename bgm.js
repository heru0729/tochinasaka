// ===== 栃奈阪KOREA BGM制御 =====
// 開くと問答無用で流れる。ミュートを押すと現在位置で一時停止。
// もう一度押すとその地点から再生を再開する。

(function () {
  window.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("bgmAudio");
    var btn = document.getElementById("muteBtn");
    if (!audio || !btn) return;

    audio.volume = 0.6;
    var isPaused = false;

    function tryPlay() {
      var p = audio.play();
      if (p !== undefined) {
        p.catch(function () {
          // ブラウザの自動再生ブロック対策：
          // 最初のクリック/タッチで即座に鳴らす
          var resume = function () {
            if (!isPaused) audio.play();
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
      if (!isPaused) {
        // 現在の再生位置を保持したまま停止
        audio.pause();
        isPaused = true;
        btn.textContent = "🔇 ミュート中（押すと再生）";
        btn.classList.add("muted");
      } else {
        // 停止した地点から再生を再開
        isPaused = false;
        btn.textContent = "🔊 BGMミュート";
        btn.classList.remove("muted");
        tryPlay();
      }
    });
  });
})();
