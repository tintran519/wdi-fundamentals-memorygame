var cards = ['Queen','Queen','King','King'];
var cardsInPlay = [];

var gboard = document.getElementById('game-board');

var createBoard = function() {
  for(var i = 0; i<cards.length; i++) {
  var cardElement = document.createElement('div');
  cardElement.className='card';
  cardElement.setAttribute ('data-card',cards[i]);
  cardElement.addEventListener('click',isTwoCards);
  gboard.appendChild(cardElement);
}
}

var deleteBoard = function() {
  for(var i = cards.length; i>0; i-=1) {
    var playedCards = document.querySelector('.card');
    gboard.removeChild(playedCards);
    playedCards.removeEventListener('click',isTwoCards);
    playedCards.removeAttribute ('data-card',cards[i]);
  }
}

var shuffle = function(array) {
  setTimeout(function() {
  deleteBoard();
  createBoard();
},100);

  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -=1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var isTwoCards = function() {
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(this.getAttribute('data-card'));
  if(this.getAttribute('data-card') === 'King') {
    this.innerHTML = "<img src = 'kingOfHearts.png' style ='width:150px;height:200px;'>";
  } else {
    this.innerHTML = "<img src = 'queenOfHearts.png' style ='width:150px;height:200px;'>";
  }
  if(cardsInPlay.length ===2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

var isMatch = function(activecards) {
  if(activecards[0]=== activecards[1]) {
  alert("You found a match!"); 
} else{
  alert("Sorry,try again.");
}
  setTimeout(function() {
  deleteBoard();
  createBoard();
}, 1000);
}

createBoard()
