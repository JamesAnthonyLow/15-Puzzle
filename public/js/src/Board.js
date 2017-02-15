var Board = {
  getChosen: function(){
    return Piece.newPiece(document.getElementsByClassName("chosen")[0]);
  },
  getEmpty: function(){
    return Piece.newPiece(document.getElementsByClassName("empty")[0]);
  },
  getSideBoundary: function(side, compare){
    var p = Piece.getPieces();
    var min_or_max = p[0][side];
    for(var i=0; i<p.length; i++)
      if(compare(min_or_max, p[i][side]))
        min_or_max = p[i][side];
    return min_or_max;
  },
  getTopBoundary: function(){
    this.getSideBoundary("top", function(a, b){ return a < b; });
  },
  getBottomBoundary: function(){
    this.getSideBoundary("bottom", function(a, b){ return a > b; });
  },
  getLeftBoundary: function(){
    this.getSideBoundary("left", function(a, b){ return a < b; });
  },
  getRightBoundary: function(){
    this.getSideBoundar("right", function(a, b){ return a > b; });
  },
  getPieceOneUp: function(piece){
    var centering = Piece.getPieceHeight() * 0.05;
    var x = piece.left+centering;
    var y = piece.top-(Piece.getPieceHeight()-centering);
    return Piece.newPiece(document.elementFromPoint(x, y));
  },
  getPieceOneDown: function(piece){
    var centering = Piece.getPieceHeight() * 0.05;
    var x = piece.left+centering;
    var y = piece.top+(Piece.getPieceHeight()-centering);
    return Piece.newPiece(document.elementFromPoint(x, y));
  },
  getPieceOneLeft: function(piece){
    var centering = Piece.getPieceHeight() * 0.05;
    var x = piece.left+centering;
    var y = piece.top+(Piece.getPieceHeight()-centering);
    return Piece.newPiece(document.elementFromPoint(x, y));
  },
  getPieceOneRight: function(piece){
    var centering = Piece.getPieceHeight() * 0.05;
    var x = piece.left+centering;
    var y = piece.top+(Piece.getPieceHeight()-centering);
    return Piece.newPiece(document.elementFromPoint(x, y));
  }
};