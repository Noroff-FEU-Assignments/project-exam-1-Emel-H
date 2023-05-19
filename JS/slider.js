//this code is taken and modified from https://codepen.io/hershkirsh/pen/BXBprB

let container = document.getElementsByClassName("container")
let slider = document.getElementsByClassName("slider");
let buttons = document.getElementsByClassName("btn");

let currentPosition = 0;
let currentMargin = 0;
let slidesPerPage = 4;
let slidesCount = 2;

function setParams() {
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    slider[0].style.marginLeft = currentMargin + '%';
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        buttons[1].classList.add('inactive');
    }
}

setParams();

function slideRight() {
    if (currentPosition != 0) {
        slider[0].style.marginLeft = currentMargin + 100 + '%';
        currentMargin += 100;
        currentPosition-=1;        
    };
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        slider[0].style.marginLeft = currentMargin - (100) + '%';
        currentMargin -= 100;
        currentPosition+=1;        
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};