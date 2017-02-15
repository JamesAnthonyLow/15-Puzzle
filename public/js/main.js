var getChosen = function(){
  return document.getElementsByClassName("chosen")[0];
};
var getEmpty = function(){
  return document.getElementsByClassName("empty")[0];
};
var getPosition = function(piece){
  return piece.getBoundingClientRect();
};
var getPieceHeight = function(){
  var pieces = document.getElementsByClassName("piece");
  var diff = 0;
  var pos1, pos2;
  for(var i=0; i<pieces.length-1; i++){
    pos1 = getPosition(pieces[i]);
    pos2 = getPosition(pieces[i+1]);
    diff = Math.abs(pos1.top - pos2.top);
    if(diff > 0)
      return diff;
  }
  return 0;
};
