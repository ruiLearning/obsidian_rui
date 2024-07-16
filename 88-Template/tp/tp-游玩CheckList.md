---
<%-*
let banner= await tp.user.getrandomImage("99-Attachment/banner")
let weather = await tp.user.getweather("")
-%>
<%-*
let  newtitle
if(tp.file.title.includes("未命名") || tp.file.title.toLowerCase().includes("untitled"))
{ title=await tp.system.prompt("请输入要创建的文件名");
newtitle=title||tp.date.now("YYYYMMDDHHmmss")
await tp.file.rename(newtitle)}
else newtitle=tp.file.title
-%>
<%-*
var cleanTitle = tp.user.getTitleSnippet(newtitle)
var title = `${cleanTitle}`;
await tp.file.rename(`${title}`);
let filetype = await tp.system.suggester(["游玩", "自驾", "其他"],["游玩", "自驾", "其他"], false, "路径放到哪里？")
if (filetype === "游玩") {
myFilePath = "/10-Live/Travel/" + `${title}`;
await tp.file.move(`${myFilePath}`);
} else if (filetype === "自驾") {
myFilePath = "/10-Live/SelfDriving/" + `${title}`;
await tp.file.move(`${myFilePath}`);
} else if (filetype === "其他") {
myFilePath = "/10-Live/Other/" + `${title}`;
await tp.file.move(`${myFilePath}`);
} else {
tp.file.cursor(1)
}
-%>

banner: <% banner %>
Banner style: Solid
cssclass: mynote,noyaml
uid: <% tp.date.now("YYYYMMDDHHmmss") %> 
title: <% tp.file.title %>
permalink:  <% tp.file.title %>.html
tags: <% `${filetype}` %>
categories:
  - live
  - travel
cover: /img/travel200.jpg
top_img: /img/travel200.jpg
date: <% tp.file.creation_date() %>
updated: <% tp.file.last_modified_date() %>
---
> [!blank] 
> [timeline{{DATE:DDD}}::timeline]
```ad-flex
(Weather::<% `${weather}` %>)
```

