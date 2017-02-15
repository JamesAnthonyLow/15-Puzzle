var Board = (function() {
  var pieces = [];
  return {
    getPieces: function(){
      if(pieces.length)
        return pieces;
      var p = document.getElementsByClassName("piece");
      for(var i=0; i<p.length; i++)
        pieces.push(Piece(p[i]));
      return pieces;
    },
    getChosen: function(){
      return Piece(document.getElementsByClassName("chosen")[0]);
    },
    getEmpty: function(){
      return Piece(document.getElementsByClassName("empty")[0]);
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
      if(this.exceedsTopBoundary(piece))
        return undefined;
      var x = piece.center.x;
      var y = piece.center.y - Board.getPieceHeight();
      return Piece(document.elementFromPoint(x, y));
    },
    getPieceOneDown: function(piece){
      if(this.exceedsBottomBoundary(piece))
        return undefined;
      var x = piece.center.x;
      var y = piece.center.y + Board.getPieceHeight();
      return Piece(document.elementFromPoint(x, y));
    },
    getPieceOneLeft: function(piece){
      return Piece(document.elementFromPoint(x, y));
    },
    getPieceOneRight: function(piece){
      return Piece(document.elementFromPoint(x, y));
    },
    exceedsTopBoundary: function(piece){
      return piece.top == this.getTopBoundary();
    },
    exceedsBottomBoundary: function(piece){
      return piece.bottom == this.getBottomBoundary();
    }
  };
})();
