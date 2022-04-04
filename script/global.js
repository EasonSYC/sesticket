/*let bannedIpLength = 2;
let bannedIp = ["61.172.251.", "203.156.232.66"];

for (let i = 0; i < bannedIpLength; ++i) {
	if (returnCitySN["cip"].includes(bannedIp[i])) window.location.replace("http://www.ses.sh.edu.cn");
}*/

// Food Arrays

let levelArray = ["grey", "green", "orange", "red"];
let freqArray = ["未知", "不常", "有时", "经常"];
let butinfoArray = ["undefined", "选餐", "已选餐", "暂无权限"];
let butclassArray = ["undefined", "btn-outline-secondary", "btn-orange", "btn-gray disabled"];


// Basic Arrays

let weekArray = ["日", "一", "二", "三", "四", "五", "六"];
let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let numb = {
	"a": 0,
	"b": 1,
	"c": 2,
	"d": 3,
	"e": 4,
	"f": 5,
	"g": 6,
	"h": 7,
	"i": 8,
	"j": 9,
	"k": 10,
	"l": 11,
	"m": 12,
	"n": 13,
	"o": 14,
	"p": 15,
	"q": 16,
	"r": 17,
	"s": 18,
	"t": 19,
	"u": 20,
	"v": 21,
	"w": 22,
	"x": 23,
	"y": 24,
	"z": 25
}

function min(a, b) {
	return a < b ? a : b;
}

function max(a, b) {
	return a > b ? a : b;
}

function noA(str) {
	let i;
	for (i = str.length - 1; i >= 0; --i) {
		if (str[i] !== 'a') break;
	}
	str = str.substr(0, i + 1);
	str = str.replace(/undefined/g, "a");
	return str;
}

// error Arrays

let errorId = ["400", "401", "403", "404", "405", "500", "502", "900", "901", "902"];

let errorPrompt = ["请求无效！", "授权失败！", "暂时无法访问所请求的资源！", "所请求的资源不存在！", "所请求的资源被禁止访问！", "服务器错误，请稍后刷新重试！", "网关错误，请稍后刷新重试！", "当前ip或ip段被封禁！", "当前帐号被封禁！", "该功能维护中！"];

let eggs = [
	"随机数的范围不包括这串字符，你是怎么让它显示出来的？",
	"别让食堂阿姨用扫票机扫你的餐票……",
	"知道吗，这个项目最早从九月底就开始编写了……",
	"“你今天是真的8区吗？”",
	"不要尝试生成几千年的餐票，这会让你的电脑卡住！",
	"输错网址了，憨批！",
	"如果你点了网站里的一个按钮来到这里，请向我们报告！",
	"找啊找，找啊找，找到一个404",
	"(0,0)",
	"页面建设中……"];

// error Strings

let before =
	"<p class=\"display-1 text-danger py-3\" id=\"error-typ\"> 404 </p>" +
	"<p class=\"text-muted\" id=\"error-prompt\" style=\"font-size: 25px\">页面建设中...</p>";
let home =
	"<a class=\"btn btn-outline-secondary px-5 mt-5\" href=\"/sesticket/index.html\" id=\"g-but\">" +
	"首页" +
	"</a>";
let back =
	"<a class=\"btn btn-outline-secondary px-5 mt-5\" id=\"g-but\" onclick=\"history.back();\">" +
	"返回" +
	"</a>";
let after =
	"" +
	"<a class=\"btn btn-outline-secondary px-5 mt-5\" href=\"/sesticket/help.html#NotFound\">" +
	"帮助" +
	"</a>";

// error functions

function jumpError(a) {
	window.location.replace("/sesticket/error.html#" + a);
}

// Warning Arrays

let warningTitles = ["2021-02-11更新"];
let warningInfo = [" - 优化消息推送系统前端显示\n - 修复生成bug"];
let warningLength = 1;

// Warning Functions

function showWarning(s) {
	let newElement = document.createElement("div");
	newElement.className = "alert alert-warning";
	newElement.style = "margin-bottom: 0.3rem";
	newElement.innerText = s;
	document.getElementsByClassName("content-bg")[0].firstElementChild.insertBefore(newElement, document.getElementsByClassName("content-bg")[0].firstElementChild.firstElementChild);
}

