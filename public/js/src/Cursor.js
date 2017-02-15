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
      if(curr === undefined){
        curr = Board.getChosen();
        if(curr.dom.classList.contains("empty"))
          return undefined;
      }
      var nextSpace = direction(curr);
      if(nextSpace === undefined)
        return undefined;
      moveTiles(direction, movetile, nextSpace);
      if(nextSpace.dom.classList.contains("empty")){
        movetile(curr);
        curr.dom.classList.add("empty");
        nextSpace.dom.classList.remove("empty");
        return curr;
      }
    },
    moveTilesRight: function(){
      var that = this;
      var direction = function(piece) { return Board.getPieceOneRight(piece); };
      var movetile =  function(piece) { return that.moveTileRightOne(piece); };
      this.moveTiles(direction, movetile);
    },
    moveTilesLeft: function(){
      var that = this;
      var direction = function(piece) { return Board.getPieceOneLeft(piece); };
      var movetile =  function(piece) { return that.moveTileLeftOne(piece); };
      this.moveTiles(direction, movetile);
    },
    moveTilesUp: function(){
      var that = this;
      var direction = function(piece) { return Board.getPieceOneUp(piece); };
      var movetile =  function(piece) { return that.moveTileUpOne(piece); };
      this.moveTiles(direction, movetile);
    },
    moveTilesDown: function(){
      var that = this;
      var direction = function(piece) { return Board.getPieceOneDown(piece); };
      var movetile =  function(piece) { return that.moveTileDownOne(piece); };
      this.moveTiles(direction, movetile);
    },
    makeChosen: function(piece){
      if(piece === undefined)
        return;
      var chosen = Board.getChosen();
      chosen.dom.classList.remove("chosen");
      piece.dom.classList.add("chosen");
    },
    moveTilesRandomly: function(){
      var empty, result, howManyMoves, randomPiece;
      howManyMoves = Randomizer.getRandom(100);
      for(var j=0; j<howManyMoves; j++)
        for(var i=0; i<10; i++){
          randomPiece = Randomizer.getRandomPieceNearEmpty();
          this.makeChosen(randomPiece);
          result = this.moveTilesUp();
          if(result !== undefined)
            continue;
          result = this.moveTilesDown();
          if(result !== undefined)
            continue;
          result = this.moveTilesLeft();
          if(result !== undefined)
            continue;
          result = this.moveTilesRight();
          if(result !== undefined)
            continue;
          this.makeChosen(Board.getPieceByNumber(Randomizer.getRandom(15)));
        }
    }
  };
})();
