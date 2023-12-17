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
function showSecondaryPage() {
  var secondaryPage = document.getElementById('secondaryPage');
  secondaryPage.classList.add('show');
  setTimeout(function() {
    secondaryPage.classList.add('bounceIn');
  }, 100);
}

function hideSecondaryPage() {
  var secondaryPage = document.getElementById('secondaryPage');
  secondaryPage.classList.remove('bounceIn');
  setTimeout(function() {
    secondaryPage.classList.remove('show');
  }, 500);
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
