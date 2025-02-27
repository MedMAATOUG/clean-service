(function ($) {
  "use strict";
  jQuery(document).on("ready", function () {
    $(".homepage-slides").owlCarousel({
      items: 1,
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      autoplay: true,
      smartSpeed: 1000,
      loop: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      responsiveClass: true,
      responsive: {
        0: { autoplay: false },
        768: { autoplay: false },
        1200: { autoplay: true },
      },
    });
    $(".homepage-slides").on("translate.owl.carousel", function () {
      $(".single-slider-item h1, .single-slider-item p")
        .removeClass("animated fadeInUp")
        .css("opacity", "0");
      $(".single-slider-item .slide-btn")
        .removeClass("animated fadeInDown")
        .css("opacity", "0");
    });
    $(".homepage-slides").on("translated.owl.carousel", function () {
      $(".single-slider-item h1, .single-slider-item p")
        .addClass("animated fadeInUp")
        .css("opacity", "1");
      $(".single-slider-item .slide-btn")
        .addClass("animated fadeInDown")
        .css("opacity", "1");
    });
    $(".home-three-slider").on("translate.owl.carousel", function () {
      $(".slider-thre-item-wrap h2, .slider-thre-item-wrap p")
        .removeClass("animated fadeInUp")
        .css("opacity", "0");
      $(".slider-thre-item-wrap .vidbtn")
        .removeClass("animated fadeInDown")
        .css("opacity", "0");
    });
    $(".home-three-slider").on("translated.owl.carousel", function () {
      $(".slider-thre-item-wrap h2, .slider-thre-item-wrap p")
        .addClass("animated fadeInUp")
        .css("opacity", "1");
      $(".slider-thre-item-wrap .vidbtn")
        .addClass("animated fadeInDown")
        .css("opacity", "1");
    });
    $(".home-four-slider").on("translate.owl.carousel", function () {
      $(".slider-four-item-wrap h2")
        .removeClass("animated fadeInUp")
        .css("opacity", "0");
      $(".slider-four-item-wrap .sl4-btn")
        .removeClass("animated fadeInDown")
        .css("opacity", "0");
    });
    $(".home-four-slider").on("translated.owl.carousel", function () {
      $(".slider-four-item-wrap h2")
        .addClass("animated fadeInUp")
        .css("opacity", "1");
      $(".slider-four-item-wrap .sl4-btn")
        .addClass("animated fadeInDown")
        .css("opacity", "1");
    });
    $(".car-washing-slider").on("translate.owl.carousel", function () {
      $(".single-cw-slider .slider-text h1, .single-cw-slider .slider-text p")
        .removeClass("animated fadeInUp")
        .css("opacity", "0");
      $(".single-cw-slider .slider-text .cw-custom-btn")
        .removeClass("animated fadeInDown")
        .css("opacity", "0");
    });
    $(".car-washing-slider").on("translated.owl.carousel", function () {
      $(".single-cw-slider .slider-text h1, .single-cw-slider .slider-text p")
        .addClass("animated fadeInUp")
        .css("opacity", "1");
      $(".single-cw-slider .slider-text .cw-custom-btn")
        .addClass("animated fadeInDown")
        .css("opacity", "1");
    });
    $(".counter-number").counterUp({ delay: 10, time: 1000 });
    $(".shop-slides").owlCarousel({
      items: 4,
      nav: true,
      margin: 30,
      dots: false,
      autoplay: false,
      autoplayHoverPause: true,
      loop: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      responsive: { 0: { items: 1 }, 650: { items: 2 }, 1000: { items: 4 } },
    });
    $(".testimonial-slides").owlCarousel({
      items: 2,
      nav: true,
      margin: 30,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      loop: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 2 } },
    });
    new WOW().init();
    $(".team-slides").owlCarousel({
      nav: true,
      margin: 30,
      dots: false,
      autoplay: false,
      autoplayHoverPause: true,
      loop: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        768: { items: 3 },
        1000: { items: 4 },
      },
    });
    $(".blog-slides").owlCarousel({
      items: 1,
      nav: true,
      margin: 0,
      dots: false,
      autoplayHoverPause: true,
      autoplay: false,
      loop: false,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
    });
    $(".home-three-slider").owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      mouseDrag: false,
    });
    $(".home-four-slider").owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      autoplay: true,
      smartSpeed: 2000,
      autoplayHoverPause: true,
    });
    $(".car-washing-slider").owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: true,
      dots: true,
      autoplay: true,
      mouseDrag: false,
      smartSpeed: 2000,
      autoplayHoverPause: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
    });
    $(".services-slider").owlCarousel({
      dots: true,
      autoplay: true,
      loop: true,
      margin: 30,
      autoplayHoverPause: true,
      nav: false,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        768: { items: 2 },
        1199: { items: 3 },
      },
    });
    $(".cw-m-services-slider").owlCarousel({
      dots: false,
      autoplay: true,
      loop: true,
      autoplayHoverPause: true,
      nav: false,
      smartSpeed: 2000,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        768: { items: 3 },
        1000: { items: 4 },
      },
    });
    $(".cw-testimonial-slider").owlCarousel({
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      loop: true,
      margin: 10,
      nav: false,
      smartSpeed: 2000,
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 1 },
        1199: { items: 2 },
      },
    });
    $(".test-slider").owlCarousel({
      dots: true,
      autoplay: true,
      loop: true,
      margin: 30,
      autoplayHoverPause: true,
      smartSpeed: 2000,
      nav: false,
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 2 },
        1199: { items: 2 },
      },
    });
    $(".counter").counterUp({ delay: 100, time: 2000 });
    $(".popup-gallery").magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-img-mobile",
      gallery: { enabled: true, navigateByImgClick: true, preload: [0, 1] },
    });
    $(".client-slides").owlCarousel({
      dots: false,
      autoplay: true,
      loop: true,
      margin: 30,
      autoplayHoverPause: true,
      nav: false,
      responsive: {
        0: { items: 2 },
        500: { items: 3 },
        600: { items: 4 },
        768: { items: 5 },
        1199: { items: 6 },
      },
    });
    $(".project-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
    });
    $(".testi-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      smartSpeed: 2000,
      responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } },
    });
    var sticky_navigation_offset_top = $(".mainmenu-area").offset().top;
    var sticky_navigation = function () {
      var scroll_top = $(window).scrollTop();
      if (scroll_top > sticky_navigation_offset_top) {
        $(".mainmenu-area")
          .css({
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            "z-index": "1000",
          })
          .addClass("now-visible");
      } else {
        $(".mainmenu-area")
          .css({ position: "relative" })
          .removeClass("now-visible");
      }
    };
    sticky_navigation();
    $(window).scroll(function () {
      sticky_navigation();
    });
    if ($("#back-to-top").length) {
      var scrollTrigger = 100,
        backToTop = function () {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > scrollTrigger) {
            $("#back-to-top").addClass("show");
          } else {
            $("#back-to-top").removeClass("show");
          }
        };
      backToTop();
      $(window).on("scroll", function () {
        backToTop();
      });
      $("#back-to-top").on("click", function (e) {
        e.preventDefault();
        $("html,body").animate({ scrollTop: 0 }, 1500);
      });
    }
    $("#inpt_search").on("focus", function () {
      $(this).parent("label").addClass("active");
    });
    $("#inpt_search").on("blur", function () {
      if ($(this).val().length == 0)
        $(this).parent("label").removeClass("active");
    });
    $(".gallery-item, .lightbox-gallery").magnificPopup({
      type: "image",
      gallery: { enabled: true },
    });
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
    $(".shorting").mixItUp();
    $("ul#navigation").slicknav({ prependTo: ".responsive-menu-wrap" });
    $(".faq-q").on("click", function () {
      var container = $(this).parents(".faq-c");
      var answer = container.find(".faq-a");
      var trigger = container.find(".faq-t");
      answer.slideToggle(200);
      if (trigger.hasClass("faq-o")) {
        trigger.removeClass("faq-o");
      } else {
        trigger.addClass("faq-o");
      }
    });
    new WOW().init();
  });
  jQuery(window).on("load", function () {
    jQuery(".preloader-wrap").fadeOut(500);
  });
  $("#contatc_form").submit(function (event) {
    event.preventDefault();
    var name = $("#contact_name").val();
    var email = $("#contact_email").val();
    var sub = $("#contact_subject").val();
    var phone = $("#contact_phone").val();
    var message = $("#contact_message").val();
    var recaptcha = $("#g-recaptcha-response").val();
    if (
      name == "" ||
      email == "" ||
      message == "" ||
      name == " " ||
      message == " " ||
      recaptcha == " " ||
      sub == " " ||
      phone == " "
    ) {
      jQuery("#contact_send_status").removeClass("message_send");
      jQuery("#contact_send_status").addClass("message_notsend");
      jQuery("#contact_send_status").text(
        "Please fill all fields with correct data."
      );
    } else {
      var formData = $("#contatc_form").serialize();
      $.ajax({
        type: "POST",
        url: $("#contatc_form").attr("action"),
        data: formData,
        success: function (data) {
          jQuery('form[name="myform"]')[0].reset();
        },
      })
        .done(function (response) {
          $("#contact_send_status").removeClass("message_notsend");
          $("#contact_send_status").addClass("message_send");
          $("#contact_send_status").html(
            "<div class='alert alert-success' role='alert'>Your email successfully Sent ! Thank you.</div>"
          );
          $("#contact_send_status").fadeOut(3000);
        })
        .fail(function (data) {
          jQuery("#contact_send_status").removeClass("message_send");
          jQuery("#contact_send_status").addClass("message_notsend");
          jQuery("#contact_send_status").html(
            "<div class='alert alert-danger' role='alert'>Something wrong please try again!</div>"
          );
        });
    }
  });
})(jQuery);

