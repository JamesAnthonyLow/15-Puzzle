var Piece = {
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
