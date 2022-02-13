
async function fetchPosition (stringOne, stringTwo, stringThree, stringFour) {

    const responseFirst = await fetch(stringOne);
    const resultFirst = await responseFirst.json();
    const responseSecond = await fetch(stringTwo);
    const resultSecond = await responseSecond.json();
    const responseThree = await fetch(stringThree);
    const resultThree = await responseThree.json();
    const responseFour = await fetch(stringFour);
    const resultFour = await responseFour.json();
    addPositions(resultFirst, resultSecond, resultThree, resultFour);
}
fetchPosition('http://giraffe/wp-content/themes/giraffe/Base/second-dishes.json', 'http://giraffe/wp-content/themes/giraffe/Base/breakfasts.json', 'http://giraffe/wp-content/themes/giraffe/Base/salads.json', 'http://giraffe/wp-content/themes/giraffe/Base/main-dishes.json' )
.then ( () => {
        const loader = document.getElementsByClassName('loader')[0];
        loader.style.display = 'none';  
})


function addPositions (first, second, three, four) {
    // createPosition(first);
    // createPosition(second);
    // createPosition(three);
    // createPosition(four);

// go to DOM objects
const body = document.querySelector('body')
const sections = document.getElementsByClassName('section');
const nav = document.querySelector('nav');
const positionNames = document.getElementsByClassName('position-name');
const price = document.getElementsByClassName('price');
const checkPositions = document.getElementsByClassName('bx-dish');
const basketForPositions = document.querySelector('#basketForCheck');
const preCheck = document.querySelector('.preCheckBg');
const hidePreCheckButton = document.querySelector('.fa-chevron-circle-left');
const infoButton = document.querySelector('.fa-info-circle');
const info = document.querySelector('.priceInfo');
const infoButtonClose = document.querySelector('.fa-times');



infoButton.addEventListener('click', showInfo)
infoButtonClose.addEventListener('click', hideInfo)


function showInfo(){
    if(!info.className.includes('priceInfoShow')){
        info.classList.add('priceInfoShow');
        setTimeout(() => {
            window.addEventListener ('scroll', hideInfo);
        }, 800)
    } else if (info.className.includes('priceInfoShow')) {
        hideInfo();
    }
}

function hideInfo () {
    info.classList.add('priceInfoHide');
    setTimeout(()=> {
        info.classList.remove('priceInfoShow');
        info.classList.remove('priceInfoHide');
        window.removeEventListener ('scroll', hideInfo);
    }, 400)

}

hidePreCheckButton.addEventListener('click', hidePreCheck);
basketForPositions.addEventListener('click', showPreCheck);


function showPreCheck (){
    preCheck.style.display = 'block';
    body.style.overflow = 'hidden';
    const deletePrePosition = document.getElementsByClassName('fa-trash-alt');
    for(i=0; i<deletePrePosition.length; i++){
        deletePrePosition[i].addEventListener('click', deletePosition);
    }
}
function deletePosition(e) {
    let price = Number(e.target.previousElementSibling.innerText);
    const sum = document.querySelector('#sum');
    sum.innerText = Number(sum.innerText) - (price + (price/100*15));
    const positionPreCheck = e.target.parentElement;
    basketForPositions.children[0].innerText = `${Number(basketForPositions.children[0].innerText)-1}`;
    positionPreCheck.classList.add('deletePositionPreCheck');
    let nextPositionPreCheck = e.target.parentElement.nextElementSibling;
        while(!!nextPositionPreCheck){
            console.log(nextPositionPreCheck)
            nextPositionPreCheck.classList.add('positionPreCheckUp');
            nextPositionPreCheck = nextPositionPreCheck.nextElementSibling;
        }
    setTimeout(()=> {
        positionPreCheck.remove();
        const positions = document.getElementsByClassName('preCheckPosition');
        for (let i=0; i<positions.length; i++){
            positions[i].classList.remove('positionPreCheckUp');
        }
    }, 800)
    // while(positionPreCheck.nextElementSibling)
    // positionPreCheck.remove();

}



function hidePreCheck () {
    preCheck.style.display = 'none';
    body.style.overflow = 'visible';


}

for (i=0; i<checkPositions.length; i++){
    checkPositions[i].addEventListener('click', addPositionToBasket)
}

function addPositionToBasket (e) {
    // console.log(e.target.innerHTML)
    console.dir(e.target)
    // console.dir(e)
    e.target.style.position = `fixed`;
    e.target.style.top = `calc(${e.clientY}px - 7vw)`;
    e.target.style.left = `calc(${e.clientX}px - 7vw)`;
    e.target.classList.add('addPositionToBasket');
    e.target.previousElementSibling.removeEventListener('click', showCheckPosition);
    setTimeout(()=> {
        e.target.style.position = 'absolute';
        e.target.style.left = 'unset';
        e.target.style.top = `unset`;
        e.target.classList.remove('addPositionToBasket');
        e.target.classList.remove('showCheckPosition');
        
        e.target.previousElementSibling.addEventListener('click', showCheckPosition);

        newPositionInBasket();
    }, 450)

    const preCheckPosition = document.createElement('div');
    preCheckPosition.classList.add('preCheckPosition');
    let price = Number(e.target.previousElementSibling.innerText);
    let posName = e.target.nextElementSibling.children[0].innerText;
    const sum = document.querySelector('#sum');
    sum.innerText = Math.round(Number(sum.innerText) + (price + (price/100*15)));
    preCheckPosition.innerHTML = `<p>${posName}</p>
            <p class="preCheckPositionPrice">${price}</p>
            <i class="far fa-trash-alt"></i>`;
    const gridCheck = document.querySelector('.gridCheck');
    gridCheck.append(preCheckPosition);
    // console.log(preCheckPosition);

}

function newPositionInBasket () {
    basketForPositions.classList.add('trigger');
    basketForPositions.children[0].innerText = `${Number(basketForPositions.children[0].innerText)+1}`;
        basketForPositions.children[0].style.display = 'block';
    setTimeout(() =>{basketForPositions.classList.remove('trigger')}, 500)
}


for (i=0; i<nav.children.length; i++){
    nav.children[i].addEventListener('click', onClickNav);
}

window.addEventListener('scroll', showNav)

showNav();

function onFocusNav (navA) {
    for (i=0; i< nav.children.length; i++){
        nav.children[i].classList.add('0')
        nav.children[i].classList.remove('onFocus')
    }
    navA.classList.add('onFocus');
} 

function showNav (){
    if (window.scrollY < 35) {
        sections[0].children[0].style.color ='black';
        }
    for(i=0; i<sections.length; i++){
        if (window.scrollY > sections[i].offsetTop-30 && window.scrollY < (sections[i].offsetTop+sections[i].offsetHeight-35)){
            sections[i].children[0].style.color ='white';
            if(!!sections[i].nextElementSibling && !!sections[i].nextElementSibling.children[0]){
            sections[i].nextElementSibling.children[0].style.color = 'black';
            } 
            if(!!sections[Number(i)-1] && !!sections[i].previousElementSibling.children[0]){
            sections[i].previousElementSibling.children[0].style.color = 'black';
            }
           onFocusNav(nav.children[i]);
        } 
    }
    for (i=0; i<checkPositions.length; i++){
        if(checkPositions[i].className.includes('showCheckPosition')) {
            checkPositions[i].classList.remove('showCheckPosition');
            checkPositions[i].classList.add('hideCheckPosition');
        }
    }
}
function wind(){
    window.addEventListener('scroll', showNav);
    for (i=0; i<nav.children.length; i++){
        nav.children[i].style.pointerEvents = 'auto';

    }
}
function onClickNav (e) {
    window.removeEventListener('scroll', showNav);
    for (i=0; i<nav.children.length; i++){
        nav.children[i].style.pointerEvents = 'none';
    }
    onFocusNav(e.target);
    setTimeout(wind, 700);
}

// ----
for (i=0; i<positionNames.length; i++){
    if(positionNames[i].children[0].innerText.length > 60){
        positionNames[i].children[0].classList.add('tooMuch');
        positionNames[i].nextElementSibling.addEventListener('click', showPositionName)
    }
}

function showPositionName (e) {
    // console.log(e.target.previousElementSibling.children[0].innerText);
    if(e.target.previousElementSibling.children[0].className.includes('tooMuch')){

        e.target.previousElementSibling.classList.add('showName');
        e.target.previousElementSibling.classList.remove('hideName');
        e.target.previousElementSibling.classList.remove('hideName2');

        e.target.previousElementSibling.children[0].classList.remove('tooMuch');

    } else {
        
        if(e.target.previousElementSibling.className.includes('position-name2')){
        e.target.previousElementSibling.classList.add('hideName2');
        } else {
            e.target.previousElementSibling.classList.add('hideName');
        }
        e.target.previousElementSibling.classList.remove('showName');
        e.target.previousElementSibling.children[0].classList.add('tooMuch');
    }
}

    function createPosition (sec) {
        const section = document.querySelector(`#${sec[0].section}`);

        for(i=1; i<sec.length; i++){
            const gridBlock = document.createElement('div');
            gridBlock.classList.add('gridBlock');

            const positionPrice = document.createElement('p');
            positionPrice.classList.add('price')
            positionPrice.innerText = sec[i].price;

            const checkPosition = document.createElement('i');
            checkPosition.className = 'bx bx-dish';

            const positionNameDiv = document.createElement('div');
            positionNameDiv.classList.add('position-name');
            const positionName = document.createElement('p');
            positionName.innerText = sec[i].name;
            positionNameDiv.append(positionName);

            const background = document.createElement('div');
            background.classList.add('block-bg');

            const positionImage = document.createElement('img');
            positionImage.classList.add('menu-image');
            positionImage.src = sec[i].image;

            gridBlock.append(positionPrice);
            gridBlock.append(checkPosition);
            gridBlock.append(positionNameDiv);
            gridBlock.append(background);
            gridBlock.append(positionImage);

            if (i%2 == 0) {
                background.classList.add('rotate');
                positionNameDiv.classList.add('position-name2');
            }
            section.append(gridBlock);
        }
    }

 

for (i=0; i<price.length; i++){
    price[i].addEventListener('click', showCheckPosition);
}
 
function showCheckPosition (e) {
    if(!e.target.nextElementSibling.className.includes('showCheckPosition')){
        e.target.nextElementSibling.classList.remove('hideCheckPosition');
        e.target.nextElementSibling.classList.add('showCheckPosition');
    } else {
        e.target.nextElementSibling.classList.remove('showCheckPosition');
        e.target.nextElementSibling.classList.add('hideCheckPosition');
    }
}





// window.addEventListener('load', () => {
//     console.log('page is fully loaded');
//     const loader = document.getElementsByClassName('loader')[0];
//     console.log(loader);
//     loader.style.display = 'none';
//   });
}
// window.addEventListener('load', () => {
//     console.log('page is fully loaded');
//     const loader = document.getElementsByClassName('loader')[0];
//     console.log(loader);
//     loader.style.display = 'none';
//   });

    
    
    

