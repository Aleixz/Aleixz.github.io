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
