$(function () {
  const nav = $(".navbar-fixed-top");
  nav.toggleClass("scrolled", $(this).scrollTop() > nav.height());
});
