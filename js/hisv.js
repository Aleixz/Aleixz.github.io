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

fetch('https://api.kkgithub.com/repos/yuzu-emu/yuzu-android/releases?per_page=35', {
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
    'Accept': 'application/vnd.github+json',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0'
  }
})
.then(response => response.json())
.then(data => {
  const releases = data.slice(0, 35).map(release => {
    // 查找名为"yuzu-*.apk"的附件，并获取对应的下载链接
    const apkAsset = release.assets.find(asset => asset.name.endsWith('.apk'));
    return {
      tag: release.tag_name,
      downloadUrl: apkAsset ? apkAsset.browser_download_url : null
    };
  });

    releases.forEach(release => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = release.downloadUrl;
      link.textContent = release.tag;
      listItem.appendChild(link);
      releasesList.appendChild(listItem);
    });

    // 隐藏加载状态
    loadingStatus.style.display = 'none';

    // 手动触发刷新手风琴状态
    Array.from(accordions).forEach(accordion => {
      if (accordion.classList.contains('active')) {
        accordion.nextElementSibling.style.maxHeight = accordion.nextElementSibling.scrollHeight + "px";
      } else {
        accordion.nextElementSibling.style.maxHeight = null;
      }
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

window.addEventListener('load', displayReleases);

document.getElementById('releasesList').addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    event.preventDefault();
    const actualDownloadUrl = event.target.href.replace('https://github.com/', 'https://download.fgit.cf/');
    event.target.href = actualDownloadUrl;
    window.open(actualDownloadUrl, '_blank');
  }
});
