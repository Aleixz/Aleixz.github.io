    function getLatestVersion() {
      // 发起获取发布列表的请求
      fetch('https://api.github.com/repos/yuzu-emu/yuzu-android/releases', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          'Accept': 'application/vnd.github+json',
          'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0'
        }
      })
      .then(response => response.json())
      .then(data => {
        // 获取最新版本号和下载链接
        const latestRelease = data[0];
        const version = latestRelease.tag_name.replace('android-', 'V');
        const downloadUrl = latestRelease.assets[1].browser_download_url;
        const publishDate = new Date(latestRelease.published_at);
        const formattedDate = '发布日期：' + '<span class="date">' + (publishDate.getMonth() + 1) + '月' + publishDate.getDate() + '号</span>';

        // 更新页面上的版本号、下载链接和发布日期
        document.getElementById('actualVersion').innerText = version;
        document.getElementById('publishDate').innerHTML = formattedDate;

        // 隐藏版本号加载中...
        document.getElementById('loadingVersion').style.display = 'none';
        document.getElementById('actualVersion').style.display = 'inline';
		 document.getElementById('actualVersion').style.color = 'rgb(65, 255, 0)';

        // 设置下载按钮的点击事件
        document.getElementById('downloadButton').addEventListener('click', function() {
          const actualDownloadUrl = downloadUrl.replace('https://github.com/', 'https://download.fgit.cf/');
          window.location.href = actualDownloadUrl;
        });
      })
      .catch(error => {
        console.error('获取最新版本时出错:', error);
      });
    }

    // 页面加载完成后获取最新版本号
    document.addEventListener('DOMContentLoaded', getLatestVersion);
