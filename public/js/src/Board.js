var Board = {
  pieces: [],
  getPieces: function(){
    if(this.pieces.length)
      return this.pieces;
    var p = document.getElementsByClassName("piece");
    for(var i=0; i<p.length; i++)
      this.pieces.push(Piece.newPiece(p[i]));
    return this.pieces;
  },
  getChosen: function(){
    return Piece.newPiece(document.getElementsByClassName("chosen")[0]);
  },
  getEmpty: function(){
    return Piece.newPiece(document.getElementsByClassName("empty")[0]);
  },
  getSideBoundary: function(side, compare){
    var p = this.getPieces();
    var min_or_max = p[0][side];
    for(var i=0; i<p.length; i++)
      if(compare(min_or_max, p[i][side]))
        min_or_max = p[i][side];
    return min_or_max;
  },
  getTopBoundary: function(){
    return this.getSideBoundary("top", function(a, b){ return a > b; });
  },
  getBottomBoundary: function(){
    return this.getSideBoundary("bottom", function(a, b){ return a < b; });
  },
  getLeftBoundary: function(){
    return this.getSideBoundary("left", function(a, b){ return a > b; });
  },
  getRightBoundary: function(){
    return this.getSideBoundary("right", function(a, b){ return a < b; });
  },
  getPieceOneUp: function(piece){
    var x = piece.center.x;
    var y = piece.center.y - Piece.getPieceHeight();
    return Piece.newPiece(document.elementFromPoint(x, y));
  },
  getPieceOneDown: function(piece){
    var x = piece.center.x;
    var y = piece.center.y + Piece.getPieceHeight();
    return Piece.newPiece(document.elementFromPoint(x, y));
  },
  getPieceOneLeft: function(piece){
    return Piece.newPiece(document.elementFromPoint(x, y));
  },
  getPieceOneRight: function(piece){
    return Piece.newPiece(document.elementFromPoint(x, y));
  }
};
