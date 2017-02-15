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
  newPiece: function(domObj){
    var piece = {}, pos;
    piece.dom = domObj;
    pos = domObj.getBoundingClientRect();
    piece.top = pos.top;
    piece.left = pos.left;
    piece.right = pos.right;
    piece.bottom = pos.bottom;
    piece.center = {};
    piece.center.x = (pos.right + pos.left)/2.0;
    piece.center.y = (pos.bottom + pos.top)/2.0;
    return piece;
  }
};
