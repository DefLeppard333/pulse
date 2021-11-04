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



// MODAL


function modalOpen(attr) {
   document.querySelectorAll(attr).forEach((item) => {
      item.addEventListener('click', function (e) {
         const id = item.getAttribute('data-model');
         document.querySelector('.overlay').classList.add("overlay_active");
         document.querySelector('body').classList.add("body_lock");
         document.getElementById(id).classList.add("modal_active");
      });

   });

};

document.querySelectorAll('.modal__close').forEach((item) => {
   item.addEventListener('click', function (e) {

      document.querySelector('.overlay').classList.remove("overlay_active");
      document.querySelector('body').classList.remove("body_lock");
      document.getElementById('consultation').classList.remove("modal_active");
      document.getElementById('order').classList.remove("modal_active");
      document.getElementById('thanks').classList.remove("modal_active");
   });
});

modalOpen('[data-model="consultation"]');
modalOpen('[data-model="order"]');

document.querySelectorAll('.button_mini').forEach((item, index) => {
   item.addEventListener('click', function (e) {
      let text = document.querySelectorAll('.catalog-item__subtitle')[index].textContent;
      document.querySelector('#order .modal__descr').textContent = text;
   });
});

//! Validation FORMS

let removeValidation = function (item) {
   item.querySelectorAll('.feed-form__error').forEach(e => {
      e.remove();
   });
};
let generateError = function (item) {
   let fields = item.querySelectorAll('.feed-form input');
   return fields.forEach((item, i) => {
      if (!fields[i].value) {
         let error = document.createElement('div');
         console.log('field is blank', fields[i]);
         error.className = 'feed-form__error';
         error.innerHTML = "cannot be blank";
         item.parentElement.insertBefore(error, fields[i]);
      }
   });

};
document.querySelectorAll('.feed-form').forEach((item) => {
   let formBtn = item.querySelector('.button-submit'),
      name = item.querySelector('[name ="name"]'),
      phone = item.querySelector('[name = "phone"]'),
      email = item.querySelector('[name = "email"]');

   item.addEventListener('submit', function (e) {
      e.preventDefault();
      removeValidation(item);
      generateError(item);
   });
});


