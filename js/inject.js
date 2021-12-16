function isPopWin(playTime){
  return false;
}
function countCourseTimeResult(rs){
  if(rs.err < 0){
    alert(rs.msg);
    if(rs.err == '-2'){
      window.opener.location.href='/study/login.php';
    }
    window.close();
    return;
  }else{
    if(rs.err ==1){ //完成学习时间
      if(rs.examType == 'W'){
        window.postMessage({"cmd": 'end_play'}, '*');
      }else if(rs.examType == 'E'){
        var studyE = get_study_cookie('studyE'); // 获取cookie 是否已经弹出过提示框
        if(studyE != 1){ // 没有cookie 说明是第一次 弹出提示框
          ret=window.confirm('请根据您对本课程内容的理解，完成考核题！');
          if(ret) {
            window.opener.location.href='/my/exam.php?courseid='+rs.courseId;
            window.close();
          }else{
            set_study_cookie('studyE',1,10);
          }
        }
      }else if(rs.examType == 'S'){
        var studyS = get_study_cookie('studyS'); // 获取cookie 是否已经弹出过提示框
        if(studyS != 1){ // 没有cookie 说明是第一次 弹出提示框
          ret=window.confirm('您的学习时间已达到要求，可以提交心得。现在提交心得吗？');
          if(ret) {
            window.opener.location.href='/my/exam_summary.php?act=add&courseid='+rs.courseId;
            window.close();
          }else{
            set_study_cookie('studyS',1,10);
          }
        }
      }
    }else{
      //20分钟 弹出框
      var playTime = 0;
      playTime = rs.playTime;
      if(playTime > 0 && playTime != null){
        var needPopWin = isPopWin(playTime);
        if(needPopWin){
          updateLastStudyTime();
          var t =parseInt(effectComTime/60);
          ret = window.confirm("您是否要继续学习? \r\n 请在"+t+"分钟之内点击确定");
          confirmTime = 0;
          confirmStopTime();
          if(parseInt(confirmTime) > effectComTime){//2分钟不响应，则判断超时
            window.alert("您超时了！");
            //clearCurrentStudy(); //清除此次学习时间
            window.close();//关闭窗口
          }
        }
      }
    }
  }
}