function showWarnings() {
	for (let i = 0; i < warningLength; ++i) {
		let warning = warningTitles[i] + ":\n" + warningInfo[i];
		showWarning(warning);
	}
}

// Alert Functions

function gAlert(txt) {
	document.getElementById("gAlertModal").style.display = "block";
	document.getElementById("gAlertBack").style.display = "block";
	document.getElementById("gAlertMsg").innerHTML = txt;
	setTimeout(function () {
		document.getElementById("gAlertModal").classList.add("show");
		document.getElementById("gAlertBack").classList.add("show");
	}, 10);
}

function gAlertClose() {
	document.getElementById("gAlertModal").classList.remove("show");
	document.getElementById("gAlertBack").classList.remove("show");
	setTimeout(function () {
		document.getElementById("gAlertModal").style.display = "none";
		document.getElementById("gAlertBack").style.display = "none";
	}, 160);
}

// <div id="gAlertModal" class="modal fade global-alert" style="display: none;">
//     <div class="modal-dialog modal-sm">
//         <div class="modal-content">
//             <button id="gAlertButton" type="button" class="close float-right">
//                 <span aria-hidden="true">×</span>
//             </button>
//             <div id="gAlertMsg" class="text-center font-weight-bold"></div>
//         </div>
//     </div>
// </div>
// <div id="gAlertBack" class="modal-backdrop fade" style="display: none;"></div>

// User Strings

let tynArray = [
	"undefined",
	"开发者",
	"SVIP",
	"VIP",
	"普通用户"];
let tydArray = [
	"undefined",
	"DEV",
	"SVIP",
	"VIP",
	"USER"];
let mulmaxArray = [
	undefined,
	10000,
	30,
	14,
	5];
let allArray = [
	"undefined",
	"自助餐盖浇饭面档套餐A套餐B套餐C", // 去除
	"盖浇饭面档套餐A套餐B套餐C", // 自助餐去除
	"盖浇饭面档套餐A套餐B套餐C",
	"套餐A套餐B套餐C"];
let usrallArray = [
	"undefined",
	"所有餐类",
	"所有餐类",
	"除自助餐外餐类",
	"套餐"];

// User Functions

function getUserInfo(reqType, reqContent, resType) {
	let resGetId = -1;
	if (reqType === "name") {
		for (let i = 0; i < usrnum; ++i) {
			if (nameArray[i] === sha1(reqContent)) {
				resGetId = i;
				break;
			}
		}
		if (resGetId === -1) return "-1";
	}
	if (reqType === "id") {
		resGetId = reqContent;
		if (resGetId < 0 || resGetId >= usrnum) return -1;
	}
	if (resType === "name") return nameArray[resGetId];
	if (resType === "pwd") return pwdArray[resGetId];
	if (resType === "id") return resGetId;
	if (resType === "level") return typArray[resGetId];
	if (resType === "type") return tynArray[typArray[resGetId]];
	if (resType === "allow") return allArray[typArray[resGetId]];
	if (resType === "allowusr") return usrallArray[typArray[resGetId]];
}

