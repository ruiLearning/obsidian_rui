---
title: <% tp.file.title %>
permalink:  <% tp.file.title %>.html
tags:
  - <% tp.system.prompt("tag标签设置为?", "") %>
categories:
  - <% tp.system.prompt("categories标签设置为?", "") %>
cover: /img/travel200.jpg
top_img: /img/travel200.jpg
date: <% tp.file.creation_date() %>
updated: <% tp.file.last_modified_date() %>
---

weather: <% tp.user.getWeather() %>