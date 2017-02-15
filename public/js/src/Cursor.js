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
      this.moveOneSpace(function(piece) { return Board.getPieceOneUp(piece); });
    },
    moveCursorOneLeft: function(){
      this.moveOneSpace(function(piece) { return Board.getPieceOneLeft(piece); });
    },
    moveCursorOneRight: function(){
      this.moveOneSpace(function(piece) { return Board.getPieceOneRight(piece); });
    },
    moveCursorOneDown: function(){
      this.moveOneSpace(function(piece) { return Board.getPieceOneDown(piece); });
    },
    moveTileOne: function(fn){
      var num;
      var chosen = Board.getChosen();
      var one = fn(chosen);
      if(one === undefined)
        return;
      num = chosen.dom.innerHTML;
      chosen.dom.innerHTML = one.dom.innerHTML;
      one.dom.innerHTML = num;
    },
    moveTileUpOne: function(){
      this.moveTileOne(function(piece) { return Board.getPieceOneUp(piece); });
    },
    moveTileLeftOne: function(){
      this.moveTileOne(function(piece) { return Board.getPieceOneLeft(piece); });
    },
    moveTileRightOne: function(){
      this.moveTileOne(function(piece) { return Board.getPieceOneRight(piece); });
    },
    moveTileDownOne: function(){
      this.moveTileOne(function(piece) { return Board.getPieceOneDown(piece); });
    },
  };
})();
