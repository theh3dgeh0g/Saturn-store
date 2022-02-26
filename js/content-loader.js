/* Загрузка домашней страницы при запуске */
$(document).ready(function loadHomePage() {

    $("#content").load("pages/home.html", function () {
});
});

/* Загрузка динамического контента при нажатии на кнопку навигации */
$(document).ready( function() {
    $("#load_home").on("click", function() {
        $("#content").load("pages/home.html");
    });
});

$(document).ready( function() {
    $("#load_program").on("click", function() {
        $("#content").load("pages/programs.html");
    });
});

$(document).ready( function() {
    $("#load_games").on("click", function() {
        $("#content").load("pages/games.html");
    });
});

$(document).ready( function() {
    $("#load_os").on("click", function() {
        $("#content").load("pages/os.html");
    });
});

$(document).ready( function() {
    $("#load_posts").on("click", function() {
        $("#content").load("pages/posts.html");
    });
});

$(document).ready( function() {
    $("#load_settings").on("click", function() {
        $("#content").load("pages/settings.html");
    });
});

$(document).ready( function() {
    $("#logout").on("click", function() {
        $("#content").load("pages/registration.html");
    });
});
/* Присвоение класса Active для активной кнопки навигации */
$('.nav-button').click( function() {
    $('.nav-button').removeClass("active");
    $(this).toggleClass("active");
  });
 
