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
//! change tabs two way to do
document.querySelectorAll('.catalog__tab').forEach((item, index) => {
   item.addEventListener('click', function (e) {
      e.preventDefault();
      // const id = e.target.getAttribute('href').replace("#", "");

      // document.querySelectorAll('.catalog__tab').forEach((child) => {
      //    child.classList.remove('catalog__tab_active');
      // });
      // document.querySelectorAll('.catalog__content').forEach((child) => {
      //    child.classList.remove('catalog__content_active');
      // });

      // item.classList.add('catalog__tab_active');
      // document.getElementById(id).classList.add('catalog__content_active');
      document.querySelectorAll('.catalog__tab').forEach((child) => {
         child.classList.remove('catalog__tab_active');
      });
      document.querySelectorAll('.catalog__content').forEach((child) => {
         child.classList.remove('catalog__content_active');
      });
      document.querySelectorAll('.catalog__tab')[index].classList.add('catalog__tab_active');
      document.querySelectorAll('.catalog__content')[index].classList.add('catalog__content_active');


   });
});
//! function for chanche card in content tab
function changeContent(className) {

   document.querySelectorAll(className).forEach(function (item, index) {
      item.addEventListener('click', function (e) {
         e.preventDefault();

         document.querySelectorAll(".catalog-item__content")[index].classList.toggle("catalog-item__content_active");
         document.querySelectorAll(".catalog-item__list")[index].classList.toggle("catalog-item__list_active");
      });
   });

}


changeContent(".catalog-item__link");
changeContent(".catalog-item__back");



