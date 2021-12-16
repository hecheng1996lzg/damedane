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
    },
    getCourseElapsedTime(course) {
        return course.parents('tr').children('td').eq(4).html();
    },
    getCourseCredit(course) {
        return course.parents('tr').children('td').eq(3).html();
    }
};

function course_start(id) {
    let courses = config.getCourses();
    if (courses.length > 0) {
        let course = courses.first();
        let course_id = config.getCourseId(course);
        let course_title = config.getCourseTitle(course);
        let course_elapsed_time = config.getCourseElapsedTime(course);
        let course_credit = config.getCourseCredit(course);
        let window_id = id
        chrome.runtime.sendMessage({
            cmd: 'selected_course',
            course_id,
            course_title,
            course_elapsed_time,
            course_credit,
            window_id
        }, function (response) {
            course[0].click();
        })
    }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    switch (request.cmd) {
        case 'start':
            course_start(request.data&&request.data.id ? request.data.id: null);
            break;
        case 'end_play':
            location.reload();
            break;
    }
});

$(() => {
    chrome.runtime.sendMessage({cmd: 'check_state'}, function (response) {
        if (response === 'played') {
            chrome.runtime.sendMessage({
                cmd: 'restart_course',
            });
        }
    });
});