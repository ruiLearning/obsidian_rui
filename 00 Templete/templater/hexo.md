---
author: ruirui
title: <% tp.file.title %>
permalink:  <% tp.file.title %>.html
tags:
  - 生活
categories:
  - live
  - travel
description: 生活
cover: /img/travel200.jpg
top_img: /img/travel200.jpg
date: <% tp.file.creation_date() %>
updated: <% tp.file.last_modified_date() %>
---

<% tp.date.now() %> 

[[<% tp.date.now("YYYY-MM-DD", -1) %>]] | [[<% tp.date.now() %>]] | [[<% tp.date.now("YYYY-MM-DD", +1) %>]]

const choices = [
 {option: "月复盘", path: "Templates/复盘/Review月-月复盘模板.md", folder:"复盘"},
 {option: "读书笔记", path: "Templates/输入笔记/读书笔记模板.md", folder:"知识宝箱/采集库",appendLink: true},
]