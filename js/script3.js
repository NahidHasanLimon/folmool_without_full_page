$(document).ready(function () {
    $(".category-item").click(function () {
      var category = $(this).attr("id");
      if (category == "all") {
        $(".item").addClass("hide");
        setTimeout(function () {
          $(".item").removeClass("hide");
        }, 300);
      } else {
        $(".item").addClass("hide");
        setTimeout(function () {
          $("." + category).removeClass("hide");
        }, 300);
      }
    });
  });
  