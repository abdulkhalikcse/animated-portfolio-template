$(document).ready(function() {
     
      var owl = $(".owl-carousel");
     
      owl.owlCarousel({
          navigation: false,
          // autoPlay: 3000, //Set AutoPlay to 3 seconds
          items: 3,
          itemsDesktop: [1199, 3],
          itemsDesktopSmall: [980, 2],
          itemsTablet: [768, 2],
          itemsTabletSmall: [568, 1],
          itemsMobile: [479, 1]
      });
       
});
