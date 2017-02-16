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
