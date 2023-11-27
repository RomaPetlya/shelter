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
function removeActive() {
burger.classList.remove("_active");
    menu.classList.remove("_active");
    body.classList.remove("_stop--scroll");
    bg.classList.remove("_active");
}
navItem.forEach((el) => {
  el.addEventListener("click", () => {
    removeActive()
  });
});
// исчезновение меню по клику на фон
bg.addEventListener("click", () => {
  removeActive()
});

const pets = [
  {
    "name": "Katrine",
    "img": "img/pets/pet0.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Jennifer",
    "img": "img/pets/pet1.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "img/pets/pet2.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "img/pets/pet3.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "img/pets/pet4.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "img/pets/pet5.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  },  
  {
    "name": "Scarlett",
    "img": "img/pets/pet6.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "img/pets/pet7.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  
]


// SLIDER
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
const sliderItems = document.querySelector(".slider-items");
let itemLeft = document.querySelector("#item-left");
let itemRight = document.querySelector("#item-right");
let itemCurrent = document.querySelector("#item-current");

function getNumber(min = 0, max = 7) {
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}


let cardNumbers = [];
let prevCardNumbers = [];
function getCardNumbers(getNumber) {
  while (cardNumbers.length < 6) {
    let number = getNumber();
    if (!cardNumbers.includes(number)) {
      
      cardNumbers.push(number)
    }
  }
  return cardNumbers
}
getCardNumbers(getNumber);


function getNewCards(getNumber, prevItems) {
  let newCards = []
  while (newCards.length < 3) {
    let number = getNumber();
    if (!prevItems.includes(number) && !newCards.includes(number) ){
      newCards.push(number)
    }
  }
  cardNumbers = cardNumbers.concat(newCards);
  prevCardNumbers = prevItems.concat(cardNumbers.slice(0, 3));
  
}


function getActiveBlock(item, pets, cardNumbers){
    item.innerHTML = `
  <div class="slider-item">
     <div class="slider-item__img img${cardNumbers[0]}"></div>
        <h4 class="slider-item__text">${pets[cardNumbers[0]].name}</h4>
        <a href="" onclick="return false;" class="slider-item__btn">Learn more</a>
  </div>
  <div class="slider-item">
     <div class="slider-item__img img${cardNumbers[1]}"></div>
        <h4 class="slider-item__text">${pets[cardNumbers[1]].name}</h4>
        <a href="" onclick="return false;" class="slider-item__btn">Learn more</a>
  </div>
  <div class="slider-item">
     <div class="slider-item__img img${cardNumbers[2]}"></div>
        <h4 class="slider-item__text">${pets[cardNumbers[2]].name}</h4>
        <a href="" onclick="return false;" class="slider-item__btn">Learn more</a>
  </div> `
}
getActiveBlock(itemCurrent, pets, cardNumbers)

function getHiddenBlock(item, pets, cardNumbers){
  item.innerHTML = `
<div class="slider-item">
   <div class="slider-item__img img${cardNumbers[3]}"></div>
      <h4 class="slider-item__text">${pets[cardNumbers[3]].name}</h4>
      <a href="" onclick="return false;" class="slider-item__btn">Learn more</a>
</div>
<div class="slider-item">
   <div class="slider-item__img img${cardNumbers[4]}"></div>
      <h4 class="slider-item__text">${pets[cardNumbers[4]].name}</h4>
      <a href="" onclick="return false;" class="slider-item__btn">Learn more</a>
</div>
<div class="slider-item">
   <div class="slider-item__img img${cardNumbers[5]}"></div>
      <h4 class="slider-item__text">${pets[cardNumbers[5]].name}</h4>
      <a href="" onclick="return false;" class="slider-item__btn">Learn more</a>
</div> `
}
getHiddenBlock(itemLeft, pets, cardNumbers)
getHiddenBlock(itemRight, pets, cardNumbers)

const moveLeft = () => {
  sliderItems.classList.add('transition-left');
  btnLeft.removeEventListener('click', moveLeft)
  btnRight.removeEventListener('click', moveRight)
  
}

const moveRight = () => {
  sliderItems.classList.add('transition-right');
  btnRight.removeEventListener('click', moveRight)
  btnLeft.removeEventListener('click', moveLeft)
}


btnLeft.addEventListener('click', moveLeft)
btnRight.addEventListener('click', moveRight)



sliderItems.addEventListener('animationend',(animation) => {
  if (animation.animationName === 'move-left') {
    sliderItems.classList.remove('transition-left')
  
    itemCurrent.innerHTML = itemLeft.innerHTML;
    prevItems = cardNumbers.splice(3,3); 
    getNewCards(getNumber, prevItems)
    getHiddenBlock(itemLeft, pets, cardNumbers)
    sliderItem = document.querySelectorAll('.slider-item')
  } else {
    sliderItems.classList.remove('transition-right')

    itemCurrent.innerHTML = itemRight.innerHTML;
    prevItems = cardNumbers.splice(3,3); 
    getNewCards(getNumber, prevItems)
    console.log(prevItems);
    getHiddenBlock(itemRight, pets, cardNumbers)
    sliderItem = document.querySelectorAll('.slider-item')
  }
  btnLeft.addEventListener('click', moveLeft)
  btnRight.addEventListener('click', moveRight)
})








let sliderItem = document.querySelectorAll('.slider-item')


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

let imgNumber;

document.addEventListener("click", (el) => {
  if (el.className == "slider-item") {
    let g = e.target.previousElementSibling.innerHTML;
    console.log(g);
    pets.forEach((i, index) => {
      if (g == pets[index].name) {
        console.log(pets[index].age);
        createModal(pets[index]);
      }
    });
  }
});








sliderItem.forEach((el) => {
  el.addEventListener('click', () => {
    
    const imgClassList = el.querySelector('.slider-item__img').classList;
    for (let i = 0; i < imgClassList.length; i++) {
      const className = imgClassList[i];
      if (className.startsWith('img')) {
        imgNumber = className.substring(3);
        break;
      }
    }
    
    addInfo(pets[imgNumber])
    modalBg.classList.add('_show')
    modal.classList.add('_show')
    body.classList.add("_stop--scroll");
  })
})


