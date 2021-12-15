let config = {
  getCourses() {
    return $('.course-table').find('a[target="_blank"]');
  },
  getCourseId(course) {
    let href = course.attr('href');
    let course_id = GetQueryString('courseid', href);
    return course_id;
  },
  getCourseTitle(course) {
    return course.attr('title');
  }
};

document.addEventListener('DOMContentLoaded', function () {
  // 注入自定义JS
  injectCustomJs();
});

function injectCustomJs(jsPath) {
  jsPath = jsPath || 'js/inject.js';
  var temp = document.createElement('script');
  temp.setAttribute('type', 'text/javascript');
  // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
  temp.src = chrome.extension.getURL(jsPath);
  temp.onload = function () {
    // 放在页面不好看，执行完后移除掉
    this.parentNode.removeChild(this);
  };
  document.head.appendChild(temp);
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch(request.cmd){
    case 'start':
      let courses = config.getCourses();
      if (courses.length > 0) {
        let course = courses.first();
        let course_id = config.getCourseId(course);
        let course_title = config.getCourseTitle(course);
        sendResponse('我收到了你的消息！');
        chrome.runtime.sendMessage({cmd: 'selected_course', course_id, course_title}, function (response) {
          course[0].click();
        });
      }
      break;
  }
});