const burger = document?.querySelector(".burger");
const menu = document?.querySelector(".nav__list");
const bg = document?.querySelector(".bg-menu");
const body = document.body;
const navItem = document?.querySelectorAll(".nav__item");

// Появление меню по клику на бургер
burger.addEventListener("click", () => {
  burger.classList.toggle("_active");
  menu.classList.toggle("_active");
  bg.classList.toggle("_active");
  body.classList.toggle("_stop--scroll");
});
// исчезновение меню по клику на ссылку
navItem.forEach((el) => {
  el.addEventListener("click", () => {
    burger.classList.remove("_active");
    menu.classList.remove("_active");
    body.classList.remove("_stop--scroll");
    bg.classList.remove("_active");
  });
});
// исчезновение меню по клику на фон
bg.addEventListener("click", () => {
  burger.classList.remove("_active");
  menu.classList.remove("_active");
  body.classList.remove("_stop--scroll");
  bg.classList.remove("_active");
});


const modalBg = document.querySelector('.modal-bg')
const modal = document.querySelector('.modal')

function addInfo(obj) {
 
  modal.innerHTML = `
    <div class="modal__btn">
        <img class="close__btn" src="img/icons/close.svg" alt="btn" />
    </div>
        <img class="modal__img" src="${obj.img}" alt="#">
            <div class="modal-info">
              <h3 class="modal-info__name">${obj.name}</h3>
              <h4 class="modal-info__breed">${obj.type} - ${obj.breed}</h4>
              <h5 class="modal-info__about">${obj.description}</h5>
              <ul class="modal-info-list">
                <li class="modal-info-list__item"><b>Age:</b>&nbsp;${ obj.age}</li>
                <li class="modal-info-list__item"><b>Inoculations:&nbsp;</b> ${ obj.inoculations}</li>
                <li class="modal-info-list__item"><b>Diseases:&nbsp;</b> ${ obj.diseases}</li>
                <li class="modal-info-list__item"><b>Paratites:&nbsp;</b> ${ obj.parasites}</li>
              </ul>
            </div>`




  const closeBtn = document.querySelector('.modal__btn')

modalBg.addEventListener('click', (el) => {
  if (el.target.classList.contains('modal__btn') ||
  el.target.classList.contains('modal-bg') ||
  el.target.classList.contains('close__btn')) {
    modalBg.classList.remove('_show')
    modal.classList.remove('_show')
     body.classList.remove("_stop--scroll");
  }
  })
}