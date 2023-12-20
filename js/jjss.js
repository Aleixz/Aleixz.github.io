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

