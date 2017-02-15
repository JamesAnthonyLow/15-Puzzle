var Helpers  = {
  fail: function(message){
    console.error("%c FAIL " + message, "color: red");
    alert("FAIL " + message);
  },
  pass: function(message){
    console.log("%c PASS " + message, "color: blue");
  },
  expect: function(message, bool){
    if(bool)
      this.pass(message);
    else
      this.fail(message);
  }
};

var RunTests = function(TestObj){
  //run each test
  console.clear();
  for (var key in TestObj) 
    TestObj[key](key.toString());
};

var TestPiece = {
  test_getChosen: function(name){
    var chosen = Piece.getChosen();
    Helpers.expect(name, chosen !== undefined);
  },
  test_getEmpty: function(name){
    var empty = Piece.getEmpty();
    Helpers.expect(name, empty !== undefined);
  },
  test_newPiece: function(name){
    var chosen = document.getElementsByClassName("chosen")[0];
    var piece = Piece.newPiece(chosen);
    Helpers.expect(name + " has top",    piece.top    !== undefined);
    Helpers.expect(name + " has left",   piece.left   !== undefined);
    Helpers.expect(name + " has right",  piece.right  !== undefined);
    Helpers.expect(name + " has bottom", piece.bottom !== undefined);
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
  }
};
