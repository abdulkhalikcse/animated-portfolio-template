// Stick Navbar
$(document).ready(function() {
    var s = $("#sticker");
    var pos = s.position();                   
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();       
        if (windowpos > pos.top) {
            s.addClass("stick");
        } else {
            s.removeClass("stick");
        }
    });
});
// End stick


// Navbar collapse
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});


// scroll Navbar
$('.thing').waypoint(function(direction) {
  jQuery("li.someItem").addClass("active");
});

var lastId,
topMenu = $(".navbar"),
topMenuHeight = topMenu.outerHeight()+15,

menuItems = topMenu.find("a"),
scrollItems = menuItems.map(function(){
  var item = $($(this).attr("href"));
  if (item.length) { return item; }
});

menuItems.click(function(e){
var href = $(this).attr("href"),
  offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop +30 //+30 top+ 15px
  }, 1000);
  e.preventDefault();
});

$(window).scroll(function(){
var fromTop = $(this).scrollTop()+topMenuHeight;

var cur = scrollItems.map(function(){
 if ($(this).offset().top < fromTop)
   return this;
});

cur = cur[cur.length-1];
var id = cur && cur.length ? cur[0].id : "";

if (lastId !== id) {
   lastId = id;
   menuItems
     .parent().removeClass("active")
     .end().filter("[href=#"+id+"]").parent().addClass("active");
}                   
});


// init Isotope
var $gallery = $('.gallery').isotope({
  itemSelector: '.portfolio-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

// filter functions
var filterFns = {
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },

  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');

  filterValue = filterFns[ filterValue ] || filterValue;
  $gallery.isotope({ filter: filterValue });
});

$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  

// Contact form
$(window, document, undefined).ready(function() {

  $('input,textarea').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('complete');
    else
      $this.removeClass('complete');
  });

});


// counter
$('.counter').counterUp({
    delay: 10,
    time: 2000
});



/// skill bar Start
jQuery(document).ready(function(){
	
	$('.skill-chart').waypoint(function() {
		$('.progress-ber').each(function(){
			$(this).find('.progress').animate({
				width:$(this).attr('data-percent')
			},3000);
		});
		//Viewport Code
	 }, {
	   offset: '100%'
	 });
	 
});
/// skill bar End

//animat start
wow = new WOW(
    {
      boxClass:     'wow',   
      animateClass: 'animated',
      offset:       0,  
      mobile:       true, 
      live:         true 
    }
  )
wow.init();
//animat End


// scrollUp
$(function () {
  $.scrollUp({
    scrollName: 'scrollUp', 
    topDistance: '600', 
    topSpeed: 300, 
    animation: 'fade', 
    animationInSpeed: 200, 
    animationOutSpeed: 200, 
    scrollText: '', 
    activeOverlay: false, 
  });
});


// loader
$(window).load(function() { 
    $('.spiner').fadeOut(); 
    $('.loader').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow':'visible'});
});



// venobox
$(document).ready(function(){

    $('.venobox').venobox(); 

    $('.venobox_custom').venobox({
        framewidth: '400px', 
        frameheight: '300px', 
        border: '6px',  
        bgcolor: '#fff', 
        titleattr: 'data-title',
        numeratio: true, 
        infinigall: true  
    });

    $("#firstlink").venobox().trigger('click');
});