// js
// wowjs.plugins
wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wow.init();
// AOSPlugns
AOS.init();
// mixitup
var containerEl = document.querySelector(".container");

var mixer = mixitup(containerEl);

// jq

$(document).ready(function () {
  // counterup
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});
// $(selector).countMe(delay,speed)
$("#num1").countMe(40, 65);
$("#num2").countMe(30, 30);
$("#num3").countMe(40, 50);
$("#num4").countMe(100, 200);
$("#status-count").countMe(50, 80);

// bubble js
$("body").bubble({
  img: [
    "assets/animated-bubble-background/img/pink.png",
    "assets/animated-bubble-background/img/yellow.png",
    "assets/animated-bubble-background/img/green.png",
  ],
  // custom shadows
  shadowColor: [
    "#8bcecb",
    "#f2a2b9",
    "#f4b6d1",
    "#ca98c3",
    "#fff231",
    "#4ab7d0",
  ],
});
// ken brun
$(document).ready(function () {
  $("img", "#ken").kenburns({ debug: true });

  $("#reset").on({
    submit: function () {
      let settings = {
        zoom: $("select[name=zoom] option:selected", this).val(),
        duration: $("input[name=duration]", this).val(),
        align: $("select[name=aligment] option:selected", this).val(),
      };

      $("ken", "#ken").kenburns("set", settings).kenburns("reset");

      return false;
    },
  });

  $("#pause").on({
    click: function () {
      if ($(this).hasClass("paused")) {
        $(this).removeClass("paused").val("Pause");
        $("ken", "#ken").kenburns("start");
      } else {
        $(this).addClass("paused").val("Continue");
        $("ken", "#ken").kenburns("pause");
      }
    },
  });

  $("#stop").on({
    click: function () {
      if ($(this).hasClass("stopped")) {
        $(this).removeClass("stopped").val("Stop");
        $("ken", "#ken").kenburns("start");
      } else {
        $(this).addClass("stopped").val("Start");
        $("ken", "#ken").kenburns("stop");
      }
    },
  });
});
