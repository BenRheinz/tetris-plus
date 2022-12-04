//计时器
//初始化变量
let hour, minute, second, day; //时 分 秒
hour = minute = second = day = 0; //初始化
let millisecond = 0; //毫秒
let out = null;
let int;
//开始函数
function start() {
  int = setInterval(timer, 50); //每隔50毫秒执行一次timer函数
}
//计时函数
function timer() {
  millisecond = millisecond + 50;
  if (millisecond >= 1000) {
    millisecond = 0;
    second = second + 1;
  }
  if (second >= 60) {
    second = 0;
    minute = minute + 1;
  }

  if (minute >= 60) {
    minute = 0;
    hour = hour + 1;
  }

  if (hour >= 24) {
    hour = 0;
    day = day + 1;
    out = "都连续" + day + "个昼夜了，您真牛逼！！！";
  }
  document.getElementById("timetext").value =
    out + hour + "时" + minute + "分" + second + "秒" + millisecond + "毫秒";
}
//暂停函数
function stop() {
  window.clearInterval(int);
}
//重置函数
function Reset() {
  window.clearInterval(int);
  millisecond = hour = minute = second = day = 0;
  let out = null;
  document.getElementById("timetext").value = "00时00分00秒000毫秒";
}
//报告计时结果函数
function tellTime() {
  stop();
  if (day >= 40000) {
    let Bake =
      day +
      "昼夜零" +
      hour +
      "时" +
      minute +
      "分" +
      second +
      "秒" +
      millisecond +
      "毫秒";
    alert("足足" + Bake + "。您还是人吗？");
  } else if (day >= 1) {
    let Bake =
      day +
      "昼夜零" +
      hour +
      "时" +
      minute +
      "分" +
      second +
      "秒" +
      millisecond +
      "毫秒";
    alert("您足足存活了" + Bake + "。您真的太牛逼了！！！！！");
  } else {
    alert(
      "您存活了" + document.getElementById("timetext").value + "。点击确定继续"
    );
  }
  Reset();
}
