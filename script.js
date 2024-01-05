const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.appendChild(wrapper);
const scoreContainer = document.createElement('div');
scoreContainer.classList.add('score-container');
wrapper.appendChild(scoreContainer);

let canPlay = false;
let gameStart = false;
let playOn = false;
let categoryAudio = [];
let pathsArray = [];
let wordCount = 0;
let rightAnswer = false;
let mistakes = 0;
let star = 0;


const descriptor = {
        School: 1,
        Action: 2,
        Animals: 3,
        Food: 4,
        Jobs: 5,
        Clothes: 6,
        Furniture: 7,
        Nature: 8,
}

const EnglishForKids = {
  playMode: false,
  menu: "closed",
};

const menuItems = [ 
    {
        title: 'Main page',
        iconSrc: 'assets/icons/main-page.png'
    },
    {
        title: 'School',
        iconSrc: 'assets/icons/school.png'
    },
    {
        title: 'Action',
        iconSrc: 'assets/icons/action.png'
    },
    {
        title: 'Animals',
        iconSrc: 'assets/icons/animals.png'
    },
    {
        title: 'Food',
        iconSrc: 'assets/icons/food.png'
    },
    {
        title: 'Jobs',
        iconSrc: 'assets/icons/jobs.png'
    },
    {
        title: 'Clothes',
        iconSrc: 'assets/icons/clothes.png'
    },
    {
        title: 'Furniture',
        iconSrc: 'assets/icons/furniture.png'
    },
    {
        title: 'Nature',
        iconSrc: 'assets/icons/nature.png'
    },
    {
        title: 'Statictics',
        iconSrc: 'assets/icons/statistics.png'
    }
];

