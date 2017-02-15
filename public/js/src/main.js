var Piece = {
  getChosen: function(){
    return this.newPiece(document.getElementsByClassName("chosen")[0]);
  },
  getEmpty: function(){
    return this.newPiece(document.getElementsByClassName("empty")[0]);
  },
  getPieces: function(){
    var arr = [], p = document.getElementsByClassName("piece");
    for(var i=0; i<p.length; i++)
      arr.push(this.newPiece(p[i]));
    return arr;
  },
  pieceSide: { top: undefined, left: undefined },
  getPieceSize: function(side){
    if(this.pieceSide[side] !== undefined)
      return this.pieceSide[side];
    var diff = 0, pieces = this.getPieces();
    for(var i=0; i<pieces.length-1; i++){
      diff = Math.abs(pieces[i][side] - pieces[i+1][side]);
      if(diff > 0){
        this.pieceSide[side] = diff;
        return this.pieceSide[side];
      }
    }
    return 0;
  },
  getPieceHeight: function(){
    return this.getPieceSize("top");
  },
  getPieceWidth: function(){
    return this.getPieceSize("left");
  },
  getPieceOneUp: function(piece){
    var centering = this.getPieceHeight() * 0.05;
    var x = piece.left+centering;
    var y = piece.top-(this.getPieceHeight()-centering);
    return this.newPiece(document.elementFromPoint(x, y));
  },
  getPieceOneDown: function(piece){
    var centering = this.getPieceHeight() * 0.05;
    var x = piece.left+centering;
    var y = piece.top+(this.getPieceHeight()-centering);
    return this.newPiece(document.elementFromPoint(x, y));
  },
  getPieceOneLeft: function(piece){
    var centering = this.getPieceHeight() * 0.05;
    var x = piece.left+centering;
    var y = piece.top+(this.getPieceHeight()-centering);
    return this.newPiece(document.elementFromPoint(x, y));
  },
  getPieceOneRight: function(piece){
    var centering = this.getPieceHeight() * 0.05;
    var x = piece.left+centering;
    var y = piece.top+(this.getPieceHeight()-centering);
    return this.newPiece(document.elementFromPoint(x, y));
  },
  newPiece: function(domObj){
    var piece = {}, pos;
    piece.dom = domObj;
    pos = domObj.getBoundingClientRect();
    piece.top    = pos.top;
    piece.left   = pos.left;
    piece.right  = pos.right;
    piece.bottom = pos.bottom;
    return piece;
  },
};



