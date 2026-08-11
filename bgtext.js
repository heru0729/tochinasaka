// ===== 栃奈阪KOREA 背景装飾 =====
// 阿部寛のホームページを踏襲し、"We are Tochinasaka!" を画面いっぱいに敷き詰める

(function () {
  window.addEventListener("DOMContentLoaded", function () {
    var layer = document.getElementById("bgTextLayer");
    if (!layer) return;

    var text = "We are Tochinasaka!";
    var count = 300; // 画面を埋め尽くす量
    var html = "";
    for (var i = 0; i < count; i++) {
      html += "<span>" + text + "</span>";
    }
    layer.innerHTML = html;
  });
})();