const links = document.querySelectorAll("#navigation li a");

// Add a click event listener to each link
links.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove 'active' class from all links
    links.forEach((item) => item.parentElement.classList.remove("active"));

    // Add 'active' class to the clicked link
    this.parentElement.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#navigation li a");

  const observerOptions = {
    root: null,
    threshold: 0.7, // Adjust the threshold for when the section should be considered in view
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeSectionId = entry.target.getAttribute("id");

        // Remove the 'active' class from all nav links
        navLinks.forEach((link) => {
          link.parentElement.classList.remove("active");
        });

        // Add the 'active' class to the current section's nav link
        document
          .querySelector(`#navigation li a[href="#${activeSectionId}"]`)
          .parentElement.classList.add("active");
      }
    });
  }, observerOptions);

  // Observe each section
  sections.forEach((section) => {
    observer.observe(section);
  });
});

// Initialize EmailJS with your user ID
emailjs.init("OeLv81rT5kBUYjsMe");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Show loader and disable form
    document.getElementById("form-loader").style.display = "flex";
    // Collect form data
    var formData = new FormData(this);

    // Convert form data to a JSON object
    var data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    console.log("Contact", data, event);

    // Send the email using EmailJS
    emailjs.send("service_lpzcfni", "template_fyq3wxg", data).then(
      function (response) {
        // Hide loader and re-enable form
        document.getElementById("form-loader").style.display = "none";
        // Show success toast
        var successToast = new bootstrap.Toast(
          document.getElementById("successToast")
        );
        successToast.show();
        // Clear all form fields on success
        document.getElementById("contact-form").reset();
      },
      function (error) {
        console.error("Error:", error);
        // Hide loader and re-enable form
        document.getElementById("form-loader").style.display = "none";

        // Show error toast
        var errorToast = new bootstrap.Toast(
          document.getElementById("errorToast")
        );
        errorToast.show();
      }
    );
  });
