$(document).ready(function () {
    $(".about").click(function () {
        $("#aboutDiv").toggle();
        $("#howToPlayDiv").hide();
    });

    $(".howToPlay").click(function () {
        $("#howToPlayDiv").toggle();
        $("#aboutDiv").hide();
    });

    $(".closeAbout").click(function () {
        $("#aboutDiv").hide();
        $("#gameIframe")[0].contentWindow.focus();
    });

    $(".closeHowToPlay").click(function () {
        $("#howToPlayDiv").hide();
        $("#gameIframe")[0].contentWindow.focus();
    });
});