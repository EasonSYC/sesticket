let url = document.location.toString();
let urlParmStr = url.slice(url.indexOf('#')+1);
let numArray = ["undefined","1","2","3","4","5","6","7","8","9"];
let foodArray = ["undefined","自助餐","套餐A","套餐A","套餐A","套餐B","盖浇饭","套餐C","面档","套餐B"];
let locArray = ["undefined","一","一","一","二","二","二","二","二","二"];urlParmStr1 = parseInt(urlParmStr, 16);
var acc = Math.floor(urlParmStr1 / 4030);
var sc = urlParmStr1 % 4030;
var typ = Math.floor(sc / 403);
var tim = sc % 403;
var day = tim % 31 + 1;
var month = Math.floor(tim / 31 + 1);
var weekArray = ["日", "一", "二", "三", "四", "五", "六"];
var wkday = weekArray[new Date("2020/"+month+"/"+day).getDay()];
var num = numArray[typ];
var food = foodArray[typ];
var loc = locArray[typ];
var level = typeArray[acc];