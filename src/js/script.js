const slider = tns({
   container: '.carousel__inner',
   items: 1,
   slideBy: 'page',
   nav: false,
   controls: false,

});
document.querySelector('.next').addEventListener('click', function () {
   slider.goTo('next');
});
document.querySelector('.prev').addEventListener('click', function () {
   slider.goTo('prev');
});
