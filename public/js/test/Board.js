var TestBoard = {
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
  }
};
