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
> [timeline198::timeline]
```ad-flex
(Weather::<% `${weather}` %>)
```

<% tp.web.random_picture("1600x900", "happy") %>

# 旅行基本信息


## 🎏目的地
<%-*tp.file.title%>

## ⏰旅行时间
<%-* tp.system.prompt("预计开始时间") ~ tp.system.prompt("预计结束时间") %>

## ⏰建议游玩时间
- 

## 🗒游玩记录
- 

## 💵开销
- 交通
    - ✈️机票：
    - 🚄火车：
    - 🚌公交车：
    - 🛳️轮船：
    - 🚗汽车：
- 景区小交通:
- 停车：
- 门票：
- 餐饮：
- 购物：

## 💵预算开销

## ✈️外部交通
- 工具
    - APP、公众号或小程序
- 票务
    - 年月日

## 🚌当地交通

## 🏨酒店住宿
预定客栈、民宿等住宿时，建议提前打电话与老板沟通，是否涉及旅行期间调整房间等情况。

## 🍚特色美食

## 🛍️购物特产

## 🎫景点门票
热门、限流的门票建议提前购买，关注门票优惠政策。

- 景点1  门票  优惠政策
- 景点2

## 🧭地图导航
高德地图对某些小路标识比较清楚。

## 📑行程安排 #旅行账单
- Day1：
    - 玩什么，怎么玩……
    - 吃什么，在哪吃……
    - 花……
- Day2：
- Day3：
- Day4：

## ☀️当地天气
- 建议使用工具
- 查台风：《实时台风路径》 #APP、公众号或小程序
- 查潮汐时间、海上航线预报：微信小程序《海上通洋天气潮汐查询》#APP、公众号或小程序
- 查天气：《彩云天气》#APP、公众号或小程序
    - 只用雷达图


## 🦠疫情防控
提前了解目的地疫情防控风险等级，了解当地疫情防控政策。

## ⚠️注意事项
风俗禁忌
防坑避雷🍚特色美食🛍️购物特产

## 📞紧急联络
- 紧急联系人
- 报警电话
- 旅行社

## 🏷️行李准备
结合旅行目的地、季节、环境、天气等因素，参照📇CheckList  | 物品检查单打包行李。

