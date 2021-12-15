let config = {
  getCourseTitle(){
    return $('.td1').first().html();
  }
};

chrome.runtime.sendMessage({cmd: 'check_course', course_id, course_title}, function (response) {
  course[0].click();
});