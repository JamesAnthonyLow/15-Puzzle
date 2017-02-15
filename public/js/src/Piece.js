var Piece = {
  pieces: [],
  getPieces: function(){
    if(this.pieces.length)
      return this.pieces;
    var p = document.getElementsByClassName("piece");
    for(var i=0; i<p.length; i++)
      this.pieces.push(this.newPiece(p[i]));
    return this.pieces;
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
  getPos: function(piece){
    return piece.getBoundingClientRect();
  },
  top: function(){
    return getPos().top;
  },
  left: function(){
    return getPos().left;
  },
  right: function(){
    return getPos().right;
  },
  bottom: function(){
    return getPos().bottom;
  },
  newPiece: function(domObj){
    var piece = {}, pos;
    piece.dom = domObj;
    pos = domObj.getBoundingClientRect();
    return piece;
  },
};
