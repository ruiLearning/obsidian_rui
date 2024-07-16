---
title: <% tp.file.title %>
permalink:  <% tp.file.title %>.html
tags:
  - <% tp.system.prompt("tag标签设置为?", "生活") %>
categories:
  - live
  - travel
cover: /img/travel200.jpg
top_img: /img/travel200.jpg
date: <% tp.file.creation_date() %>
updated: <% tp.file.last_modified_date() %>
weather: <% tp.user.getWeather() %>
---

<%-*
var cleanTitle = tp.user.getTitleSnippet(tp.file.title) 
var title = `${cleanTitle}`;
await tp.file.rename(`${title}`);
let myFilePath = "/00 Hexo/" + `${title}`;
await tp.file.move(`${myFilePath}`);
-%>

 <!--
% <% tp.system.suggester(["写作学习", "软件学习", "其他学习", "临时路径"], ["写作","软件", "其他", "临时"], false, "分类为？")%>
 <% tp.system.prompt("tag标签设置为?", "生活") %>
 -->

// Daily quote
<% tp.web.daily_quote() %>
// Random picture
<% tp.web.random_picture() %>
// Random picture with size
<% tp.web.random_picture("200x200") %>
// Random picture with size and query
<% tp.web.random_picture("200x200", "landscape,water") %>
<% tp.web.random_picture("1600x900", "happy") %>



