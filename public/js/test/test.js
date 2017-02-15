function RunTests(){
  //helpers
  var fail = function(name){
    console.error("%c FAIL " + name, "color: red");
  };
  var pass = function(name){
    console.log("%c PASS " + name, "color: blue");
  };
  var expect = function(name, bool){
    if(bool)
      pass(name);
    else
      fail(name);
  };

  var Tests = {
    testGetChosen: function(name){
      var chosen = getChosen();
      expect(name, chosen !== undefined);
    },
    testGetEmpty: function(name){
      var empty = getEmpty();
      expect(name, empty !== undefined);
    }
  };

  //run each test
  console.clear();
  for (var key in Tests) 
    Tests[key](key.toString());
}

