let chromeStorage = new ChromeStorage();
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.cmd) {
    switch (request.cmd) {
      case 'check_course':
        chromeStorage.set({
          state: 'selected',
          title: request.course_title,
          id: request.course_id
        });
        break;
    }
  }
  sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(chromeStorage));
});
