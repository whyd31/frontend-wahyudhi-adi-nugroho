
$(document).ready(function () {

  const navbar = $(".navbar-header");
  const toggle = $(".mobile-toggle");
  const menuText = $(".menu-text");

  toggle.on("click", function () {

    const isOpen = navbar.hasClass("menu-open");

    navbar.toggleClass("menu-open", !isOpen);
    $("body").toggleClass("menu-active", !isOpen);

    menuText.text(isOpen ? "MENU" : "CLOSE");

    toggle.attr("aria-expanded", !isOpen);

  });

  $(".nav-content a").on("click", function () {

    navbar.removeClass("menu-open");
    $("body").removeClass("menu-active");

    menuText.text("MENU");
    toggle.attr("aria-expanded", "false");

  });

});



document.addEventListener("DOMContentLoaded", function () {

  const tabs = document.querySelectorAll(".section-five-tab");
  const contents = document.querySelectorAll(".section-five-tab-content");

  tabs.forEach(function (tab) {

    tab.addEventListener("click", function () {

      const target = this.getAttribute("data-tab");

      // Reset semua tab
      tabs.forEach(function (item) {
        item.classList.remove("active");
        item.setAttribute("aria-selected", "false");
      });

      // Aktifkan tab yang diklik
      this.classList.add("active");
      this.setAttribute("aria-selected", "true");

      // Sembunyikan semua konten
      contents.forEach(function (content) {
        content.classList.remove("active");
        content.hidden = true;
      });

      // Tampilkan konten sesuai tab
      const activeContent = document.getElementById(target);

      if (activeContent) {
        activeContent.hidden = false;
        activeContent.classList.add("active");
      }

    });

  });

});
