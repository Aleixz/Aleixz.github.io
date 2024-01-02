// 下载通知
document.getElementById("downloadButton1").addEventListener("click", function() {
  showNotification("请稍后，您的的每日版yuzu正在开始下载...");
});

document.getElementById("downloadButton2").addEventListener("click", function() {
  showNotification("请稍后，您的正式版yuzu正在开始下载...");
});

document.getElementById("downloadButton3").addEventListener("click", function() {
  showNotification("请稍后，您的的固件包正在开始下载...");
});

document.getElementById("downloadButton4").addEventListener("click", function() {
  showNotification("请稍后，您的密钥正在开始下载...");
});

function showNotification(message) {
  var notificationContainer = document.getElementById("notificationContainer");
  notificationContainer.textContent = message;
  notificationContainer.style.display = "block";

  // 执行动画效果，如从底部向上移动
  notificationContainer.animate([
    { bottom: "-100px" },
    { bottom: "20px" }
  ], {
    duration: 1000,
    easing: "ease-in-out"
  });

  // 6秒后隐藏通知
  setTimeout(function() {
    notificationContainer.style.display = "none";
  }, 6000);
    });
  }
});
window.onload = function() {
  var tidioScript = document.createElement('script');
  tidioScript.src = '//code.tidio.co/aogzp7etcczy035l7jc1vs1p9dleuwku.js';
  tidioScript.async = true;

  document.body.appendChild(tidioScript);
};
