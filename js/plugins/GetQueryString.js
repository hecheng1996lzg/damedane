function GetQueryString(name,title=window.location.host) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = title.substr(0).match(reg); //匹配目标参数
  if (r !== null) return decodeURI(r[2]);
  return null;
}