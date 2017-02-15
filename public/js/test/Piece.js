var TestPiece = {
  test_getChosen: function(name){
    var chosen = Board.getChosen();
    Helpers.expect(name, chosen !== undefined);
  },
  test_getEmpty: function(name){
    var empty = Board.getEmpty();
    Helpers.expect(name, empty !== undefined);
  },
  test_getPieceHeight: function(name){
    var height = Piece.getPieceHeight();
    Helpers.expect(name + " height is defined", height !== undefined);
    Helpers.expect(name + " height is greater than 0", height > 0);
  },
  test_getPieceWidth: function(name){
    var width = Piece.getPieceWidth();
    Helpers.expect(name + " width is defined", width !== undefined);
    Helpers.expect(name + " width is greater than 0", width > 0);
  },
  test_getPieceOneUp: function(name){
    var chosen = Board.getChosen();
    var oneUp  = Board.getPieceOneUp(chosen);
    Helpers.expect(name + " piece is defined", 
      oneUp !== undefined);
    Helpers.expect(name + " oneUp should be one piece size up from chosen",
      (chosen.top - Piece.getPieceHeight()) == oneUp.top);
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
