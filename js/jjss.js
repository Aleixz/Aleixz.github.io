// 导航栏收起
let prevScrollpos = window.pageYOffset; /* 保存上一个滚动位置 */
let navbar = document.getElementById("navbar");
let reservedHeight = 65; // 预留高度

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || currentScrollPos < reservedHeight) {
        navbar.classList.remove("hidden"); /* 显示导航栏 */
    } else {
        navbar.classList.add("hidden"); /* 隐藏导航栏 */
    }
    prevScrollpos = currentScrollPos;
}

// 图片预览
function openImage(img) {
  var modal = document.querySelector('.image-modal');
  var modalImg = document.getElementById('modalImage');

  modalImg.src = img.src;
  modal.style.display = 'block';

  setTimeout(function() {
    modal.classList.add('show');
  }, 10);
}

function closeImage() {
  var modal = document.querySelector('.image-modal');
  modal.classList.remove('show');

  setTimeout(function() {
    modal.style.display = 'none';
  }, 300);
}

// 获取所有的图片元素
var images = document.querySelectorAll('.image-box img');

// 为每个图片元素添加点击事件监听器
images.forEach(function(image) {
  image.addEventListener('click', function() {
    openImage(this);
  });
});
// 加载动画
const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
  const image = container.querySelector('img');
  const loadingAnimation = container.querySelector('.loading-animation');

  if (image.complete) {
    loadingAnimation.style.display = 'none';
  } else {
    image.addEventListener('load', () => {
      loadingAnimation.style.display = 'none';
    });
  }
});
// 下载通知
document.getElementById("downloadButton").addEventListener("click", function() {
  showNotification("请稍后，您的的每日版yuzu正在开始下载...（如未开始下载请检查网站是否已经获取到了版本号）");
});

document.getElementById("downloadButton2").addEventListener("click", function() {
  showNotification("请稍后，您的正式版yuzu正在开始下载...");
});

document.getElementById("downloadButton3").addEventListener("click", function() {
  showNotification("请稍后，您的的固件包正在开始下载...");
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
}
// 捐赠模态框控制
        function openModal() {
            document.getElementById('modal').style.opacity = '1';
            document.getElementById('modal').style.visibility = 'visible';
        }
        
        function closeModal() {
            document.getElementById('modal').style.opacity = '0';
            document.getElementById('modal').style.visibility = 'hidden';
        }
        
        // 捐赠文本样式变化
        function highlightDonate() {
            document.querySelector('.page-scroll').style.backgroundColor = '#6a1b9a';
        }
        
        function unhighlightDonate() {
            document.querySelector('.page-scroll').style.backgroundColor = '#4b0082';
        }
function showSecondaryPage(pageId) {
  var secondaryPage = document.getElementById('secondaryPage' + pageId);
  secondaryPage.classList.add('fade-in');
  setTimeout(function() {
    secondaryPage.classList.add('show');
  }, 100);
}

function hideSecondaryPage(pageId) {
  var secondaryPage = document.getElementById('secondaryPage' + pageId);
  secondaryPage.classList.remove('show');
  setTimeout(function() {
    secondaryPage.classList.remove('fade-in');
  }, 50);
}


  function redirect(url) {
    window.location.href = url;
  }
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
document.querySelector('a[href="#one"]').addEventListener('click', function(event) {
  event.preventDefault();
  var header = document.querySelector('#one');
  header.scrollIntoView();
});
 // 公告
function showWebNotice() {
  var webNotice = document.getElementById("webNotice");
  webNotice.style.display = "block";
}

function removeWebNotice() {
  var webNotice = document.getElementById("webNotice");
  webNotice.style.display = "none";
  var currentTime = new Date().getTime();
  var expirationTime = currentTime + 24 * 60 * 60 * 1000; // 设置缓存过期时间为24小时
  localStorage.setItem("webNoticeExpiration", expirationTime);
}

document.addEventListener("DOMContentLoaded", function() {
  var webNotice = document.getElementById("webNotice");
  var webNoticeExpiration = localStorage.getItem("webNoticeExpiration");
  if (!webNoticeExpiration || new Date().getTime() > webNoticeExpiration) {
    setTimeout(function() {
      webNotice.style.display = "block";
    }, 1000);
  }
});

