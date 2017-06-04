$( document ).ready(function() {
    var isMobile = window.matchMedia("only screen and (max-width: 767px)");

    if (isMobile.matches) {
      $(".desktop").addClass("hide");
      $(".mobile").removeClass("hide");
      $("button").click(function() {
        $(".navigation").toggle();
      })
    }
 });
