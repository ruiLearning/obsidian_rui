---
<%-*
let banner= await tp.user.getrandomImage("99-Attachment/banner")
let weather = await tp.user.getweather("")
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
> [timeline198::timeline]
```ad-flex
(Weather::<% `${weather}` %>)
> [!infobox|noicon]- 🔖 当天创建的文件
> ```dataviewjs 
const filename=dv.current().file.name;
dv.list(dv.pages().where(p => p.file.cday.toISODate() === filename).sort(p => p.file.ctime, 'desc').file.link) 
>```
```
