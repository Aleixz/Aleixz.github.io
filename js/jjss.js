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
// 创建雪花
function createSnowflake(canvas) {
  const ctx = canvas.getContext("2d");
  const size = Math.random() * 4 + 2;
  const x = Math.random() * canvas.width;
  const y = -size - Math.random() * canvas.height;
  const speedY = Math.random() * 2 + 1;

  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();

  return { x, y, size: Math.min(size, 80), speedY }; // 限制雪花大小不超过80px
}

// 更新雪花位置
function updateSnowflake(canvas, snowflake) {
  const ctx = canvas.getContext("2d");
  snowflake.y += snowflake.speedY;

  ctx.beginPath();
  ctx.arc(snowflake.x, snowflake.y, snowflake.size, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();

  if (snowflake.y > canvas.height) {
    snowflake.y = -snowflake.size;
    snowflake.x = Math.random() * canvas.width;
  }
}

// 创建雪花动画
function createSnowfall() {
  const canvas = document.getElementById("snow-canvas");
  const ctx = canvas.getContext("2d");
  const snowflakes = [];

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    while (snowflakes.length < 100) {
      snowflakes.push(createSnowflake(canvas));
    }

    for (let i = 0; i < snowflakes.length; i++) {
      updateSnowflake(canvas, snowflakes[i]);
    }

    requestAnimationFrame(loop);
  }

  loop();
}

createSnowfall();

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

