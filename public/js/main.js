var getChosen = function(){
  return document.getElementsByClassName("chosen")[0];
};
var getEmpty = function(){
  return document.getElementsByClassName("empty")[0];
};
var getPosition = function(piece){
  return piece.getBoundingClientRect();
};
var getPositions = function(){
  var pieces = document.getElementsByClassName("piece");
  for(var i=0; i<pieces.length; i++){
    console.log(pieces[i].getBoundingClientRect());
  }
}
