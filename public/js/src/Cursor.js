var Cursor = (function(){
  return {
    moveCursorOneUp: function(){
      var chosen = Board.getChosen();
      var oneUp = Board.getPieceOneUp(chosen);
      if(oneUp === undefined)
        return;
      chosen.dom.classList.remove("chosen");
      oneUp.dom.classList.add("chosen");
    }
  };
})();
