$(document).ready(function() {
    $(".up-arrow").click(function() {
         $('html, body').animate({
             scrollTop:$(".intrested-work").offset().top
         }, 1500);
     });
    });


    $(document).ready(function(){
        $('span').fadeIn(200, function(){
          $(this).animate({"top":"50px"}, 700, function(){
            }); 
          }); 
        });
        
        

        //----------------------------------------------------------------------------- 
        function scrollTrigger(selector, options = {}){
          let els = document.querySelectorAll(selector)
          els = Array.from(els)
          els.forEach(el => {
              addObserver(el, options)
          })
      }
      
      function addObserver(el, options){
          if(!('IntersectionObserver' in window)){
              if(options.cb){
                  options.cb(el)
              }else{
                  entry.target.classList.add('active')
              }
              return
          }
          let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
              entries.forEach(entry => {
                  if(entry.isIntersecting){
                      if(options.cb){
                          options.cb(el)
                      }else{
                          entry.target.classList.add('active')
                      }
                      observer.unobserve(entry.target)
                  }
              })
          }, options)
          observer.observe(el)
      }
      // Example usages:
      scrollTrigger('.studio-detail')
      scrollTrigger('.company-cta')
      scrollTrigger('.thingsbetter-heading')
      scrollTrigger('.artist h1')
      scrollTrigger('.artist span')
      scrollTrigger('.artist-cta')
      scrollTrigger('.card-container')
      scrollTrigger('.contact-form')
      scrollTrigger('.footer-item')
      scrollTrigger('.fotter-container-bottom')
      scrollTrigger('.footerbottom p')
      scrollTrigger('.social-links')

      
      scrollTrigger('.studio-detail-heading', {
          rootMargin: '-200px',
      })
      
      