function getCookie(cname) {
	let name = cname + "=";
	let ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function getName() {
	return (getCookie("acc") === "") ? "-1" : decodeURI(getCookie("acc").split("@")[0]);
}

function getInfo(rep) {
	if (rep === "name") return getName();
	else return getUserInfo("name", getName(), rep);
}

function getPwd() {
	return getCookie("acc").split("@")[1];
}

function delCookie(cname) {
	let d = new Date();
	d.setTime(d.getTime() - 1);
	let c = getCookie(cname);
	document.cookie = cname + "=" + c + ";expires=" + d.toUTCString() + ";path=/";
}

function exists() {
	let nam = getName();
	if (nam === "-1") {
		delCookie("acc");
		return 0;
	}
	let pwd = getPwd();
	let trupwd = getUserInfo("name", nam, "pwd");
	if (trupwd === "-1") {
		delCookie("acc");
		return 0;
	}
	if (pwd === trupwd) return 1;
	delCookie("acc");
	return 0;
}

// sha1 Functions

function encodeUTF8(s) {
	var i, r = [], c, x;
	for (i = 0; i < s.length; i++)
		if ((c = s.charCodeAt(i)) < 0x80) r.push(c);
		else if (c < 0x800) r.push(0xC0 + (c >> 6 & 0x1F), 0x80 + (c & 0x3F));
		else {
			if ((x = c ^ 0xD800) >> 10 == 0) //对四字节UTF-16转换为Unicode
				c = (x << 10) + (s.charCodeAt(++i) ^ 0xDC00) + 0x10000,
					r.push(0xF0 + (c >> 18 & 0x7), 0x80 + (c >> 12 & 0x3F));
			else r.push(0xE0 + (c >> 12 & 0xF));
			r.push(0x80 + (c >> 6 & 0x3F), 0x80 + (c & 0x3F));
		}

	return r;
}

function sha1(s) {
	var data = new Uint8Array(encodeUTF8(s))
	var i, j, t;
	var l = ((data.length + 8) >>> 6 << 4) + 16, s = new Uint8Array(l << 2);
	s.set(new Uint8Array(data.buffer)), s = new Uint32Array(s.buffer);
	for (t = new DataView(s.buffer), i = 0; i < l; i++) s[i] = t.getUint32(i << 2);
	s[data.length >> 2] |= 0x80 << (24 - (data.length & 3) * 8);
	s[l - 1] = data.length << 3;
	var w = [], f = [
		function () {
			return m[1] & m[2] | ~m[1] & m[3];
		},
		function () {
			return m[1] ^ m[2] ^ m[3];
		},
		function () {
			return m[1] & m[2] | m[1] & m[3] | m[2] & m[3];
		},
		function () {
			return m[1] ^ m[2] ^ m[3];
		}
	], rol = function (n, c) {
		return n << c | n >>> (32 - c);
	},
		k = [1518500249, 1859775393, -1894007588, -899497514],
		m = [1732584193, -271733879, null, null, -1009589776];
	m[2] = ~m[0], m[3] = ~m[1];
	for (i = 0; i < s.length; i += 16) {
		var o = m.slice(0);
		for (j = 0; j < 80; j++)
			w[j] = j < 16 ? s[i + j] : rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1),
				t = rol(m[0], 5) + f[j / 20 | 0]() + m[4] + w[j] + k[j / 20 | 0] | 0,
				m[1] = rol(m[1], 30), m.pop(), m.unshift(t);
		for (j = 0; j < 5; j++) m[j] = m[j] + o[j] | 0;
	}

	t = new DataView(new Uint32Array(m).buffer);
	for (var i = 0; i < 5; i++) m[i] = t.getUint32(i << 2);

	var hex = Array.prototype.map.call(new Uint8Array(new Uint32Array(m).buffer), function (e) {
		return (e < 16 ? "0" : "") + e.toString(16);
	}).join("");
	return hex;
}

// Date Functions

function getTo() {
	let today = new Date();
	let toyear = today.getFullYear();
	let tomonth = today.getMonth() + 1;
	let todate = today.getDate();
	let tod = today.getDay();
	return {
		"yr": toyear,
		"mo": tomonth,
		"da": todate,
		"wk": weekArray[tod],
		"al": today
	};
}

function getWk() {
	let sday = getTo().al;
	while (sday.getDay() !== 1) sday.setDate(sday.getDate() + 1);
	let eday = new Date(sday);
	eday.setDate(eday.getDate() + 4);
	let syear = sday.getFullYear();
	let smonth = sday.getMonth() + 1;
	let sdate = sday.getDate();
	let sod = sday.getDay();
	let eyear = eday.getFullYear();
	let emonth = eday.getMonth() + 1;
	let edate = eday.getDate();
	let eod = eday.getDay();
	return {
		"syr": syear,
		"smo": smonth,
		"sda": sdate,
		"swk": weekArray[sod],
		"sal": sday,
		"eyr": eyear,
		"emo": emonth,
		"eda": edate,
		"ewk": weekArray[eod],
		"eal": eday
	};
}

function checkDt(y, m, d) {
	askD = new Date(y + "/" + m + "/" + d);
	if (askD.getTime() < new Date().getTime() - 86400000) return false;
	if (askD.getDate() !== d) return false;
	if (askD.getMonth() + 1 !== m) return false;
	if (askD.getFullYear() !== y) return false;
}

// Action Functions

function noLogin(source) {
	window.location.replace("/sesticket/login.html?ref=" + source);
}

function index() {
	if (exists()) {
		window.location.reload();
	} else {
		gAlert("用户名或密码错误！");
	}
}

