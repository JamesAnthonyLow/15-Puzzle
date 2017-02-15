var Randomizer = (function(){
  var getRandom = function(n){
    return Math.floor(Math.random() * n);
  };
  var findPiece = function(direction){
    p = direction(Board.getEmpty());
    if(p){
      for(i=0; i<getRandom(3); i++)
        p = direction(empty);
    }
    return p;
  };
  var verticalFirst = function(){
    var p;
    p = findPiece(function(p) { return Board.getPieceOneUp(p); });
    if(p)
      return p;
    p = findPiece(function(p) { return Board.getPieceOneDown(p); });
    if(p)
      return p;
    p = findPiece(function(p) { return Board.getPieceOneLeft(p); });
    if(p)
      return p;
    p = findPiece(function(p) { return Board.getPieceOneRight(p); });
    return p;
  };
  var horizontalFirst = function(){
    var p;
    p = findPiece(function(p) { return Board.getPieceOneUp(p); });
    if(p)
      return p;
    p = findPiece(function(p) { return Board.getPieceOneDown(p); });
    if(p)
      return p;
    p = findPiece(function(p) { return Board.getPieceOneLeft(p); });
    if(p)
      return p;
    p = findPiece(function(p) { return Board.getPieceOneRight(p); });
    if(p)
      return p;
    p = findPiece(function(p) { return Board.getPieceOneUp(p); });
    if(p)
      return p;
    p = findPiece(function(p) { return Board.getPieceOneDown(p); });
    return p;
  };

  return {
    getRandom: function(n){ return getRandom(n); },
    getRandomPieceNearEmpty: function(){
      var randomPiece, empty, i;
      empty = this.getEmpty();
      switch(getRandom(2)){
        case 1:
          randomPiece = verticalFirst();
          break;
        case 2:
          randomPiece = horizontalFirst();
          break;
      }
      return randomPiece;
    }
  };
});
