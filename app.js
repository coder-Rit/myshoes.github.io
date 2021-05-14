 
     console.log('123');
 $(document).ready(function () { 
    setInterval(  () => {
        $('.box5').animate({
            width : '0px', 
        },4000) 
        $('.box4').delay(4000).animate({ 
            width : '0px', 
        },4000)
        $('.box3').delay(8000).animate({
            width : '0px', 
        },4000)
        $('.box2').delay(12000).animate({
            width : '0px', 
        },4000)
        $('.box1').delay(16000).animate({
            width : '0px', 
        },4000)  
    },000); 
 })

 window.addEventListener('scroll', function() {
  document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
});
