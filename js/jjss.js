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
// 每日更新版链接
document.getElementById("downloadButton1").addEventListener("click", function() {
  redirect('https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaTY2M1YxaWNuOW1iJnBhc3NDb2RlPTc2Ym4.jpg');
});
// 正式版链接
document.getElementById("downloadButton2").addEventListener("click", function() {
  redirect('https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaTVTUk8xaWNycTdjJnBhc3NDb2RlPWFhZ3k.jpg');
});
// EA版链接
document.getElementById("downloadButton3").addEventListener("click", function() {
  redirect('https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaTRGUTMxaWN1Z3hnJnBhc3NDb2RlPWFuMGI.jpg');
});
// 密钥链接
document.getElementById("downloadButton4").addEventListener("click", function() {
  redirect('https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaThQWTYxaWN1dzdn.jpg');
});
// 888以下
// GPU链接1
document.getElementById("bilibiliLink1").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaTVNRk8xaWN0Zjhq.jpg";
// GPU链接2
document.getElementById("bilibiliLink2").href = "#";
// GPU链接3
document.getElementById("bilibiliLink3").href = "#";
// GPU链接4
document.getElementById("bilibiliLink4").href = "#";
// 8GEN1以上
// GPU链接1
document.getElementById("bilibiliLink5").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaTVNRk8xaWN0Zjhq.jpg";
// GPU链接2
document.getElementById("bilibiliLink6").href = "#";
// GPU链接3
document.getElementById("bilibiliLink7").href = "#";
// GPU链接4
document.getElementById("bilibiliLink8").href = "#";
