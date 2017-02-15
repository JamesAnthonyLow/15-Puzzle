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
    moveTileOne: function(piece, fn){
      var num;
      var one = fn(piece);
      if(one === undefined)
        return;
      num = piece.dom.innerHTML;
      piece.dom.innerHTML = one.dom.innerHTML;
      one.dom.innerHTML = num;
    },
    moveTileUpOne: function(curr){
      this.moveTileOne(curr, function(piece) { return Board.getPieceOneUp(piece); });
    },
    moveTileLeftOne: function(curr){
      this.moveTileOne(curr, function(piece) { return Board.getPieceOneLeft(piece); });
    },
    moveTileRightOne: function(curr){
      this.moveTileOne(curr, function(piece) { return Board.getPieceOneRight(piece); });
    },
    moveTileDownOne: function(curr){
      this.moveTileOne(curr, function(piece) { return Board.getPieceOneDown(piece); });
    },
    moveTiles: function moveTiles(direction, movetile, curr){
      if(curr === undefined)
        curr = Board.getChosen();
      var nextSpace = direction(curr);
      if(nextSpace === undefined)
        return undefined;
      moveTiles(direction, movetile, nextSpace);
      if(nextSpace.dom.classList.contains("empty")){
        movetile(curr);
        curr.dom.classList.add("empty");
        nextSpace.dom.classList.remove("empty");
      }
    },
    moveTilesRight: function(){
      var that = this;
      var direction = function(piece) { return Board.getPieceOneRight(piece); };
      var movetile =  function(piece) { return that.moveTileRightOne(piece); };
      this.moveTiles(direction, movetile);
    }
  };
})();