// API Functions

function encodeDate(year, month, date) {
	return year * 416 + month * 32 + date;
}

function decodeDate(api) {
	let yr = Math.floor(api / 416);
	let mod = api % 416;
	let mo = Math.floor(mod / 32);
	let da = mod % 32;
	return {
		"yr": yr,
		"mo": mo,
		"da": da
	};
}

function basicURLInfo() {
	return {
		"url": document.location.toString(),
		"urlParmStr": document.location.toString().slice(document.location.toString().indexOf("?") + 1),
		"parmArr": document.location.toString().slice(document.location.toString().indexOf("?") + 1).split("&")
	};
}

// Show Values

let choiceModel =
	"<li>" +
	"<div class=\"row no-gutters\">" +
	"<div class=\"col-12\">" +
	"<div class=\"px-3\">" +
	"<b class=\"title\">AREA区 FOOD</b>" +
	"<a class=\"btn btn-sm BUTCLASS\"" +
	"onclick=\"chooseType(INDEX, ID)\">BUTINFO</a>" +
	"<br>" +
	"<small>" +
	"<span class=\"text-muted\">食堂FLOOR楼</span>" +
	"</small>" +
	"<div>" +
	"<i class=\"fa fa-exclamation-triangle icon-LEVEL\"></i>" +
	"<small class=\"mr-1\">" +
	"FREQ扫描" +
	"</small>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</li>";

let noChoose = "<div class=\"text-muted text-center mt-4\">点击这里选餐</div>";

let chosenModel =
	"<b class=\"title\">AREA区 FOOD</b>" +
	"<span class=\"float-right\">" +
	"<span class=\"badge badge-orange\">" +
	"已选餐" +
	"</span>" +
	"</span>" +
	"<br>" +
	"<small>" +
	"<span class=\"text-muted\">食堂FLOOR楼</span>" +
	"</small>" +
	"<div>" +
	"<i class=\"fa fa-exclamation-triangle icon-LEVEL\"></i>" +
	"<small class=\"mr-1\">" +
	"FREQ扫描" +
	"</small>" +
	"</div>";

let choicePanelModel =
	"<ul class=\"supply-date-list px-3\">" +
	"<li class=\"py-2\">" +
	"<div class=\"row no-gutters\" onclick=\"showChoice(INDEX)\">" +
	"<div class=\"col-3\">" +
	"<div class=\"date-icon\">" +
	"DATE" +
	"</div>" +
	"</div>" +
	"<div class=\"col-9\">" +
	"<div class=\"row no-gutters\">" +
	"<div class=\"col-12\">" +
	"<div class=\"px-3\" id=\"shcINDEX\">" +
	"CHOICE" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"<ul class=\"supply-list shadow-sm\" id=\"chcINDEX\">" +
	"</ul>" +
	"</li>" +
	"</ul>";

let ticketModel =
	"<div class=\"col-6 mt-2 d-flex justify-content-center\">" +
	"<div class=\"order-panel\"> " +
	"<div class=\"d-flex justify-content-between\">" +
	"<div>" +
	"<div class=\"order-name\">FOOD" +
	"</div>" +
	"<a href=PURL>" +
	"<img class=\"img-qrcode border\" id=\"qrcINDEX\">" +
	"</a>" +
	"<div class=\"user-name text-center\">" +
	"<span>NAME</span>" +
	"</div>" +
	"</div>" +
	"<div class=\"ticket-body\">" +
	"<div class=\"order-area\">AREA " +
	"<span class=\"order-area-tail\">" +
	"区" +
	"</span>" +
	"</div>" +
	"<div class=\"order-location\">" +
	"<span>" +
	"食堂FLOOR楼" +
	"<span>" +
	"<br>" +
	"<span>DATE</span>" +
	"</span>" +
	"</span>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>";

let codeModel = "QRCode.toDataURL(\"SURL\", {errorCorrectionLevel: 'M'}, function (rtt, url) {document.getElementById(\"qrcINDEX\").src=url;});";

// Show Functions

