// from 0 to N
$(".count").each(function() {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text()
      },
      {
        duration: 40000,
        easing: $(this).data("esing"),
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      }
    );
});

// random number
// refer: https://stackoverflow.com/questions/8363916/random-number-effect-in-jquery
rdnCounter($(".rdnCount"), 3000);

function rdnCounter($target, duration, num, speed) {
  var $target, started, current, text, len;
  num = num || $target.data("count");
  speed = 0;
  len = (num + "").length;
  started = new Date().getTime();

  animationTimer = setInterval(function() {
    // If the value is what we want, stop animating
    // or if the duration has been exceeded, stop animating
    current = new Date().getTime();
    if (current - started >= duration) {
      clearInterval(animationTimer);
      $target.text(num);
    } else {
      // Generate a random string to use for the next animation step
      text = "";
      for (var i = 0; i < len; i++) {
        text += Math.floor(Math.random() * 3);
      }
      $target.text(text);
    }
  }, speed);
}
