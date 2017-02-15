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
  test_getPieceByNumber: function(name){
    var piece = Board.getPieceByNumber(3);
    Helpers.expect(name, piece !== undefined);
  },
  test_getRandomPieceNearEmpty: function(name){
    var piece = Board.getRandomPieceNearEmpty();
    Helpers.expect(name, piece !== undefined);
  },
  test_getEmpty: function(name){
    var empty = Board.getEmpty();
    Helpers.expect(name, empty !== undefined);
  },
  test_getTopBoundarygetBottomBoundary: function(name){
    var top = Board.getTopBoundary();
    var bottom = Board.getBottomBoundary();
    Helpers.expect(name + " top < bottom", top < bottom);
  },
  test_get_LeftBoundaryget_RightBoundary: function(name){
    var left = Board.getLeftBoundary();
    var right = Board.getRightBoundary();
    Helpers.expect(name + " left < right", left < right);
  },
  test_getPieceOneUp: function(name){
    var chosen = Board.getChosen();
    var oneUp  = Board.getPieceOneUp(chosen);
    if(Board.exceedsTopBoundary(chosen)){
      Helpers.expect(name + "piece is undefined if next piece up exceeds TopBoundary", 
        oneUp === undefined);
    } else {
      Helpers.expect(name + " piece is defined", 
        oneUp !== undefined);
      Helpers.expect(name + " oneUp should be one piece size up from chosen",
        (chosen.top - Board.getPieceHeight()) == oneUp.top);
      Helpers.expect(name + " oneUp should be same column as chosen",
        chosen.left == oneUp.left && chosen.right == oneUp.right);
    }
  },
  test_getPieceOneDown: function(name){
    var chosen = Board.getChosen();
    var oneDown  = Board.getPieceOneDown(chosen);
    if(Board.exceedsBottomBoundary(chosen)){
      Helpers.expect(name + "piece is undefined if next piece down exceeds BottomBoundary", 
        oneDown === undefined);
    } else {
      Helpers.expect(name + " piece is defined", 
        oneDown !== undefined);
      Helpers.expect(name + " oneDown should be one piece size down from chosen",
        (chosen.bottom + Board.getPieceHeight()) == oneDown.bottom);
      Helpers.expect(name + " oneDown should be same column as chosen",
        chosen.left == oneDown.left && chosen.right == oneDown.right);
    }
  },
  test_getPieceOneLeft: function(name){
    var chosen = Board.getChosen();
    var oneLeft  = Board.getPieceOneLeft(chosen);
    if(Board.exceedsLeftBoundary(chosen)){
      Helpers.expect(name + "piece is undefined if next piece left exceeds BottomBoundary", 
        oneLeft === undefined);
    } else {
      Helpers.expect(name + " piece is defined", 
        oneLeft !== undefined);
      Helpers.expect(name + " oneLeft should be one piece size left from chosen",
        (chosen.left - Board.getPieceWidth()) == oneLeft.left);
      Helpers.expect(name + " oneLeft should be same row as chosen",
        chosen.top == oneLeft.top && chosen.bottom == oneLeft.bottom);
    }
  },
  test_getPieceOneRight: function(name){
    var chosen = Board.getChosen();
    var oneRight  = Board.getPieceOneRight(chosen);
    if(Board.exceedsRightBoundary(chosen)){
      Helpers.expect(name + "piece is undefined if next piece right exceeds BottomBoundary", 
        oneRight === undefined);
    } else {
      Helpers.expect(name + " piece is defined", 
        oneRight !== undefined);
      Helpers.expect(name + " oneRight should be one piece size right from chosen",
        (chosen.right + Board.getPieceWidth()) == oneRight.right);
      Helpers.expect(name + " oneRight should be same row as chosen",
        chosen.top == oneRight.top && chosen.bottom == oneRight.bottom);
    }
  }
};
