const responsive={
  0:{
    items:1
  },
  320:{
    items:1
  },
  560:{
    items:2
  },
  960:{
    items:3
  }
}

$(document).ready(function () {
  $nav = $('.nav');
  $toggleCollapse = $('.toggle-collpase');

  /** click event on toggle menu */
  $toggleCollapse.click(function (){
    $nav.toggleClass('collpase');
})

//owl-crousel for blog
$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay:true,
  autoplaytimeout:3000,
  dots:false,
  nav:true,
navtext:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
responsive:responsive
});

//click to scroll top
$('.move-up span').click(function(){
  console.log('ehhhh')
  $('html , body').animate({
    scrollTop:0
  },3000);    
})
//AOS instance
Aos.init();
});