const cards = [
    [ 
        {
            title: 'School',
            image: 'assets/images/categories/school.jpg'
        },
        {
            title: 'Action',
            image: 'assets/images/categories/action.jpg'
        },
        {
            title: 'Animals',
            image: 'assets/images/categories/animals.jpg'
        },
        {
            title: 'Food',
            image: 'assets/images/categories/food.jpg'
        },
        {
            title: 'Jobs',
            image: 'assets/images/categories/jobs.jpg'
        },
        {
            title: 'Clothes',
            image: 'assets/images/categories/clothes.jpg'
        },
        {
            title: 'Furniture',
            image: 'assets/images/categories/furniture.jpg'
        },
        {
            title: 'Nature',
            image: 'assets/images/categories/nature.jpg'
        },
    ],
    [
        {
            word: 'backpack',
            translation: 'рюкзак',
            image: 'assets/images/school/backpack.jpg',
            audioSrc: 'assets/audio/school/backpack.mp3'
        },
        {
            word: 'board',
            translation: 'доска',
            image: 'assets/images/school/board.jpg',
            audioSrc: 'assets/audio/school/board.mp3'
        },
        {
            word: 'cabinet',
            translation: 'кабинет',
            image: 'assets/images/school/cabinet.jpg',
            audioSrc: 'assets/audio/school/cabinet.mp3'
        },
        {
            word: 'desk',
            translation: 'парта',
            image: 'assets/images/school/desk.jpg',
            audioSrc: 'assets/audio/school/desk.mp3'
        },
        {
            word: 'knowledge',
            translation: 'знания',
            image: 'assets/images/school/knowledge.jpg',
            audioSrc: 'assets/audio/school/knowledge.mp3'
        },
        {
            word: 'pupil',
            translation: 'ученик',
            image: 'assets/images/school/pupil.jpg',
            audioSrc: 'assets/audio/school/pupil.mp3'
        },
        {
            word: 'teacher',
            translation: 'учитель',
            image: 'assets/images/school/teacher.jpg',
            audioSrc: 'assets/audio/school/teacher.mp3'
        },
        {
            word: 'textbook',
            translation: 'учебник',
            image: 'assets/images/school/textbook.jpg',
            audioSrc: 'assets/audio/school/textbook.mp3'
        }
    ],
    [
        {
            word: 'eat',
            translation: 'кушать',
            image: 'assets/images/action/eat.jpg',
            audioSrc: 'assets/audio/action/eat.mp3'
        },
        {
            word: 'jump',
            translation: 'прыгать',
            image: 'assets/images/action/jump.jpg',
            audioSrc: 'assets/audio/action/jump.mp3'
        },
        {
            word: 'run',
            translation: 'бегать',
            image: 'assets/images/action/run.jpg',
            audioSrc: 'assets/audio/action/run.mp3'
        },        
        {
            word: 'seat',
            translation: 'сидеть',
            image: 'assets/images/action/seat.jpg',
            audioSrc: 'assets/audio/action/seat.mp3'
        },
        {
            word: 'sleep',
            translation: 'спать',
            image: 'assets/images/action/sleep.jpg',
            audioSrc: 'assets/audio/action/sleep.mp3'
        },
        {
            word: 'swim',
            translation: 'плавать',
            image: 'assets/images/action/swim.jpg',
            audioSrc: 'assets/audio/action/swim.mp3'
        },
        {
            word: 'work',
            translation: 'работать',
            image: 'assets/images/action/work.jpg',
            audioSrc: 'assets/audio/action/work.mp3'
        },
        {
            word: 'yawn',
            translation: 'зевать',
            image: 'assets/images/action/yawn.jpg',
            audioSrc: 'assets/audio/action/yawn.mp3'
        }
    ],
    [
        {
            word: 'elephant',
            translation: 'слон',
            image: 'assets/images/animals/elephant.jpg',
            audioSrc: 'assets/audio/animals/elephant.mp3'
        },
        {
            word: 'horse',
            translation: 'лошадь',
            image: 'assets/images/animals/horse.jpg',
            audioSrc: 'assets/audio/animals/horse.mp3'
        },
        {
            word: 'lion',
            translation: 'лев',
            image: 'assets/images/animals/lion.jpg',
            audioSrc: 'assets/audio/animals/lion.mp3'
        },
        {
            word: 'monkey',
            translation: 'обезьяна',
            image: 'assets/images/animals/monkey.jpg',
            audioSrc: 'assets/audio/animals/monkey.mp3'
        },
        {
            word: 'penguin',
            translation: 'пингвин',
            image: 'assets/images/animals/penguin.jpg',
            audioSrc: 'assets/audio/animals/penguin.mp3'
        },
        {
            word: 'tiger',
            translation: 'тигр',
            image: 'assets/images/animals/tiger.jpg',
            audioSrc: 'assets/audio/animals/tiger.mp3'
        },
        {
            word: 'turtle',
            translation: 'черепаха',
            image: 'assets/images/animals/turtle.jpg',
            audioSrc: 'assets/audio/animals/turtle.mp3'
        },
        {
            word: 'zebra',
            translation: 'зебра',
            image: 'assets/images/animals/zebra.jpg',
            audioSrc: 'assets/audio/animals/zebra.mp3'
        }
    ],
    [
        {
            word: 'apple',
            translation: 'яблоко',
            image: 'assets/images/food/apple.jpg',
            audioSrc: 'assets/audio/food/apple.mp3'
        },
        {
            word: 'chicken',
            translation: 'курица',
            image: 'assets/images/food/chicken.jpg',
            audioSrc: 'assets/audio/food/chicken.mp3'
        },
        {
            word: 'milk',
            translation: 'молоко',
            image: 'assets/images/food/milk.jpg',
            audioSrc: 'assets/audio/food/milk.mp3'
        },
        {
            word: 'pasta',
            translation: 'макароны',
            image: 'assets/images/food/pasta.jpg',
            audioSrc: 'assets/audio/food/pasta.mp3'
        },
        {
            word: 'potato',
            translation: 'картофель',
            image: 'assets/images/food/potato.jpg',
            audioSrc: 'assets/audio/food/potato.mp3'
        },
        {
            word: 'sandwich',
            translation: 'бутерброд',
            image: 'assets/images/food/sandwich.jpg',
            audioSrc: 'assets/audio/food/sandwich.mp3'
        },
        {
            word: 'strawberry',
            translation: 'клубника',
            image: 'assets/images/food/strawberry.jpg',
            audioSrc: 'assets/audio/food/strawberry.mp3'
        },
        {
            word: 'tea',
            translation: 'чай',
            image: 'assets/images/food/tea.jpg',
            audioSrc: 'assets/audio/food/tea.mp3'
        },
    ],
    [
        {
            word: 'cleaner',
            translation: 'уборщик',
            image: 'assets/images/jobs/cleaner.jpg',
            audioSrc: 'assets/audio/jobs/cleaner.mp3'
        },
        {
            word: 'cook',
            translation: 'повар',
            image: 'assets/images/jobs/cook.jpg',
            audioSrc: 'assets/audio/jobs/cook.mp3'
        },
        {
            word: 'doctor',
            translation: 'врач',
            image: 'assets/images/jobs/doctor.jpg',
            audioSrc: 'assets/audio/jobs/doctor.mp3'
        },
        {
            word: 'driver',
            translation: 'водитель',
            image: 'assets/images/jobs/driver.jpg',
            audioSrc: 'assets/audio/jobs/driver.mp3'
        },
        {
            word: 'electrician',
            translation: 'электрик',
            image: 'assets/images/jobs/electrician.jpg',
            audioSrc: 'assets/audio/jobs/electrician.mp3'
        },
        {
            word: 'hairdresser',
            translation: 'парикмахер',
            image: 'assets/images/jobs/hairdresser.jpg',
            audioSrc: 'assets/audio/jobs/hairdresser.mp3'
        },
        {
            word: 'programmer',
            translation: 'программист',
            image: 'assets/images/jobs/programmer.jpg',
            audioSrc: 'assets/audio/jobs/programmer.mp3'
        },
        {
            word: 'waiter',
            translation: 'официант',
            image: 'assets/images/jobs/waiter.jpg',
            audioSrc: 'assets/audio/jobs/waiter.mp3'
        },
    ],
    [
        {
            word: 'coat',
            translation: 'пиджак',
            image: 'assets/images/clothes/coat.jpg',
            audioSrc: 'assets/audio/clothes/coat.mp3'
        },
        {
            word: 'hat',
            translation: 'шапка',
            image: 'assets/images/clothes/hat.jpg',
            audioSrc: 'assets/audio/clothes/hat.mp3'
        },
        {
            word: 'jacket',
            translation: 'куртка',
            image: 'assets/images/clothes/jacket.jpg',
            audioSrc: 'assets/audio/clothes/jacket.mp3'
        },
        {
            word: 'pants',
            translation: 'штаны',
            image: 'assets/images/clothes/pants.jpg',
            audioSrc: 'assets/audio/clothes/pants.mp3'
        },
        {
            word: 'scarf',
            translation: 'шарф',
            image: 'assets/images/clothes/scarf.jpg',
            audioSrc: 'assets/audio/clothes/scarf.mp3'
        },
        {
            word: 'shirt',
            translation: 'рубашка',
            image: 'assets/images/clothes/shirt.jpg',
            audioSrc: 'assets/audio/clothes/shirt.mp3'
        },
        {
            word: 'skirt',
            translation: 'юбка',
            image: 'assets/images/clothes/skirt.jpg',
            audioSrc: 'assets/audio/clothes/skirt.mp3'
        },
        {
            word: 'sneakers',
            translation: 'кроссовки',
            image: 'assets/images/clothes/sneakers.jpg',
            audioSrc: 'assets/audio/clothes/sneakers.mp3'
        }
    ],
    [
        {
            word: 'armchair',
            translation: 'кресло',
            image: 'assets/images/furniture/armchair.jpg',
            audioSrc: 'assets/audio/furniture/armchair.mp3'
        },
        {
            word: 'bed',
            translation: 'кровать',
            image: 'assets/images/furniture/bed.jpg',
            audioSrc: 'assets/audio/furniture/bed.mp3'
        },
        {
            word: 'carpet',
            translation: 'ковёр',
            image: 'assets/images/furniture/carpet.jpg',
            audioSrc: 'assets/audio/furniture/carpet.mp3'
        },
        {
            word: 'cupboard',
            translation: 'шкаф',
            image: 'assets/images/furniture/cupboard.jpg',
            audioSrc: 'assets/audio/furniture/cupboard.mp3'
        },
        {
            word: 'lamp',
            translation: 'лампа',
            image: 'assets/images/furniture/lamp.jpg',
            audioSrc: 'assets/audio/furniture/lamp.mp3'
        },
        {
            word: 'picture',
            translation: 'картина',
            image: 'assets/images/furniture/picture.jpg',
            audioSrc: 'assets/audio/furniture/picture.mp3'
        },
        {
            word: 'sofa',
            translation: 'диван',
            image: 'assets/images/furniture/sofa.jpg',
            audioSrc: 'assets/audio/furniture/sofa.mp3'
        },
        {
            word: 'table',
            translation: 'стол',
            image: 'assets/images/furniture/table.jpg',
            audioSrc: 'assets/audio/furniture/table.mp3'
        },
    ],
    [
        {
            word: 'bush',
            translation: 'куст',
            image: 'assets/images/nature/bush.jpg',
            audioSrc: 'assets/audio/nature/bush.mp3'
        },
        {
            word: 'flower',
            translation: 'цветок',
            image: 'assets/images/nature/flower.jpg',
            audioSrc: 'assets/audio/nature/flower.mp3'
        },
        {
            word: 'grass',
            translation: 'трава',
            image: 'assets/images/nature/grass.jpg',
            audioSrc: 'assets/audio/nature/grass.mp3'
        },
        {
            word: 'island',
            translation: 'остров',
            image: 'assets/images/nature/island.jpg',
            audioSrc: 'assets/audio/nature/island.mp3'
        },
        {
            word: 'mountain',
            translation: 'гора',
            image: 'assets/images/nature/mountain.jpg',
            audioSrc: 'assets/audio/nature/mountain.mp3'
        },
        {
            word: 'sea',
            translation: 'море',
            image: 'assets/images/nature/sea.jpg',
            audioSrc: 'assets/audio/nature/sea.mp3'
        },
        {
            word: 'stone',
            translation: 'камень',
            image: 'assets/images/nature/stone.jpg',
            audioSrc: 'assets/audio/nature/stone.mp3'
        },
        {
            word: 'tree',
            translation: 'дерево',
            image: 'assets/images/nature/tree.jpg',
            audioSrc: 'assets/audio/nature/tree.mp3'
        },
    ]
];

