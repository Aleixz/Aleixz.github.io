// 存档名称链接：
var gameData = [
  { name: "塞尔达传说：荒野之息", description: "100%通关存档", downloadLink: "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaU5KTEMxbDdvZ25p.jpg" },
  { name: "死或生：沙滩排球3", description: "100%存档", downloadLink: "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaUZMUEQxbDhuMndk.jpg" },
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
