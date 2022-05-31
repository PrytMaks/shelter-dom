//Burger menu

const hamburger = document.querySelector('.hamburger');
const adaptiveMenu = document.querySelector('.header_nav');
const blackout = document.querySelector('.blackout')
const body = document.querySelector('body');



function toggleHamburger() {
  hamburger.classList.toggle('is-active');
  adaptiveMenu.classList.toggle('open');
  blackout.classList.toggle('blackout_active');
  body.classList.toggle('body_over')
  
};

function closeMenu(event) {
  if (event.target.classList.contains('nav_link') || event.target.classList.contains('blackout_active')) {
    hamburger.classList.remove('is-active');
    adaptiveMenu.classList.remove('open');
    blackout.classList.remove('blackout_active');
    body.classList.remove('body_over');
  }
}

blackout.addEventListener('click', closeMenu);
hamburger.addEventListener('click', toggleHamburger);
adaptiveMenu.addEventListener('click', closeMenu);


//Slider start

let pets = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]


const leftBtn = document.querySelector('.arrow_left');
const rightBtn = document.querySelector('.arrow_right');
const carousel = document.querySelector('.cards_carousel');

const itemLeft = document.querySelector('#item-left');
const itemActive = document.querySelector('#item-active')
const itemRight =  document.querySelector('#item-right');

const itemArr = document.querySelectorAll('.card_img');



const createCardTemplate = () =>{
  const card = document.createElement('div');
  card.classList.add('card');
  const img = document.createElement('img');
  img.classList.add('card_img');
  card.append(img);
  const title = document.createElement('span');
  title.classList.add('card_name');
  
  card.append(title)
  const btn = document.createElement('button');
  btn.classList.add('card_btn', 'btn');
  btn.innerText = 'Learn more'
  card.append(btn)
  return card;
}

const moveLeft = () => {
  carousel.classList.add('transition-left');
  leftBtn.removeEventListener('click', moveLeft);
  rightBtn.removeEventListener('click', moveRight);
}
const moveRight = () => {
  carousel.classList.add('transition-right');
  leftBtn.removeEventListener('click', moveLeft);
  rightBtn.removeEventListener('click', moveRight);
}

leftBtn.addEventListener('click', moveLeft);
rightBtn.addEventListener('click', moveRight);

carousel.addEventListener('animationend', (animationEvent) => {
  let changedItem;
  if(animationEvent.animationName === "move-left"){
    carousel.classList.remove('transition-left');
    changedItem = itemLeft;
    document.querySelector('#item-active').innerHTML = itemLeft.innerHTML;
   
  } else {
    carousel.classList.remove('transition-right');
    changedItem = itemRight;
    document.querySelector('#item-active').innerHTML = itemRight.innerHTML;
  }
  changedItem.innerHTML = '';


  let currentItemCards = document.querySelectorAll('#item-active .card .card_name');
  let currentNames = [currentItemCards[0].textContent, currentItemCards[1].textContent, currentItemCards[2].textContent];
  let arrNum = [];

  for(let i = 0; arrNum.length < 3; i++){
    let num = Math.floor(Math.random() * 8);
    if(!arrNum.includes(num) && (!currentNames.includes(pets[num].name))){
      arrNum.push(num);
    } 
   }
   console.log(arrNum);

  for(let i = 0; i < 3; i++){
    const card = createCardTemplate();
    card.firstChild.src = pets[arrNum[i]].img;
    card.firstChild.nextSibling.innerText = pets[arrNum[i]].name;

    changedItem.appendChild(card);
  }

  leftBtn.addEventListener('click', moveLeft);
  rightBtn.addEventListener('click', moveRight);
})

//Popup

const popUp = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.btn_close');

function createPopUpCard(cardName){
  let img = document.querySelector('.popup_img');
  let name = document.querySelector('.p_name');
  let type = document.querySelector('.p_type');
  let breed = document.querySelector('.breed');
  let desc = document.querySelector('.desc');
  let age = document.querySelector('.age');
  let inoculat = document.querySelector('.inoculat');
  let diseases = document.querySelector('.diseases');
  let parasites = document.querySelector('.diseases');
  pets.forEach( p => {
    //console.log(p.name);
    if(p.name == cardName){
      img.style.backgroundImage = `url(${p.img})`
      name.innerHTML = p.name;
      type.innerHTML = `${p.type} - <span class="breed">${p.breed}</span>`
      desc.innerHTML = p.description;
      age.innerHTML = p.age;
      inoculat.innerHTML = p.inoculations;
      diseases.innerHTML = p.diseases;
      parasites.innerHTML = p.parasites;
    }
  })
}

itemActive.addEventListener('click', (event) => {
  let card;
  let cardName;
  if(event.target.classList.contains('card') || event.target.classList.contains('card_img') || event.target.classList.contains('card_name')||event.target.classList.contains('card_btn')){
    popUp.classList.add('popup_active');
    body.classList.add('body_over');
    card = event.target.closest('.card')
    cardName = card.querySelector('.card_name').innerHTML;
    console.log(cardName);
    createPopUpCard(cardName)
  }
})


popUp.addEventListener('mouseover', (event) => {
  if(event.target.classList.contains('popup')){
    popupCloseBtn.classList.add('close');
  } 
})

popUp.addEventListener('mouseout', () => {
    popupCloseBtn.classList.remove('close');
})

popUp.addEventListener('click', (event)=>{
  if(event.target.classList.contains('popup') || event.target.classList.contains('btn_close'))
  popUp.classList.remove('popup_active');
  body.classList.remove('body_over');
})