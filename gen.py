#!/usr/bin/env python3
from bs4 import BeautifulSoup
import requests
import datetime

### 处理 index.html
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

apk_url = apk_url.replace('https://github.com', 'https://hub.incept.pw')
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


### 处理 hisv.html
with open('hisv.html', 'r') as f:
    html = f.read()

# 解析 hisv.html
soup = BeautifulSoup(html, 'html.parser')

# 清空 releasesList
soup.find('ul', id='releasesList').clear()

# 读取历史版本
for releases in data:
    ver = releases['name'].replace('android-', '')
    date = datetime.datetime.strptime(releases['published_at'], '%Y-%m-%dT%H:%M:%SZ')
    formattedDate = str(date.year) + '年' + str(date.month) + '月' + str(date.day) + '日'
    for objs in releases['assets']:
        if objs['name'].endswith('.apk'):
            apk_url = objs['browser_download_url']
            break
    apk_url = apk_url.replace('https://github.com', 'https://hub.incept.pw')
    # 生成 html
    new_li = soup.new_tag('li')
    new_a = soup.new_tag('a')
    new_a['href'] = apk_url
    new_a.string = formattedDate + '    ' + releases['name']
    new_li.append(new_a)
    soup.find('ul', id='releasesList').append(new_li)

# 保存 html
with open('hisv.html', 'w') as f:
    f.write(str(soup.prettify()))

### 处理 yuzupc.html
    
with open('yuzupc.html', 'r') as f:
    html = f.read()

# 解析 yuzupc.html
soup = BeautifulSoup(html, 'html.parser')

# 请求 GitHub API
data = requests.get('https://api.github.com/repos/pineappleEA/pineapple-src/releases?per_page=35').json()

# 读取最新版本
latest_ver = data[0]
latest_date = latest_ver['published_at']
version = latest_ver['tag_name']
for objs in latest_ver['assets']:
    if objs['name'].startswith('Windows'):
        pkg_url = objs['browser_download_url']
        break

pkg_url = pkg_url.replace('https://github.com', 'https://hub.incept.pw')
# 读取时间
date = datetime.datetime.strptime(latest_date, '%Y-%m-%dT%H:%M:%SZ')
formattedDate = str(date.month) + '月' + str(date.day) + '号'
# 替换 html
soup.find(id='actualVersion').string = version
soup.find('span', class_='date').string = formattedDate
soup.find(id='downloadButton').attrs['onclick'] = "window.location.href='" + pkg_url + "'"


# 清空 releasesList
soup.find('div', id='releasesList').clear()

# 读取历史版本
for releases in data:
    ver = releases['tag_name']
    date = datetime.datetime.strptime(releases['published_at'], '%Y-%m-%dT%H:%M:%SZ')
    formattedDate = str(date.year) + '年' + str(date.month) + '月' + str(date.day) + '日'
    for objs in releases['assets']:
        if objs['name'].startswith('Windows'):
            pkg_url = objs['browser_download_url']
            break
    pkg_url = pkg_url.replace('https://github.com', 'https://hub.incept.pw')
    # 生成 html
    new_li = soup.new_tag('li')
    new_li['class'] = 'release-item'
    new_a = soup.new_tag('a')
    new_a['href'] = pkg_url
    new_a['target'] = '_blank'
    new_a.string = ver
    new_li.append(new_a)
    soup.find('div', id='releasesList').append(new_li)

# 保存 html
with open('yuzupc.html', 'w') as f:
    f.write(str(soup.prettify()))
