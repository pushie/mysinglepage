$(function() {
    $('.clickHome').click(function() {
        pageChoose("home");
    })

    $('.clickProfile').click(function() {
        pageChoose("profile");
    })

    $('.menu').addClass('hide');
    var value = sessionStorage.getItem("username");
    if(value != null) {
        $('.my-form').addClass('hide');
        $('.menu').removeClass('hide');
        $('.profile').html(value);
    } else {
        $('.login').click(function() {
            var user_name = $('#username').val();
            sessionStorage.setItem("username", user_name);
            $('.my-form').addClass('hide');
            $('.menu').removeClass('hide');
            var valueBis = sessionStorage.getItem("username");
            $('.profile').html(valueBis);
        })
    }

    $('.logout').click(function() {
        $('.my-form').removeClass('hide');
        $('.menu').addClass('hide');
        $('.content').addClass('hide');
        sessionStorage.clear();
    })

});

function pageChoose(title) {
    var path = 'templates/' + title + '.html';
    $.get(path, function(content) {
        $(".content").html(content);
    })
}
