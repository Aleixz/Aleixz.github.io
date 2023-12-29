                        // 一号链接
// 版本号
document.getElementById("1").textContent = "v165";
// 设置链接
document.getElementById("link1").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3lyLmxhbnpvdXUuY29tL2laMzY3MWlkeHR4aSZwYXNzQ29kZT01d3h4.jpg";

                        // 二号链接
// 版本号
document.getElementById("2").textContent = "v164";
// 设置链接
document.getElementById("link2").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3lyLmxhbnpvdXUuY29tL2k2NjNWMWljbjltYiZwYXNzQ29kZT03NmJu.jpg";

                        // 三号链接
// 版本号
document.getElementById("3").textContent = "v163";
// 设置链接
document.getElementById("link3").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3lyLmxhbnpvdXUuY29tL2lURklFMWlqYTE2YiZwYXNzQ29kZT0za3Rn.jpg";

                        // 四号链接
// 版本号
document.getElementById("4").textContent = "v162";
// 设置链接
document.getElementById("link4").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3lyLmxhbnpvdXUuY29tL2lMWFY2MWlqYTVtYiZwYXNzQ29kZT1lbGI2.jpg";

                        // 五号链接
// 版本号
document.getElementById("5").textContent = "v161";
// 设置链接
document.getElementById("link5").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3lyLmxhbnpvdXUuY29tL2lXMjExMWlqYTRyYSZwYXNzQ29kZT04NThu.jpg";

                        // 六号链接
// 版本号
document.getElementById("6").textContent = "v160";
// 设置链接
document.getElementById("link6").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3lyLmxhbnpvdXUuY29tL2lDMllZMWlqYTV2YSZwYXNzQ29kZT1icWJr.jpg";

                        // 七号链接
// 版本号
document.getElementById("166").textContent = "v166";
// 设置链接
document.getElementById("link7").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaTJISE4xaWgzbHNqJnBhc3NDb2RlPWI1a3o.jpg";

// 八号链接
// 版本号
document.getElementById("167").textContent = "v167";
// 设置链接
document.getElementById("link8").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaUtZWkcxaWsybjdjJnBhc3NDb2RlPTh3dXA.jpg";

// 九号链接
// 版本号
document.getElementById("168").textContent = "v168";
// 设置链接
document.getElementById("link9").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3lyLmxhbnpvdXUuY29tL2kzUmhoMWluOWhkYyZwYXNzQ29kZT03ejlu.jpg";

// 九号链接
// 版本号
document.getElementById("169").textContent = "v169";
// 设置链接
document.getElementById("link10").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaUEyN0MxaXBvOHpjJnBhc3NDb2RlPTNjdXU.jpg";

// 九号链接
// 版本号
document.getElementById("170").textContent = "v170";
// 设置链接
document.getElementById("link11").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaUs1NUExaXQwaW5hJnBhc3NDb2RlPTRldjA.jpg";

// 九号链接
// 版本号
document.getElementById("171").textContent = "v171";
// 设置链接
document.getElementById("link12").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3lyLmxhbnpvdXUuY29tL2lWWU02MWl3a28wYiZwYXNzQ29kZT04amlw.jpg";

// 九号链接
// 版本号
document.getElementById("172").textContent = "v172";
// 设置链接
document.getElementById("link13").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3lyLmxhbnpvdXUuY29tL2lqU01vMWowNXBnaCZwYXNzQ29kZT04djI4.jpg";

// 九号链接
// 版本号
document.getElementById("173").textContent = "v173";
// 设置链接
document.getElementById("link14").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaTNJWTkxajJsNWhnJnBhc3NDb2RlPTNmMmc.jpg";

// 九号链接
// 版本号
document.getElementById("174").textContent = "v174";
// 设置链接
document.getElementById("link15").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaVdMUDAxajZkazhkJnBhc3NDb2RlPTdwOHM.jpg";

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

