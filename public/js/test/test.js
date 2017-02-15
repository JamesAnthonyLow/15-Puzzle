function RunTests(){
  //helpers
  var fail = function(message){
    console.error("%c FAIL " + message, "color: red");
    alert("FAIL " + message);
  };
  var pass = function(message){
    console.log("%c PASS " + message, "color: blue");
  };
  var expect = function(message, bool){
    if(bool)
      pass(message);
    else
      fail(message);
  };

  var Tests = {
    test_getChosen: function(name){
      var chosen = getChosen();
      expect(name, chosen !== undefined);
    },
    test_getEmpty: function(name){
      var empty = getEmpty();
      expect(name, empty !== undefined);
    },
    test_newPiece: function(name){
      var chosen = document.getElementsByClassName("chosen")[0];
      var piece = newPiece(chosen);
      expect(name + " has top",    piece.top    !== undefined);
      expect(name + " has left",   piece.left   !== undefined);
      expect(name + " has right",  piece.right  !== undefined);
      expect(name + " has bottom", piece.bottom !== undefined);
    },
    test_getPieceHeight: function(name){
      var height = getPieceHeight();
      expect(name + " height is defined", height !== undefined);
      expect(name + " height is greater than 0", height > 0);
    },
    test_getPieceWidth: function(name){
      var width = getPieceWidth();
      expect(name + " width is defined", width !== undefined);
      expect(name + " width is greater than 0", width > 0);
    }
  };

  //run each test
  console.clear();
  for (var key in Tests) 
    Tests[key](key.toString());
}