function showChoice(a) {
	let chc = document.getElementById("chc" + a);
	if (on[a] === 0 || on[a] === undefined) {
		let ret = "";
		for (let i = 1; i <= foodNumb; ++i) {
			ret += choiceModel;
			ret = ret.replace(/INDEX/g, a);
			ret = ret.replace(/AREA/g, numArray[i]);
			ret = ret.replace(/ID/g, i);
			ret = ret.replace(/FOOD/g, foodArray[i]);
			ret = ret.replace(/FLOOR/g, locArray[i]);
			ret = ret.replace(/LEVEL/g, levelArray[alertArray[i]]);
			ret = ret.replace(/FREQ/g, freqArray[alertArray[i]]);
			if (getUserInfo("name", getName(), "allow").includes(foodArray[i]) === false) {
				ret = ret.replace(/BUTINFO/g, butinfoArray[3]);
				ret = ret.replace(/BUTCLASS/g, butclassArray[3]);
			} else if (i === choice[a]) {
				ret = ret.replace(/BUTINFO/g, butinfoArray[2]);
				ret = ret.replace(/BUTCLASS/g, butclassArray[2]);
			} else {
				ret = ret.replace(/BUTINFO/g, butinfoArray[1]);
				ret = ret.replace(/BUTCLASS/g, butclassArray[1]);
			}
		}
		chc.innerHTML = ret;
		on[a] = 1;
	} else {
		chc.innerHTML = "";
		on[a] = 0;
	}
}

function chooseType(a, tp) {
	choice[a] = parseInt(tp);
	updateLook(a);
	showChoice(a);
}

// Cache Functions

function setCache(onChange, value) {
	if (onChange === 1) localStorage.cache = value;
	if (!localStorage.cache) localStorage.cache = 2;
}

function getCache() {
	return localStorage.cache;
}

// Print Strings

let nowChoice = ["无", "绿字", "个人设置界面", "扫描机（研发中）"];
let nowPeople = ["学生", "食堂工作人员", "特定食堂阿姨（注意观察）", "扫描机（研发中）"];

// Print Functions

function showTypeOption(type, option) {
	if (type === 1) {
		if (option === 0) return false;
		if (option === 2) return false;
		return true;
	}
	if (type === 6 || type === 8) {
		if (option === 0) return false;
		if (option === 3) return false;
		return true;
	}
	if (option === 2) return false;
	if (option === 3) return false;
	return true;
}

// Account Strings

let usrnum = 20;

let nameArray = [
	"3dacbce532ccd48f27fa62e993067b3c35f094f7",
	"7b45cc4c64b0ba1dc8f4c9f331a068a783ef2cbc",
	"dc7d96d4125e819d53e0efe8001afa6a64b35728",
	"12dea96fec20593566ab75692c9949596833adc9",

	"a28079aa9ed5861504d0fde60544f715df764110",
	"a7a12ba71f7ab5331cfffe1a0c1e12baa2661069",

	"1774e2c4e2b80256dd9795e15e3582d3fd2e4b4b",
	"fab60904d36306295b5d27dc1745a645482b2201",
	"032b83ec07d20c839f43b18b85ee2a71906cc524",
	"a67a98a27ce25528db145277dde1a9eee29e9a46",
	"ebf91f6760eef10753bed9bf00b46945f253a2e1",
	"9bb63820ef3c5518cd3b7572778a05e8f3d0fd51",
	"87bcfe46af9de8e5d1cd0c17d5fcd0304a9df0ed",
	"9fde18f0f2b7f00ad12bf359f1e7ca34333c88a0",
	"1cd46927d1b76a822ee0eb18d107c76d78c7f7c9",
	"30f5f93cb7a270ae2f7c0b8bb25b7fe02bc32037",
	"19957464c8c428c3faf9d871f3f54a7e40c88dd8",
	"6a2945fd79274a1f336706874edd22ef8a568061",
	"369c81a98dcdc81919c8dc7b7867948b2c990629"];

