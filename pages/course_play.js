
/*
let config = {};

$(() => {
  chrome.runtime.sendMessage({cmd: 'check_state'}, function (response) {
    if (response === 'listening') {
      let src = $('frame')[0].src;
      window.open(src);
      window.close();
    }
  });
});

$(document).ready(function (e) {
  var iframe = document.getElementsByTagName('frame');
  if (iframe.attachEvent) {
    iframe.attachEvent("onload", function () {
      //iframe加载完成后你需要进行的操作
      console.log('aaa')
    });
  } else {
    iframe.onload = function () {
      console.log('bbb')
      //iframe加载完成后你需要进行的操作
    };
  }
}
*/
/*
document.addEventListener('DOMContentLoaded', function () {
  // 注入自定义JS
  var frame = document.getElementsByTagName('frame');
  var f1 = $('frame')[0].document;
  var f2 = $('frame').contents().find('body');
  var f3 = $('frame').document;
  console.log(f1,f2,f3);
  console.log(window.frames["frame"]);
  frame.onload = () => {
    console.log(1);
    var iframe = window.frames['course'];
    console.log(iframe);
  }
  //injectCustomJs('pages/inject_course_play.js');
});
*/

/*
window.addEventListener("message", function (e) {
  if ('cmd' in e.data) {
    switch (e.data.cmd) {
      case 'end_play':
        chrome.runtime.sendMessage({cmd: 'end_play'}, function (response) {

        });
        break
    }
  }
}, false);*/
