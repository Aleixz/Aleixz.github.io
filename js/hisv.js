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

function displayReleases() {
  const releasesList = document.getElementById('releasesList');
  const loadingStatus = document.getElementById('loadingStatus');
  const accordions = document.getElementsByClassName('accordion');
  // 手动触发刷新手风琴状态
  Array.from(accordions).forEach(accordion => {
    if (accordion.classList.contains('active')) {
      accordion.nextElementSibling.style.maxHeight = accordion.nextElementSibling.scrollHeight + "px";
    } else {
      accordion.nextElementSibling.style.maxHeight = null;
    }
  });
}
  

window.addEventListener('load', displayReleases);

document.getElementById('releasesList').addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    event.preventDefault();
    const actualDownloadUrl = event.target.href.replace('https://github.com/', 'https://hub.fgit.cf/');
    event.target.href = actualDownloadUrl;
    window.open(actualDownloadUrl, '_blank');
  }
});
