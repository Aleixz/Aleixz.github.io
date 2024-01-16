// 存档名称链接：
var gameData = [
{ name: "塞尔达传说：王国之泪", description: "站长个人游玩存档", downloadLink: "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaVpJQjkxbDlnNTdh.jpg" },
  { name: "塞尔达传说：旷野之息", description: "100%通关存档", downloadLink: "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaU5KTEMxbDdvZ25p.jpg" },
  { name: "死或生：沙滩排球3", description: "100%存档", downloadLink: "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaUZMUEQxbDhuMndk.jpg" },
{ name: "火影忍者：究极风暴羁绊", description: "100%存档", downloadLink: "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaUtBRVMxbDhvZWhn.jpg" },
{ name: "极品飞车14：重制版", description: "100%金牌全车辆解锁", downloadLink: "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaVROSEUxbDhwbWli.jpg" },
{ name: "空洞骑士", description: "所有Boss 万神殿已完成", downloadLink: "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaVpIRlMxbDhwMHhl.jpg" },
];

// 获取表格元素
var table = document.getElementById("customers");

// 遍历游戏数据，创建并插入每个游戏的行
for (var i = 0; i < gameData.length; i++) {
  var row = document.createElement("tr");
  
  var cell1 = document.createElement("td");
  cell1.innerHTML = gameData[i].name;
  row.appendChild(cell1);
  
  var cell2 = document.createElement("td");
  cell2.innerHTML = gameData[i].description;
  row.appendChild(cell2);
  
  var cell3 = document.createElement("td");
  var link = document.createElement("a");
  link.href = gameData[i].downloadLink;
  link.style.color = "#1fcf4e";
  link.innerHTML = "点击下载";
  cell3.appendChild(link);
  row.appendChild(cell3);
  
  table.appendChild(row);
}
