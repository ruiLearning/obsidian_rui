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
let filetype = await tp.system.suggester(["游玩", "自驾", "其他"],["游玩", "自驾", "其他"], false, "路径放到哪里？")
if (filetype === "游玩") {
myFilePath = "/10-Live/Travel/" + `${newtitle}`;
await tp.file.move(`${myFilePath}`);
} else if (filetype === "自驾") {
myFilePath = "/10-Live/SelfDriving/" + `${newtitle}`;
await tp.file.move(`${myFilePath}`);
} else if (filetype === "其他") {
myFilePath = "/10-Live/Other/" + `${newtitle}`;
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

<% tp.web.random_picture("800x500", "happy") %>



{% note red 'fas fa-fan' flat%}

🧲🧲🧲`特别注意` ⚠️⚠️⚠️

{% endnote %}



## 🎏目的地
 <% `${newtitle}` %>

---

## ⏰旅行时间
<% tp.system.prompt("预计开始时间")%> ~  <% tp.system.prompt("预计结束时间") %>

---

## ⏰预计游玩时间
- <% tp.system.prompt("预计游玩时间(?天)")%>天

---

## ⚠️注意事项
风俗禁忌
防坑避雷🍚特色美食🛍️购物特产

---

## 🏷️行李准备
结合旅行目的地、季节、环境、天气等因素，参照📇[[tp-游玩CheckList]]  | 物品检查单打包行李。

---

## 📑行程安排 
- 💞Day1：
    - ✈️路线：➡️ ➡️ ➡️
    - 🚙玩：➡️ ➡️ ➡️
    - 🏝吃：
    - 🌈住：
    - 📌其它：

- 💞Day2：
- 💞Day3：
- 💞Day4：

---

## 📒预定情况

### 🧲特别注意
租车 多看几个平台，比较下价格
- 一嗨租车
- 神州租车
- 携程租车
- 美团租车

### ✈️出行
- Day1  年月日   
- Day2  年月日   
- Day3  年月日   
### 🏨酒店住宿
预定客栈、民宿等住宿时，建议提前打电话与老板沟通，是否涉及旅行期间调整房间等情况。

### 🎫景点门票
热门、限流的门票建议提前购买，关注门票优惠政策。

- 景点  门票  优惠政策
- 景点

---

## 🧭地图导航
- 高德地图对某些小路标识比较清楚。
- 运动手表 路线记录

### 参考路线
网上搜索，侵删
{% gallery %}

{% endgallery %}

---

## ☀️当地天气

- 建议使用工具
- 查台风：《实时台风路径》 
- 查潮汐时间、海上航线预报：微信小程序《海上通洋天气潮汐查询》
- 查天气：《彩云天气》
    - 只用雷达图

- Day1  年月日   晴天
- Day2  年月日   多云转小雨
- Day3  年月日   晴天

---

## 💵开销 #旅行账单

- 交通 
	- <% tp.system.prompt("出行方式是？")%>
- 景区小交通:
- 当地交通：
- 外部交通：
- 停车：
- 门票：
- 餐饮：
- 购物：
- 酒店住宿:

---

## 🍚特色美食

---

## 🛍️购物特产

---

## 🦠疫情防控

提前了解目的地疫情防控风险等级，了解当地疫情防控政策。
出国需要疫苗

---

## 📞紧急联络
- 紧急联系人及电话
	- <% tp.system.prompt("紧急联系人及电话是？")%>
- 报警电话
	- 打假举报、消费者投诉电话12315
	- 铁路客户服务中心电话12306
	- 全国汽车票预订平台电话12308
	- 政府服务热线电话12345
- 旅行社

## Tips
{% gallery %}  

{% endgallery %}
