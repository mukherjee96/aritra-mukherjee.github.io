"use strict";
// document
//   .getElementById("collapseToggle")
//   .addEventListener("click", function (e) {
//     e.target.text.includes("Read More")
//       ? (e.target.text = "Read Less")
//       : (e.target.text = "Read More");
//   }),
  (function (e) {
    e(".js-scroll-trigger").click(function () {
      e(".navbar-collapse").collapse("hide");
    }),
      e("body").scrollspy({ target: "#sideNav" });
  })(jQuery),
  (window.onload = function () {
    document.getElementsByClassName("load-bar")[0].style.display = "none";
  }),
  $(function () {
    $('[data-toggle="popover"]').popover();
  });
