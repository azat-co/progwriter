(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-36472155-5', 'progwriter.com');
ga('send', 'pageview');

var dp = jQuery;
dp.noConflict();

dp(document).ready(function() {
  //FIT VIDS
  dp(".video-review").fitVids();
  //CHAPTER CAROUSEL
  dp(".carouselchapter").carousel('pause');
  //NIVO LIGHTBOX
  dp("a[data-call='nivo-slider']").nivoLightbox();
  //TOOL TIP
  dp('a[data-toggle="tooltip"]').tooltip();
  //ROTATES TEXT
  dp(".rotatez").textrotator({
      animation: "fade",
      speed: 1600
  });
  //QUOTE SLIDE
  if (dp.fn.sudoSlider) {
    dp("#quote-slider").sudoSlider({
        customLink: 'a.quoteLink',
        speed: 425,
        prevNext: true,
        responsive: true,
        prevHtml: '<a href="#" class="quote-left-indicator"><i class="icon-arrow-left"></i></a>',
        nextHtml: '<a href="#" class="quote-right-indicator"><i class="icon-arrow-right"></i></a>',
        useCSS: true,
        continuous: true,
        effect: "fadeOutIn",
        updateBefore: true
    });
  }

  dp('a').each(function(element){
    dp(element).one('click', function(e){
      if (element.attr('type') === 'submit' || element.attr('href')[0] === '#' || element.attr('href')[0] === 'm' )
        return true
      e.preventDefault();
      ga('send', 'event', 'link', 'click', element.attr('href'), 0)
      setTimeout(function(){
        window.location.href = element.attr('href')
      }, 100)
    })
  })
  dp('a[type=submit]').click(function(e){
    ga('send', 'event', 'form', 'submit', 'optin', 1)
    $t = dp(e.target || e.srcElement)
    setTimeout(function(){
      $t.closest('form').submit()
    }, 100)

  })

});
