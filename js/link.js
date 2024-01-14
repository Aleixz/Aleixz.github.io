document.getElementById("date").textContent = "1/14";// 更新日期
document.getElementById("date").style.color = "#41ff00";

document.getElementById("version").textContent = "V192";// 更新版本号
document.getElementById("version").style.color = "#ebff00";

// 每日更新版链接
document.getElementById("downloadButton1").addEventListener("click", function() {
  redirect('https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaUIzOFAxbDIybXZhJnBhc3NDb2RlPTYybWE.jpg');
});
// 正式版链接
document.getElementById("downloadButton2").addEventListener("click", function() {
  redirect('https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaTVTUk8xaWNycTdjJnBhc3NDb2RlPWFhZ3k.jpg');
});
// 固件链接
document.getElementById("downloadButton3").addEventListener("click", function() {
  window.location.href = 'https://www.123pan.com/s/DCbbVv-1plHd.html';
});
// 888以下
// GPU链接1
document.getElementById("bilibiliLink1").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaUtWNVAxaXE5M25nJnBhc3NDb2RlPQ.jpg";
// GPU链接2
document.getElementById("bilibiliLink2").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaVpVTlIxa2wxb2tk.jpg";
// GPU链接3
document.getElementById("bilibiliLink3").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaU5FNlMxaWRpNXpn.jpg";
// GPU链接4
document.getElementById("bilibiliLink4").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaTJIQksxaWRpNjFpIA.jpg";
// 8GEN1以上
// GPU链接1
document.getElementById("bilibiliLink5").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaUtWNVAxaXE5M25nJnBhc3NDb2RlPQ.jpg";
// GPU链接2
document.getElementById("bilibiliLink6").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaVpVTlIxa2wxb2tk.jpg";
// GPU链接3
document.getElementById("bilibiliLink7").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaUlDNDYxaWRpNXBn.jpg";
// GPU链接4
document.getElementById("bilibiliLink8").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaUlSMEcxaXA0NWlo.jpg";
// 自动刷新js
if (typeof Object.assign !== 'function') {
  Object.assign = function(target) {
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}