function createHeader() {
  let header = document.createElement("div");
  header.classList.add("header");
  let container = document.createElement("div");
  container.classList.add("container");
  header.appendChild(container);
  wrapper.appendChild(header);
}

function createMain() {
  let main = document.createElement("div");
  main.classList.add("main");
  let container = document.createElement("div");
  container.classList.add("container");
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("card__container");
  
  cards[0].forEach((item) =>{
      createMainCards(item['title'], item['image'], cardContainer, item);
  })

  container.appendChild(cardContainer);
  main.appendChild(container);
  wrapper.appendChild(main);
}

function createToggleButton(){
    let header = document.querySelector('.header .container');
    let container = document.createElement('div');
    container.classList.add('toggle-container')

    let input = document.createElement('input');
    input.type = 'checkbox';
    input.className = 'checkbox';
    input.id = 'checkbox';

    let label = document.createElement('label');
    label.htmlFor = 'checkbox';
    label.className = 'label';

    let ball = document.createElement('div');
    ball.className = 'ball';

    let playMode = document.createElement('i');
    playMode.classList.add('play-mode');
    let trainMode = document.createElement('i');
    trainMode.classList.add('train-mode', 'visible');

    playMode.innerHTML = 'play';
    trainMode.innerHTML = 'train';

    label.appendChild(playMode);
    label.appendChild(trainMode);
    label.appendChild(ball);
    container.appendChild(input);
    container.appendChild(label);
    header.appendChild(container);
}

