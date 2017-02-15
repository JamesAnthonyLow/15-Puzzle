var TestBoard = {
  test_getTopBoundarygetBottomBoundary: function(name){
    var top = Board.getTopBoundary();
    var bottom = Board.getBottomBoundary();
    Helpers.expect(name + " difference should be equal to piece height 4x",
      Math.abs(top - bottom) == Piece.getPieceHeight()*4);
  }
};
