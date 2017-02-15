var Piece = {
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
