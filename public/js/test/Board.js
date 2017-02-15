var TestBoard = {
  test_getPieceHeight: function(name){
    var height = Board.getPieceHeight();
    Helpers.expect(name + " height is defined", height !== undefined);
    Helpers.expect(name + " height is greater than 0", height > 0);
  },
  test_getBoardWidth: function(name){
    var width = Board.getPieceWidth();
    Helpers.expect(name + " width is defined", width !== undefined);
    Helpers.expect(name + " width is greater than 0", width > 0);
  },
  test_getChosen: function(name){
    var chosen = Board.getChosen();
    Helpers.expect(name, chosen !== undefined);
  },
  test_getEmpty: function(name){
    var empty = Board.getEmpty();
    Helpers.expect(name, empty !== undefined);
  },
  test_getTopBoundarygetBottomBoundary: function(name){
    var top = Board.getTopBoundary();
    var bottom = Board.getBottomBoundary();
    Helpers.expect(name + " top greater than 0", top > 0);
    Helpers.expect(name + " bottom greater than 0", bottom > 0);
    Helpers.expect(name + " top < bottom", top < bottom);
  },
  test_get_LeftBoundaryget_RightBoundary: function(name){
    var left = Board.getLeftBoundary();
    var right = Board.getRightBoundary();
    Helpers.expect(name + " left greater than 0", left > 0);
    Helpers.expect(name + " right greater than 0", right > 0);
    Helpers.expect(name + " left < right", left < right);
  },
  test_getPieceOneUp: function(name){
    var chosen = Board.getChosen();
    var oneUp  = Board.getPieceOneUp(chosen);
    Helpers.expect(name + " piece is defined", 
      oneUp !== undefined);
    Helpers.expect(name + " oneUp should be one piece size up from chosen",
      (chosen.top - Board.getPieceHeight()) == oneUp.top);
    Helpers.expect(name + " oneUp should be same column as chosen",
      chosen.left == oneUp.left && chosen.right == oneUp.right);
  },
  //test_getPieceOneDown: function(name){
  //  var chosen = Piece.getChosen();
  //  var oneDown  = Piece.getPieceOneDown(chosen);
  //  Helpers.expect(name + " piece is defined", 
  //    oneDown !== undefined);
  //  Helpers.expect(name + " oneDown should be one piece size down from chosen",
  //    (chosen.top - Piece.getPieceHeight()) == oneDown.top);
  //  Helpers.expect(name + " oneDown should be same column as chosen",
  //    chosen.left == oneDown.left && chosen.right == oneDown.right);
  //},
  //test_getPieceOneLeft: function(name){
  //  var chosen = Piece.getChosen();
  //  var oneLeft  = Piece.getPieceOneLeft(chosen);
  //  Helpers.expect(name + " piece is defined", 
  //    oneLeft !== undefined);
  //  Helpers.expect(name + " oneLeft should be one piece size up from chosen",
  //    (chosen.top - Piece.getPieceHeight()) == oneLeft.top);
  //  Helpers.expect(name + " oneLeft should be same column as chosen",
  //    chosen.left == oneLeft.left && chosen.right == oneLeft.right);
  //},
  //test_getPieceOneRight: function(name){
  //  var chosen = Piece.getChosen();
  //  var oneRight  = Piece.getPieceOneRight(chosen);
  //  Helpers.expect(name + " piece is defined", 
  //    oneRight !== undefined);
  //  Helpers.expect(name + " oneRight should be one piece size up from chosen",
  //    (chosen.top - Piece.getPieceHeight()) == oneRight.top);
  //  Helpers.expect(name + " oneRight should be same column as chosen",
  //    chosen.left == oneRight.left && chosen.right == oneRight.right);
  //},

};
