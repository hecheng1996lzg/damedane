let config = {
  getCourseTitle(){
    return $('.td1').first().html();
  },
  getCourseTotalTime(){
    return $('.td1').eq(6).html();
  },
  clickPlay(){
    $('.c.btnPos').find('.primary-btn.btn').click()
  }
};

$(()=>{
  // 确认状态
  chrome.runtime.sendMessage({cmd: 'check_state'}, function (response) {
    if(response==='selected'){
      let course_title = config.getCourseTitle();
      let course_total_time = config.getCourseTotalTime();
      // 修改状态
      chrome.runtime.sendMessage({
        cmd: 'listening_course',
        course_title,
        course_total_time,
      }, function (response) {
        if(response){
          // 确认状态，最多确认3次
          let repeat_max_num = 3;
          let repeat_current_num = 0;
          let repeat_flag = false;
          let timer = window.setInterval(()=>{
            if(repeat_current_num<repeat_max_num&&repeat_flag===false){
              repeat_current_num++;
              chrome.runtime.sendMessage({cmd: 'check_state'}, function (response) {
                if(response==='listening'){
                  config.clickPlay();
                  window.close();
                  repeat_flag = true;
                }
              });
            }else{
              window.clearInterval(timer);
            }
          },1000);
        }else{
          alert('error: 课程不匹配');
        }
      });
    }
  });
});