function createMenuBurger() {
    const header = document.querySelector('.header .container');
    let button = document.createElement('div');
    button.classList.add('burger');
    let line = document.createElement('div');
    let sLine = document.createElement('div');
    let tLine = document.createElement('div');
    line.classList.add('line-first', 'line');
    sLine.classList.add('line-second', 'line');
    tLine.classList.add('line-third', 'line');

    button.appendChild(line);
    button.appendChild(sLine);
    button.appendChild(tLine);
    header.appendChild(button);
}

function createMenuPanel(){
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');
    let menuPanel = document.createElement('div');
    menuPanel.classList.add('menu-panel');

    menuItems.forEach((item)=>{
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu__item');
        const menuIcon = document.createElement('img');
        menuIcon.classList.add('menu__img');
        menuIcon.src = item['iconSrc'];
        const menuTitle = document.createElement('div');
        menuTitle.classList.add('menu__title');
        menuTitle.innerHTML = item['title'];
        menuItem.appendChild(menuIcon);
        menuItem.appendChild(menuTitle);
        menuPanel.appendChild(menuItem);
        switch(item['title']){
            case 'Main page':
                menuItem.addEventListener('click',()=>{
                    const cardContainer = document.querySelector('.card__container');
                    const cardItems = document.querySelectorAll('.card__item');
                    const categoryCardItems = document.querySelectorAll('.card')
                    if(cardItems.length > 0){
                            cardItems.forEach((item)=>{
                            item.remove();
                        })
                    }
                    else if(categoryCardItems.length > 0){
                            categoryCardItems.forEach((item)=>{
                            item.remove();
                        })
                    }
                    closeMenu();
                    cards[0].forEach((item) =>{
                        createMainCards(item['title'], item['image'], cardContainer, item);
                    })
                });
            break;
            case 'School':
                menuItem.addEventListener('click',()=>{
                    closeMenu();
                    fillCategory(item['title']);
                });
            break;
            case 'Action':
                menuItem.addEventListener('click',()=>{
                    closeMenu();
                    fillCategory(item['title']);
                });
            break;
            case 'Animals':
                menuItem.addEventListener('click',()=>{
                    closeMenu();
                    fillCategory(item['title']);
                });
            break;
            case 'Food':
                menuItem.addEventListener('click',()=>{
                    closeMenu();
                    fillCategory(item['title']);
                });
            break;
            case 'Jobs':
                menuItem.addEventListener('click',()=>{
                    closeMenu();
                    fillCategory(item['title']);
                });
            break;
            case 'Clothes':
                menuItem.addEventListener('click',()=>{
                    closeMenu();
                    fillCategory(item['title']);
                });
            break;
            case 'Furniture':
                menuItem.addEventListener('click',()=>{
                    closeMenu();
                    fillCategory(item['title']);
                });
            break;
            case 'Nature':
                menuItem.addEventListener('click',()=>{
                    closeMenu();
                    fillCategory(item['title']);
                });
            break;
            case 'Statistics':
                menuItem.addEventListener('click',()=>{
                    closeMenu();

                });
            break;
            default:
                break;
        }
    })

    wrapper.appendChild(overlay);
    wrapper.appendChild(menuPanel);
}

