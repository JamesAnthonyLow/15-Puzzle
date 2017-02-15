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
    moveCursorOneDown: function(){
      this.moveOneSpace(function(piece) { return Board.getPieceOneDown(piece); });
    }
  };
})();
listen = function(){
  window.onkeydown = function(e){
    e.preventDefault();
    switch(e.keyCode){
      case 37:
        Cursor.moveCursorOneLeft();
        break;
      case 38:
        Cursor.moveCursorOneUp();
        break;
      case 39:
        Cursor.moveCursorOneRight();
        break;
      case 40:
        Cursor.moveCursorOneDown();
        break;
    }
  };
};
