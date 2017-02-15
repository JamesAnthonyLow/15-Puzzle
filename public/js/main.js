var Piece = {
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
  getPieceHeight: function(){
    var diff = 0, pieces = this.getPieces();
    for(var i=0; i<pieces.length-1; i++){
      diff = Math.abs(pieces[i].top - pieces[i+1].top);
      if(diff > 0)
        return diff;
    }
    return 0;
  },
  getPieceWidth: function(){
    var diff = 0, pieces = this.getPieces();
    for(var i=0; i<pieces.length-1; i++){
      diff = Math.abs(pieces[i].left - pieces[i+1].left);
      if(diff > 0)
        return diff;
    }
    return 0;
  }
};



