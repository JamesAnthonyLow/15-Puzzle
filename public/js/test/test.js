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
    test_getPosition: function(name){
      var chosen = getChosen();
      var pos = getPosition(chosen);
      expect(name + " returns obj", 
        pos !== undefined);
      if(pos === undefined)
        return;
      expect(name + " obj has top element", 
        pos.top !== undefined);
      expect(name + " obj has left element", 
        pos.left !== undefined);
      expect(name + " obj has right element", 
        pos.right !== undefined);
      expect(name + " obj has bottom element", 
        pos.bottom !== undefined);
    }
  };

  //run each test
  console.clear();
  for (var key in Tests) 
    Tests[key](key.toString());
}

