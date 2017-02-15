function newPiece(domObj){
  var piece = {}, pos;
  var getPosition = function(domObj){
    return domObj.getBoundingClientRect();
  };
  piece.dom = domObj;
  pos = getPosition(piece.dom);
  piece.top    = pos.top;
  piece.left   = pos.left;
  piece.right  = pos.right;
  piece.bottom = pos.bottom;
  return piece;
}

var getChosen = function(){
  return newPiece(document.getElementsByClassName("chosen")[0]);
};
var getEmpty = function(){
  return newPiece(document.getElementsByClassName("empty")[0]);
};

var getPieces = function(){
  var arr = [], p = document.getElementsByClassName("piece");
  for(var i=0; i<p.length; i++)
    arr.push(newPiece(p[i]));
  return arr;
};

var getPieceHeight = function(){
  var diff = 0, pieces = getPieces();
  for(var i=0; i<pieces.length-1; i++){
    diff = Math.abs(pieces[i].top - pieces[i+1].top);
    if(diff > 0)
      return diff;
  }
  return 0;
};
var getPieceWidth = function(){
  var diff = 0, pieces = getPieces();
  for(var i=0; i<pieces.length-1; i++){
    diff = Math.abs(pieces[i].left - pieces[i+1].left);
    if(diff > 0)
      return diff;
  }
  return 0;
};
