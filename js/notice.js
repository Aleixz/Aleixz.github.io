  var websiteInfoText = `
    <a href="disclaimer.html"><span style="color: rgb(0 109 255);;">点击查看免责声明</span></a>
    <p>须知：本站为公益网站不具备任何收费内容大家可以放心使用 建议收藏该网站以防错过每天的yuzu更新噢。</p>
    <p>网站更新1/18：添加了电脑版YUZU EA更新下载页面。</p>
    <p>网站更新1/16：已重新设计并上线游戏存档下载页面 如果你也想分享存档请到B站私信我噢。</p>
    <p>网站更新1/15：网站重大改进 已实现每日实时自动同步获取github上的每日版yuzu更新。</p>
    <p><span style="color: #fd00ff;">站長通知</span>1/8：由於法律原因本站已停止提供密钥下载 望理解。 </p>
    <p><span style="color: #fd00ff;">站長通知</span>1/6：由於无法支付高昂的服务器费用部分大文件下载只能改用123网盘。 </p>
    <p>网站更新1/1：移除了游戏存档页增加了详细教程页 因为没人上传存档导致存档页一直空着摆设 </p>
    <p> <span style="color: #fd00ff;">站長通知</span>12/30：最近有点赖床所以可能无法保证准时早上9点更新每日版 不过基本都会在中午12点前更新！</p>
    <p>网站更新12/21：应大伙们的改进要求我已在网站中增加了历史版本和固件的下载</p>
    <p>网站更新12/21：不再提供EA捐赠版下载 因为yuzu团队也要吃饭所以 如果大家真的喜欢yuzu可以在谷歌商店直接购买捐赠版以支持yuzu团队</p>
  `;

  // 将文本内容插入到指定的HTML元素中
  var websiteInfoElement = document.querySelector('.website_info');
  websiteInfoElement.innerHTML = websiteInfoText;