let pwdArray = [
	"1a9f35e469dd557845ba707710e89b8da52205d0",
	"89ecddf086cc2982e7f846c0480b8fb023b7fdc6",
	"a1d7124b3c6aa915695ef5d034bfb0d0f18c406f",
	"b5d9564790a2d404044a754a823997b3a0a5f9f4",

	"ff056ca3395f42bbe070030796c23d8e1c1bdd13",
	"26fbe9076e5ff62ccdf3e638822455a0c27df2ce",

	"83df01d6c37cd73b9e3e21fc41843dbe32e41ffc",
	"7e226f1ff2de32b0e5b998c7b462110c1a21ea4b",
	"89f3470b295b2e8cec7c3d44c6424d541c3a3151",
	"72363c4a438ead591cbd436f69e4da0dd5c6d95f",
	"2f42c22ec0cc1e08f446a46c9fd2ea1bf204e8e1",
	"c11c41262e19826e0edac6846a84ea654a05a0f7",
	"10e1ffb4e07fa322c388583973d6f1766b59b9ea",
	"0cecd7c48550073c1878bb29b793d610e991fb1e",
	"ab830e4c21aeb7552d99f43d618d936bd39477d1",
	"8fde25357d4016971d05656d885d94897be12ea9",
	"92c6e6914c916aa364704c2afbd1aa5cb563c20c",
	"6efb22acaac49daae5fa5fadfd3fd87981434c47",
	"46ef305e12a01ff5a0affb3dd26f62f26a182518"];

let typArray = [
	1,
	2,
	3,
	4,

	1,
	1,

	2,
	2,
	2,
	2,
	2,
	2,
	2,
	2,
	2,
	2,
	2,
	2,
	2,
	2];

// Charge Strings & Functions

let chargeUserID = [9, 15, 6, 17, 16, 13];
let chargeStartDate = ["2021/06/07", "2021/06/07", "2021/06/07", "2021/06/07", "2021/06/11", "2021/06/16"];
let chargeEndDate = ["2021/07/07", "2021/07/07", "2021/07/07", "2021/07/07", "2021/07/11", "2021/07/16"];
let chargeStatus = [2, 2, 2, 2, 2, 2]; // 0: 已取消, 1: 已退款, 2: 正常充值, 3: 赠送

let chargeModel =
	"<div>" +
	"<ul class=\"px-3 charge-list\">" +
	"<li class=\"py-2\" style=\"#ccc\">" +
	"<div class=\"row no-gutters\">" +
	"<div class=\"col-3\">ID</div>" +
	"<div class=\"col-3\">START</div>" +
	"<div class=\"col-3\">END</div>" +
	"<div class=\"col-3\">STAT</div>" +
	"</li>" +
	"</ul>" +
	"</div>";

let chargeStatList = ["充值已取消", "充值已退款", "充值数据出错", "充值已过期", "充值时间未到", "充值使用中", "赠送数据出错", "赠送已过期", "赠送已到账", "赠送使用中"]

function verifyCharge(userID) {
	return 0; // 跳过判定
	if (getUserInfo("name", getName(), "level") === 1) return 0; // 开发者跳过判断
	for (let i = 0; i < chargeUserID.length; ++i) {
		if (chargeUserID[i] === userID && (queryCharge(i) === 5 || queryCharge(i) === 8)) {
			return 0; // 有效
		}
	}
	return 1; // 无效
}

function queryCharge(i) {
	if (chargeStatus[i] === 0) return 0; // 充值已取消
	if (chargeStatus[i] === 1) return 1; // 充值已退款
	let csdate = new Date(chargeStartDate[i]), cedate = new Date(chargeEndDate[i]), date = new Date();
	if (chargeStatus[i] === 2) {
		if (cedate < csdate) return 2;// 充值数据出错
		if (date > cedate) return 3; // 充值已过期
		if (date < csdate) return 4; // 充值时间未到
		return 5; // 充值使用中
	}
	if (chargeStatus[i] === 3) {
		if (cedate < csdate) return 5;// 赠送数据出错
		if (date > cedate) return 6; // 赠送已过期
		if (date < csdate) return 7; // 赠送已到账
		return 8; // 赠送使用中
	}
}

// Food Arrays

let foodNumb = 9;
let foodArray = ["undefined", "自助餐", "套餐A", "套餐A", "套餐A", "套餐B", "盖浇饭", "套餐C", "面档", "套餐B"];
let locArray = ["undefined", "一", "一", "一", "二", "二", "二", "二", "二", "二"];
let alertArray = ["undefined", "3", "1", "1", "1", "1", "2", "1", "2", "1"];
let numArray = ["undefined", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let alertTextArray = ["undefined", "<br><br>请不要用扫描机扫描餐票！", "", "", "", "", "<br><br>注意真餐票扫描结果并切换！<br>6区较多出现的阿姨为个人设置界面！", "", "", ""];