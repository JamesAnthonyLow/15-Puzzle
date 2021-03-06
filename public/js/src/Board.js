var Board = (function() {
  return {
    getPieces: function(){
      var pieces = [];
      var p = document.getElementsByClassName("piece");
      for(var i=0; i<p.length; i++)
        pieces.push(Piece(p[i]));
      return pieces;
    },
    getChosen: function(){
      return Piece(document.getElementsByClassName("chosen")[0]);
    },
    getPieceByNumber: function(n){
      var p = this.getPieces();
      for(var i=0; i<p.length; i++){
        if(p[i].dom.innerHTML == n)
          return p[i];
      }
      return p[0];
    },
    getEmpty: function(){
      return Piece(document.getElementsByClassName("empty")[0]);
    },
    getPieceSize: function(side){
      var diff = 0, pieces = this.getPieces();
      for(var i=0; i<pieces.length-1; i++){
        diff = Math.abs(pieces[i][side] - pieces[i+1][side]);
        if(diff > 0){
          return diff;
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
    exceedsTopBoundary: function(piece){
      return piece.top <= this.getTopBoundary();
    },
    exceedsBottomBoundary: function(piece){
      return piece.bottom >= this.getBottomBoundary();
    },
    exceedsLeftBoundary: function(piece){
      return piece.left == this.getLeftBoundary();
    },
    exceedsRightBoundary: function(piece){
      return piece.right == this.getRightBoundary();
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
      if(this.exceedsLeftBoundary(piece))
        return undefined;
      var x = piece.center.x - Board.getPieceWidth();
      var y = piece.center.y;
      return Piece(document.elementFromPoint(x, y));
    },
    getPieceOneRight: function(piece){
      if(this.exceedsRightBoundary(piece))
        return undefined;
      var x = piece.center.x + Board.getPieceWidth();
      var y = piece.center.y;
      return Piece(document.elementFromPoint(x, y));
    }
  };
})();
