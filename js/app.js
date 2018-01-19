$('.carousel.carousel-slider').carousel({fullWidth: true});

// COUNTERS
var count1 = document.getElementById('count1');
var count2 = document.getElementById('count2');
var count3 = document.getElementById('count3');
// console.log(count2.innerHTML);

// function counter () {
  for (var i = 0; i <= 100; i++) {
    console.log("i");
    setTimeout(function(){
      count1.innerHTML = i;
    }, 1000);
  }
// }
