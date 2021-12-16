let chromeStorage = new ChromeStorage();
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.cmd) {
    switch (request.cmd) {
      case 'selected_course':
        chromeStorage.set({
          state: 'selected',
          title: request.course_title,
          id: request.course_id,
          elapsed_time: request.course_elapsed_time,
          credit: request.course_credit
        });
        break;
      case 'check_state':
        let state = chromeStorage.get('state');
        sendResponse(state);
        break;
      case 'listening_course':
        let title = chromeStorage.get('title');
        if (title === request.course_title) {
          chromeStorage.set({
            state: 'listening',
            total_time: request.course_total_time
          });
          sendResponse(true);
        } else {
          sendResponse(false);
        }
        break;
      case 'end_play':
        chromeStorage.set({
          state: 'played',
        },()=>{
          console.log('played');
          sendMessageToContentScript({cmd:'end_play'});
        });
        break;
      case 'restart_course':
        chromeStorage.init();
        chromeStorage.set({},()=>{
          sendMessageToContentScript({cmd:'start'});
        });
        break;
    }
  }
});
