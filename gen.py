from bs4 import BeautifulSoup
import requests
import datetime

# 读取 index.html
with open('index.html', 'r') as f:
    html = f.read()

# 解析 index.html
soup = BeautifulSoup(html, 'html.parser')

# 请求 GitHub API
data = requests.get('https://api.github.com/repos/yuzu-emu/yuzu-android/releases?per_page=35').json()

# 读取最新版本
latest_ver = data[0]
latest_date = latest_ver['published_at']
version = "V" + latest_ver['name'].replace('android-', '')
for objs in latest_ver['assets']:
    # 找到 apk 的下载链接
    if objs['name'].endswith('.apk'):
        apk_url = objs['browser_download_url']
        break

apk_url = apk_url.replace('https://github.com', 'https://hub.fgit.cf')
# 读取时间
date = datetime.datetime.strptime(latest_date, '%Y-%m-%dT%H:%M:%SZ')
formattedDate = str(date.month) + '月' + str(date.day) + '号'
# 替换 html
soup.find(id='actualVersion').string = version
soup.find('span', class_='date').string = formattedDate
soup.find(id='downloadButton').attrs['onclick'] = "window.location.href='" + apk_url + "'"
# 保存 html
with open('index.html', 'w') as f:
    f.write(str(soup.prettify()))

