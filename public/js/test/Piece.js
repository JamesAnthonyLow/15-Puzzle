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
 };
