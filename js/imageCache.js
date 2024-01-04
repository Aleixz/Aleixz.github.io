// 图片路径和格式对象
var imagePaths = {
  background: {
    path: 'path/to/background.svg',
    format: 'svg'
  },
  background1: {
    path: 'path/to/background1.svg',
    format: 'svg'
  },
  image1: {
    path: 'path/to/1.jpeg',
    format: 'jpeg'
  },
  image2: {
    path: 'path/to/2.jpeg',
    format: 'jpeg'
  },
  image3: {
    path: 'path/to/3.jpeg',
    format: 'jpeg'
  },
  image4: {
    path: 'path/to/4.jpeg',
    format: 'jpeg'
  },
  image5: {
    path: 'path/to/5.jpeg',
    format: 'jpeg'
  },
  image6: {
    path: 'path/to/6.jpeg',
    format: 'jpeg'
  },
  image7: {
    path: 'path/to/7.jpeg',
    format: 'jpeg'
  },
  image8: {
    path: 'path/to/8.jpeg',
    format: 'jpeg'
  },
  image9: {
    path: 'path/to/9.jpeg',
    format: 'jpeg'
  },
  image10: {
    path: 'path/to/10.jpeg',
    format: 'jpeg'
  },
  image11: {
    path: 'path/to/11.jpeg',
    format: 'jpeg'
  },
  image12: {
    path: 'path/to/12.jpeg',
    format: 'jpeg'
  },
  image13: {
    path: 'path/to/13.jpeg',
    format: 'jpeg'
  },
  image14: {
    path: 'path/to/14.jpeg',
    format: 'jpeg'
  },
  image16: {
    path: 'path/to/16.jpeg',
    format: 'jpeg'
  },
  image17: {
    path: 'path/to/17.jpeg',
    format: 'jpeg'
  },
  image18: {
    path: 'path/to/18.jpeg',
    format: 'jpeg'
  },
  image19: {
    path: 'path/to/19.jpeg',
    format: 'jpeg'
  },
  image20: {
    path: 'path/to/20.jpeg',
    format: 'jpeg'
  },
  image21: {
    path: 'path/to/21.jpeg',
    format: 'jpeg'
  }
};
// 获取当前时间戳
var currentTime = new Date().getTime();

// 检查是否存在缓存
if (localStorage.getItem('imagePaths')) {
  // 获取上次刷新的时间戳
  var lastRefresh = localStorage.getItem('lastRefresh');

  // 计算时间差（毫秒）
  var timeDifference = currentTime - lastRefresh;

  // 如果超过一个月（30天），则刷新图片
  if (timeDifference > 30 * 24 * 60 * 60 * 1000) {
    refreshImages();
  }
} else {
  // 第一次加载页面，缓存图片路径和刷新时间
  localStorage.setItem('imagePaths', JSON.stringify(imagePaths));
  localStorage.setItem('lastRefresh', currentTime);
}

// 刷新图片函数
function refreshImages() {
  // 更新刷新时间
  localStorage.setItem('lastRefresh', currentTime);
  
  // 获取图片路径和格式对象
  var storedImagePaths = JSON.parse(localStorage.getItem('imagePaths'));
  
  // 遍历图片路径和格式对象并更新图片路径
  for (var key in storedImagePaths) {
    var imagePath = storedImagePaths[key].path;
    var imageFormat = storedImagePaths[key].format;
    var newImagePath = getNewImagePath(imagePath, imageFormat); // 根据需求获取新图片路径的函数
    
    // 更新图片路径
    storedImagePaths[key].path = newImagePath;
    
    // 获取对应的图片标签并更新图片路径
    var image = document.getElementById(key);
    image.src = newImagePath;
  }
  
  // 更新图片路径和格式对象的缓存
  localStorage.setItem('imagePaths', JSON.stringify(storedImagePaths));
}

// 获取新图片路径的函数示例
function getNewImagePath(oldImagePath, imageFormat) {
  // 根据需求生成新图片路径的逻辑
  // 返回新图片路径
  return oldImagePath.replace('.' + imageFormat, '_new.' + imageFormat);
}
