$('.carousel.carousel-slider').carousel({fullWidth: true});

// COUNTERS
var count1 = document.getElementById('count1');
var count2 = document.getElementById('count2');
var count3 = document.getElementById('count3');
// console.log(count2.innerHTML);
var i = 0;

var timer = setInterval(function(){
  count1.innerHTML = ++i;
  count3.innerHTML = i;
  if(i == 100){
    clearInterval(timer);
  }
}, 50);

var j = 0;

var timer2 = setInterval(function(){
  j = j + 3;
  count2.innerHTML = j;
  if(j == 300){
    clearInterval(timer2);
  }
}, 100);
