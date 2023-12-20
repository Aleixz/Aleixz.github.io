                        // 一号链接
// 版本号
document.getElementById("1").textContent = "v165";
// 设置链接
document.getElementById("link1").href = "https://www.baidu.com";

// 设置字体大小和颜色
document.getElementById("link1").style.fontSize = "16px";
document.getElementById("link1").style.color = "white";

                        // 二号链接
// 版本号
document.getElementById("2").textContent = "v165";
// 设置链接
document.getElementById("link2").href = "https://www.baidu.com";

// 设置字体大小和颜色
document.getElementById("link2").style.fontSize = "16px";
document.getElementById("link2").style.color = "white";

                        // 三号链接
// 版本号
document.getElementById("3").textContent = "v165";
// 设置链接
document.getElementById("link3").href = "https://www.baidu.com";

// 设置字体大小和颜色
document.getElementById("link3").style.fontSize = "16px";
document.getElementById("link3").style.color = "white";

                        // 四号链接
// 版本号
document.getElementById("4").textContent = "v165";
// 设置链接
document.getElementById("link4").href = "https://www.baidu.com";

// 设置字体大小和颜色
document.getElementById("link4").style.fontSize = "16px";
document.getElementById("link4").style.color = "white";

                        // 五号链接
// 版本号
document.getElementById("5").textContent = "v165";
// 设置链接
document.getElementById("link5").href = "https://www.baidu.com";

// 设置字体大小和颜色
document.getElementById("link5").style.fontSize = "16px";
document.getElementById("link5").style.color = "white";

                        // 六号链接
// 版本号
document.getElementById("6").textContent = "v165";
// 设置链接
document.getElementById("link6").href = "https://www.baidu.com";

// 设置字体大小和颜色
document.getElementById("link6").style.fontSize = "16px";
document.getElementById("link6").style.color = "white";

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