function fillCategory(category) {
    categoryAudio = [];
    canPlay = true;
    const startButton = document.querySelector('.start-button');

    if(startButton !== null){
        if(canPlay){
            startButton.removeAttribute('disabled');
        }
        else{
            startButton.setAttribute('disabled', 'disabled');
        }
    }
  
    const playTitle = document.querySelector('.play-mode');
    const cardContainer = document.querySelector('.card__container');
    const cardItems = document.querySelectorAll('.card__item');
    console.log(cardItems);
    const categoryCardItems = document.querySelectorAll('.card')
    console.log(categoryCardItems);
    if(cardItems.length > 0){
            cardItems.forEach((item)=>{
            item.remove();
        })
    }
    else if(categoryCardItems.length !== 0 || categoryCardItems.length !== null){
            categoryCardItems.forEach((item)=>{
            item.remove();
        })
    }
    cards[descriptor[category]].forEach((item)=>{
        createCategoryCards(item['word'], item['translation'], item['image'], cardContainer, item, category);
    })

    cards[descriptor[category]].forEach((item)=>{
        categoryAudio.push(item['audioSrc']);
    })

    const playCardItems = document.querySelectorAll('.front');
    const underImages = document.querySelectorAll('.under-img');

    if(playTitle.classList.contains('visible')){
        playCardItems.forEach((item)=> {
            item.classList.toggle('play-card');
        })
        underImages.forEach((item)=>{
            item.classList.toggle('unvisible');
        })
    }
    shuffle(categoryAudio);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

function score(result){
    const emptyStar = document.createElement('img');
    emptyStar.src = 'assets/images/empty-star.png';
    emptyStar.classList.add('score-img');
    const star = document.createElement('img');
    star.src = 'assets/images/star.png';
    star.classList.add('score-img');
      if(result){
        scoreContainer.appendChild(star);
      }
      else{
        scoreContainer.appendChild(emptyStar);
      }
      wrapper.appendChild(scoreContainer);
}

function closeMenu() {
    overlay.classList.toggle('is-active');
    menuPanel.classList.toggle('is-active');
    document.querySelector('.burger').classList.toggle('is-active');
}

function createPlayPanel(){
    const container = document.createElement('div');
    container.classList.add('play-container');

    const startButton = document.createElement('button');
    const startButtonImg = document.createElement('img');

    startButton.addEventListener('click', ()=>{
        gameStart = true;
        sayWord();
    })
    startButtonImg.classList.add('img');
    startButtonImg.src = 'assets/images/play.png';
    startButton.classList.add('start-button', 'play-button');

    const repeatButton = document.createElement('button');
    repeatButton.addEventListener('click', ()=>{
        gameStart = true;
        sayWord();
    })
    const repeatButtonImg = document.createElement('img');
    repeatButtonImg.classList.add('img');
    repeatButtonImg.src = 'assets/images/replay.png';
    repeatButton.classList.add('repeat-button', 'play-button');

    startButton.appendChild(startButtonImg);
    repeatButton.appendChild(repeatButtonImg);
    container.appendChild(startButton);
    container.appendChild(repeatButton);
    document.body.appendChild(container);
}

function createCategoryCards(word, translation, image, container, item){
    const card = document.createElement('div');
    card.classList.add('card');
    const cardItem = document.createElement('div');
    cardItem.classList.add('front');

    const cardItemBack = document.createElement('div');
    cardItemBack.classList.add('back');

    const cardWord = document.createElement('div');
    cardWord.classList.add('under-img', 'word');

    const playSound = document.createElement('img');
    playSound.classList.add('img-play-sound');
    playSound.addEventListener('click', ()=>{
        const audio = new Audio();
        audio.src = item['audioSrc'];
        audio.play();
    })
    playSound.src = 'assets/images/microphone.png';

    const turn = document.createElement('img');
    turn.classList.add('img-turn');
    turn.addEventListener('click', ()=>{
        cardItem.style.cssText = `transform: rotateY(180deg);`;
        cardItemBack.style.cssText = `transform: rotateY(360deg);`;
        card.addEventListener('mouseleave',()=>{
            cardItem.style.cssText = `transform: rotateY(0deg);`;
            cardItemBack.style.cssText = `transform: rotateY(180deg);`;
        })
    })
    turn.src = 'assets/images/turn.png';

    pathsArray.push(item['audioSrc']);

    const cardTranslation = document.createElement('div');
    cardTranslation.classList.add('card__title', 'translation');

    const cardImage = document.createElement('div');
    cardImage.classList.add('card__img');
    cardImage.addEventListener('click', ()=>{
        if(gameStart){
            validate();
        }
    })

    const cardImageBack = document.createElement('div');
    cardImageBack.classList.add('card__img');

    cardWord.innerHTML = word;
    cardWord.appendChild(turn);
    cardWord.appendChild(playSound);

    cardTranslation.innerHTML = translation;
    cardImage.style.cssText += `background-image: url(${image});
                                background-size: cover;`;
    cardImageBack.style.cssText += `background-image: url(${image});
                                background-size: cover;`;

    cardItem.appendChild(cardImage);
    cardItemBack.appendChild(cardImageBack);

    cardItem.appendChild(cardWord);
    cardItemBack.appendChild(cardTranslation);

    card.appendChild(cardItem);
    card.appendChild(cardItemBack);
    container.appendChild(card);
}

function createMainCards(title, image, container, item){
    const playTitle = document.querySelector('.play-mode');
    const startButton = document.querySelector('.start-button');
    if(startButton !== null){
        if(canPlay){
            startButton.removeAttribute('disabled');
        }
        else{
            startButton.setAttribute('disabled', 'disabled');
        }
    }

    const cardItem = document.createElement('div');
    cardItem.classList.add('card__item');

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card__title');

    const cardImage = document.createElement('div');
    cardImage.classList.add('card__img');

    cardTitle.innerHTML = title;
    cardImage.style.cssText += `background-image: url(${image});
                                background-size: cover;`;

    switch(item['title']){
        case 'School':
            cardItem.addEventListener('click',()=>{
                fillCategory(item['title']);
            });
        break;
        case 'Action':
            cardItem.addEventListener('click',()=>{
                fillCategory(item['title']);
            });
        break;
        case 'Animals':
            cardItem.addEventListener('click',()=>{
                fillCategory(item['title']);
            });
        break;
        case 'Food':
            cardItem.addEventListener('click',()=>{
                fillCategory(item['title']);
            });
        break;
        case 'Jobs':
            cardItem.addEventListener('click',()=>{                
                fillCategory(item['title']);
            });
        break;
        case 'Clothes':
            cardItem.addEventListener('click',()=>{
                fillCategory(item['title']);
            });
        break;
        case 'Furniture':
            cardItem.addEventListener('click',()=>{
                fillCategory(item['title']);
            });
        break;
        case 'Nature':
            cardItem.addEventListener('click',()=>{
                fillCategory(item['title']);
            });
        break;
        default:
            break;
    }
    cardItem.appendChild(cardImage);
    cardItem.appendChild(cardTitle);
    container.appendChild(cardItem);
    const playCardItems = document.querySelectorAll('.card__item');
    if(playTitle.classList.contains('visible')){
        playCardItems.forEach((item)=> {
            item.classList.toggle('play-card');
        })
    }
}

function sayWord(){
    if(wordCount === 8){
        if(mistakes === 0){
            congratulate(true);
            const container = document.querySelector('.congratulation-container');
            setTimeout(makeUnvisible(container), 2000);
        }
        else{
            congratulate(false);
            const container = document.querySelector('.congratulation-container');
            setTimeout(makeUnvisible(container), 2000);
        }
    }
    if(gameStart){
        let audio = new Audio();
        audio.src = categoryAudio[wordCount];
        audio.play();
    }
}

function validate(){
    rightAnswer = false;
    star = false;
    const playCards = document.querySelectorAll('.front .card__img');
    playCards.forEach((item, index)=>{
        item.addEventListener('click', ()=>{
            if(pathsArray[index] === categoryAudio[wordCount]){
                item.classList.add('disabled');
                wordCount++;
                rightAnswer = true;
                result(true);
                score(true);
                setTimeout(sayWord, 2000);
            }
            else{
                if(!rightAnswer){
                    if(!star){
                        score(false);
                        result(false);
                        mistakes++;
                    }
                    star = true;
                }
            }
        })
    })
}

function result(result){
    const audio = new Audio();
    if(result === true){
        audio.src = 'assets/audio/right.mp3';
    }
    else{
        audio.src = 'assets/audio/wrong.mp3'
    }
    audio.play();
}

function congratulate(result){
    const container = document.createElement('div');
    container.classList.add('congratulation-container');

    const img = document.createElement('img');
    img.classList.add('congratulation-img')

    const title = document.createElement('div');
    title.classList.add('congratulation-title');

    if(result){
        title.innerHTML = 'Excellent work!';
        img.src = 'assets/images/like.png';
    }
    else{
        title.innerHTML = `Mistakes: ${mistakes}`;
        img.src = 'assets/images/dislike.png';
    }
    container.appendChild(img);
    container.appendChild(title);
    wrapper.appendChild(container);
}

function makeUnvisible(element){
    element.classList.toggle('unvisible');
}


createHeader();
createMenuBurger();
createToggleButton();
createMain();
createMenuPanel();
createPlayPanel();

const checkbox = document.querySelector('#checkbox');
checkbox.addEventListener('change', ()=>{
    const train = document.querySelector('.train-mode');
    const play = document.querySelector('.play-mode');
    const container = document.querySelector('.play-container');
    play.classList.toggle('visible');
    train.classList.toggle('visible');
    container.classList.toggle('visible');
    const playCards = document.querySelectorAll('.card__item');
    const playItems = document.querySelectorAll('.front');
    const playItemsBack = document.querySelectorAll('.back');

    playItemsBack.forEach((item) =>{
        item.classList.toggle('unvisible');
    })
    const underImages = document.querySelectorAll('.under-img');
    underImages.forEach((item)=>{
        item.classList.toggle('unvisible');
    })
    if(playCards.length > 0){
        playCards.forEach((item) =>{
            item.classList.toggle('play-card');
        });
    }
    if(playItems.length > 0){
        playItems.forEach((item) =>{
            item.classList.toggle('play-card');
        });
    }
    if(playItemsBack.length > 0){
        playItemsBack.forEach((item) =>{
            item.classList.toggle('play-card');
        });
    }
});

const menuPanel = document.querySelector('.menu-panel');
const burgerButton = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');

burgerButton.addEventListener('click', ()=>{
    closeMenu();
});

overlay.addEventListener('click', ()=>{
    closeMenu();
});

