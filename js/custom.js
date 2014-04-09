  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36472155-5']);
  ABalytics.init({
    experientCta: [
      {
        name: 'cta-s',
        "cta": "subscribe"
      },
      {
        name: 'cta-ea',
        "cta": "early access"
      }
    ]
  }, _gaq);
  _gaq.push(['_trackPageview']);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-36472155-5', 'progwriter.com');
ga('send', 'pageview');

ABalytics.applyHtml();

$(document).ready(function() {



  var sendForm = function(e) {
    ga('send', 'event', 'form', 'submit', 'optin', 1)
    $t = $(e.target || e.srcElement)
    setTimeout(function(){
      $t.closest('form').submit()
    }, 100)
  }

  $('a[type=submit]').click(sendForm)
  $('input[type=email]').keyup(function(e){
    if (e.keyCode === 13 || e.which === 13) {
      sendForm(e)
    }
  })

  $('a').each(function(element){
    $(element).one('click', function(e){
      var label = element.attr('href') || element.attr('data-target')
      ga('send', 'event', 'link', 'click', label, 0)
    })
  })

<!--Vegas background start -->
  $.vegas({
    src:'/image/background.jpg'
  });

  $.vegas('overlay', {
    src:'/plugins/vegas/overlays/02.png',
      opacity:0.5
  });
<!--Vegas background end -->

<!-- Time circle countdown start -->
  $("#DateCountdown").TimeCircles({
    "animation": "ticks",
    "bg_width": 0.2,
    "fg_width": 0.016666666666666666,
    "circle_bg_color": "#F5F5F5",
    "time": {
        "Days": {
            "text": "Days",
            "color": "#FFF",
            "show": true
        },
        "Hours": {
            "text": "Hours",
            "color": "#FFF",
            "show": true
        },
        "Minutes": {
            "text": "Minutes",
            "color": "#FFF",
            "show": true
        },
        "Seconds": {
            "text": "Seconds",
            "color": "#FFF",
            "show": true
        }
    }
});

<!-- Time circle countdown end -->

<!-- GOOGLE map initialization star-->
  var map;
  function initialize() {
    var mapOptions = {zoom: 6,center: new google.maps.LatLng(37.8040205,-122.2685502)};
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  }

  google.maps.event.addDomListener(window, 'load', initialize);

<!-- GOOGLE map initialization end-->

<!-- GOOGLE map modal fix start-->

  $("#contact").on("shown.bs.modal", function () {
    google.maps.event.trigger(map, "resize");
  });
<!-- GOOGLE map modal fix end-->

});

$(window).resize(function() {
  $("#DateCountdown").TimeCircles().rebuild();
});


