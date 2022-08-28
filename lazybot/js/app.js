"use strict";

$(document).ready(function () {
  let g, a;

  function b() {
    a = window.innerWidth > 992 ? (g = window.Scrollbar).init(document.querySelector(".js-scroll")) : (g = window.Scrollbar).destroy(document.querySelector(".js-scroll"));
  }

  function h(b) {
    if ($(".header__nav").hasClass("open") && $(".js-nav-toggle").click(), window.innerWidth > 992) {
      let c = b[0].getAttribute("href"),
          d = document.getElementById(c.substring(1));
      a.scrollIntoView(d, {
        offsetTop: -a.containerEl.scrollTop
      });
    } else {
      let e = b.attr("href");
      $("html, body").animate({
        scrollTop: $(e).offset().top
      }, 600);
    }
  }

  function i(a, l = 0, j = !1) {
    let f = $(window).innerHeight(),
        g = f / 4,
        i = a.text().length,
        c = 0,
        d = 0,
        b = 0,
        h = 0;
    j ? (b = f, c = a.offset().top + g, d = a.offset().top + 3 * g + a.innerHeight()) : (b = $(window).scrollTop(), c = a.offset().top - f + g, d = a.offset().top - f + 3 * g + a.innerHeight()), b > c && b < d ? h = Math.floor((b - c) * 100 / (d - c)) : b >= d && (h = 100);

    for (let e = 0; e < i; e++) {
      let k = Math.floor(100 * e / i);
      k < h ? a.find("> span").eq(e).addClass("active") : a.find("> span").eq(e).removeClass("active");
    }
  }

  function c(m = !1) {
    let b = $(".easy__bot"),
        f = b.find(".easy__bot-box"),
        i = b.find(".easy__bot-img"),
        s = b.find(".easy__bot-helm"),
        t = b.closest(".easy"),
        q = t.height(),
        g = $(window).innerHeight(),
        d = 0,
        e = 0,
        c = 0,
        a = 0,
        h = 0,
        j = 0,
        k = 0,
        n = 0,
        l = 0;
    window.matchMedia("(min-width:992px)").matches ? (k = 8, n = .1, l = 140) : (k = 4, n = .3, l = 90), m ? (a = g, d = b.offset().top + g, e = b.offset().top + g + q - b.innerHeight(), c = $(".features__intro-car").offset().top + g - l) : (a = $(window).scrollTop(), d = b.offset().top, e = b.offset().top + q - b.innerHeight(), c = $(".features__intro-car").offset().top - l);
    let o = 1,
        p = 0;

    if (a >= e) {
      f.addClass("animated");
      let r = 0;
      r = m ? g : a, a < c ? p = Math.floor((r - e) * 100 / (c - e)) : a > c && (p = 100);
    } else f.removeClass("animated");

    o = parseFloat((1 - p * n / 100).toFixed(2)), a > d && a < c ? j = Math.floor(a - d) : a >= c && (j = Math.floor(c - d)), m ? (i.removeClass("fixed"), f.css({
      transform: "translateY(" + j + "px) scale(" + o + ")"
    })) : (i.removeClass("fixed"), i.css({
      transform: "translateX(-50%) scale(" + o + ")"
    }), a > d && a < c ? (i.addClass("fixed"), f.css({
      transform: ""
    })) : a >= c && f.css({
      transform: "translateY(" + j + "px)"
    })), a > d && a < e ? h = Math.floor((a - d) * 100 / (e - d)) : a >= e && (h = 100), s.css({
      transform: "translate(-" + Math.floor(h * k / 100) + "px, -" + Math.floor(h * k / 100) + "px) rotate(" + Math.floor(94 * h / 100) + "deg)"
    });
  }

  function d(a = !1) {
    $(".js-bg-width").each(function () {
      let e = $(this),
          n = e.parent(),
          g = n.innerWidth(),
          j = $(window).innerHeight(),
          o = $(window).innerWidth(),
          h = $(window).innerHeight() / 4,
          c = e.offset().top,
          f = c + h,
          d = f + e.innerHeight() + 2 * h,
          k = d + h,
          b = 0,
          l = g,
          m = 0,
          i = 0;
      i = (b = a ? j : $(window).scrollTop() + j) <= c ? 0 : b > c && b < f ? Math.floor((b - c) * 100 / (f - c)) : b >= f && b <= d ? 100 : b > d && b < k ? 100 - Math.floor((b - d) * 100 / (k - d)) : 0, l = Math.floor(g + (o - g) * i / 100), m = Math.floor(16 - 16 * i / 100), e.css({
        width: l,
        "border-radius": m
      });
    });
  }

  function e(a = !1) {
    let b = $(".reviews__inner");
    $(".js-counter").each(function () {
      let d = $(this),
          c = $(window).innerHeight(),
          e = $(window).innerHeight() / 2,
          f = b.offset().top + e;
      (a ? c : $(window).scrollTop() + c) > f && function (a) {
        let b = a.attr("max");
        $({
          countNum: a.text()
        }).animate({
          countNum: b
        }, {
          duration: 2e3,
          easing: "swing",
          step: function () {
            a.text(Math.floor(this.countNum));
          },
          complete: function () {
            a.text(this.countNum);
          }
        });
      }(d);
    });
  }

  function f(a = !1) {
    $(".js-bg-height").each(function () {
      let b = $(this),
          d = b.parent(),
          c = $(window).innerHeight(),
          e = $(window).innerHeight() / 2,
          f = d.offset().top + e;
      (a ? c : $(window).scrollTop() + c) > f && b.addClass("show");
    });
  }

  b(), window.addEventListener("resize", function () {
    setTimeout(function () {
      b();
    }, 1e3);
  }), $(document).on("click", ".js-nav-toggle", function (a) {
    $(this).toggleClass("nav-open"), $(".scroll-content").toggleClass("lock"), $("body").toggleClass("lock"), $(".header__nav").toggleClass("open");
  }), $(document).on("click", ".header__nav a", function () {
    h($(this));
  }), $(document).on("click", ".js-scroll-to", function () {
    h($(this));
  }), $(document).on("click", ".footer__menu a", function () {
    h($(this));
  }), lozad(".lozad", {
    load: function (a) {
      a.getAttribute("data-srcset") && a.setAttribute("srcset", a.getAttribute("data-srcset")), a.src = a.dataset.src, a.onload = function () {
        a.classList.add("fade");
      };
    }
  }).observe(), $(".btn").mouseenter(function (a) {
    var b = $(this).offset(),
        c = a.pageX - b.left,
        d = a.pageY - b.top;
    $(this).prev(".su_button_circle").css({
      left: c,
      top: d
    }), $(this).prev(".su_button_circle").removeClass("desplode-circle"), $(this).prev(".su_button_circle").addClass("explode-circle");
  }), $(".btn").mouseleave(function (a) {
    var b = $(this).offset(),
        c = a.pageX - b.left,
        d = a.pageY - b.top;
    $(this).prev(".su_button_circle").css({
      left: c,
      top: d
    }), $(this).prev(".su_button_circle").removeClass("explode-circle"), $(this).prev(".su_button_circle").addClass("desplode-circle");
  }), $(document).on("click", ".toggler__btn", function (e) {
    let a = $(this),
        b = a.closest(".toggler"),
        c = b.find(".toggler__overlay"),
        d = b.find(".toggler__btn");
    d.removeClass("active"), a.addClass("active"), a.hasClass("toggler__btn-left") ? c.css("left", "0") : a.hasClass("toggler__btn-right") && c.css("left", "50%");
  }), $(".js-title").length && $(".js-title").each(function () {
    let b = $(this);
    (function (b) {
      let c = b.text().trim(),
          d = "";

      for (let a = 0; a < c.length; a++) d += "<span>" + c[a] + "</span>";

      b.html(d);
    })(b), i(b), $(".js-scroll .scroll-content").length && a.addListener(({
      offset: a
    }) => {
      i(b, a, !0);
    }), $(window).on("scroll", function () {
      let a = $(window).scrollTop();
      i(b, a);
    }), $(window).on("resize", function () {
      window.matchMedia("(min-width:992px)").matches && 0 === $(".js-scroll .scroll-content").length && setTimeout(function () {
        $(".js-scroll .scroll-content").length && a.addListener(({
          offset: a
        }) => {
          i(b, a, !0);
        });
      }, 1e3);
    });
  }), $(".easy__bot").length && (c(), $(".js-scroll .scroll-content").length && a.addListener(({
    offset: a
  }) => {
    c(!0);
  }), $(window).on("scroll", function () {
    c();
  }), $(window).on("resize", function () {
    window.matchMedia("(min-width:992px)").matches && 0 === $(".js-scroll .scroll-content").length && setTimeout(function () {
      $(".js-scroll .scroll-content").length && a.addListener(({
        offset: a
      }) => {
        c(!0);
      });
    }, 1e3);
  })), $(".js-counter").length && (e(), $(".js-scroll .scroll-content").length && a.addListener(({
    offset: a
  }) => {
    e(!0);
  }), $(window).on("scroll", function () {
    e();
  }), $(window).on("resize", function () {
    e(), window.matchMedia("(min-width:992px)").matches && 0 === $(".js-scroll .scroll-content").length && setTimeout(function () {
      $(".js-scroll .scroll-content").length && a.addListener(({
        offset: a
      }) => {
        e(!0);
      });
    }, 1e3);
  })), $(".js-bg-width").length && (d(), $(".js-scroll .scroll-content").length && a.addListener(({
    offset: a
  }) => {
    d(!0);
  }), $(window).on("scroll", function () {
    d();
  }), $(window).on("resize", function () {
    d(), window.matchMedia("(min-width:992px)").matches && 0 === $(".js-scroll .scroll-content").length && setTimeout(function () {
      $(".js-scroll .scroll-content").length && a.addListener(({
        offset: a
      }) => {
        d(!0);
      });
    }, 1e3);
  })), $(".js-bg-height").length && $(".js-bg-width").length && (f(), $(".js-scroll .scroll-content").length && a.addListener(({
    offset: a
  }) => {
    f(!0);
  }), $(window).on("scroll", function () {
    f();
  }), $(window).on("resize", function () {
    f(), window.matchMedia("(min-width:992px)").matches && 0 === $(".js-scroll .scroll-content").length && setTimeout(function () {
      $(".js-scroll .scroll-content").length && a.addListener(({
        offset: a
      }) => {
        f(!0);
      });
    }, 1e3);
  }));
}), window.addEventListener("DOMContentLoaded", function (d) {
  let a = document.querySelectorAll(".anim-group");
  a.forEach(a => {
    let b = a.querySelectorAll("[data-anim-element]"),
        c = 0;
    b.forEach((a, b) => {
      c += .1, a.style.animationDelay = `${c}s`;
    });
  });
  let b = document.querySelectorAll("[data-scrolled-into]");

  if (b.length > 0) {
    function c() {
      for (let c = 0; c < b.length; c++) {
        let a = b[c],
            d = a.offsetHeight,
            f = e(a).top,
            g = 100,
            h = window.innerHeight - d / g;
        d > window.innerHeight && (h = window.innerHeight - window.innerHeight / g), pageYOffset > f - h && pageYOffset < f + d ? a.setAttribute("data-scrolled-into", !0) : a.classList.contains("_no_hide") || a.setAttribute("data-scrolled-into", !1);
      }
    }

    function e(b) {
      let a = b.getBoundingClientRect(),
          c = window.pageXOffset || document.documentElement.scrollLeft,
          d = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: a.top + d,
        left: a.left + c
      };
    }

    window.addEventListener("scroll", c), setInterval(() => {
      c();
    }, 300);
  }
});
//# sourceMappingURL=app.js.map
