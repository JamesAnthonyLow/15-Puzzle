var Cursor = (function(){
  return {
    moveOneSpace: function(fn){
      var chosen = Board.getChosen();
      var oneSpace = fn(chosen);
      if(oneSpace === undefined)
        return;
      chosen.dom.classList.remove("chosen");
      oneSpace.dom.classList.add("chosen");
    },
    moveCursorOneUp: function(){
      this.moveOneSpace(function(piece) { return Board.getPieceOneUp(piece); } );
    },
    moveCursorOneLeft: function(){
      this.moveOneSpace(function(piece) { return Board.getPieceOneLeft(piece); });
    },
    moveCursorOneRight: function(){
      this.moveOneSpace(function(piece) { return Board.getPieceOneRight(piece); });
    },
    moveCursorOneBottom: function(){
      this.moveOneSpace(function(piece) { return Board.getPieceOneBottom(piece); });
    }
  };
})();
