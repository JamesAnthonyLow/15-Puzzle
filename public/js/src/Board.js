var Board = {
  getChosen: function(){
    return Piece.newPiece(document.getElementsByClassName("chosen")[0]);
  },
  getEmpty: function(){
    return Piece.newPiece(document.getElementsByClassName("empty")[0]);
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
