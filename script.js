const cardWrapper = document.querySelector('.card-wrapper');
const widthToScroll = cardWrapper.children[0].offsetWidth;
const arrowPrev = document.querySelector('.arrow.prev');
const arrowNext = document.querySelector('.arrow.next');
const cardBounding = cardWrapper.getBoundingClientRect();
const cardImageAndLink = cardWrapper.querySelectorAll('img, a');
let currScroll = 0;
let initPos = 0;
let clicked = false;



cardImageAndLink.forEach(item => {
  item.setAttribute('draggable', false);
});

arrowPrev.onclick = function() {
  cardWrapper.scrollLeft -= widthToScroll;
  console.log("anshu")
};

arrowNext.onclick = function() {
  cardWrapper.scrollLeft += widthToScroll;
  console.log("ans")
};

cardWrapper.onmousedown = function(e) {
  console.log("Mouse down");
  cardWrapper.classList.add('grab');
  initPos = e.clientX - cardBounding.left;
  currScroll = cardWrapper.scrollLeft;
  clicked = true;
};

cardWrapper.onmousemove = function(e) {
  console.log("Mouse move");
  if (clicked) {
    const xPos = e.clientX - cardBounding.left;
    cardWrapper.scrollLeft = currScroll + -(xPos - initPos);
  }
};

cardWrapper.onmouseup = mouseUpAndLeave;
cardWrapper.onmouseleave = mouseUpAndLeave;

function mouseUpAndLeave() {
  console.log("Mouse up or leave");
  cardWrapper.classList.remove('grab');
  clicked = false;
}
