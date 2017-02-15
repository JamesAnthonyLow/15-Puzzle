var Keys = (function(){
  var spacebarPressed = false;
  return {
    listen: function(){
      var movecursor, hit = false;
      var arrowkey = function(e, mvcursor){
        e.preventDefault();
        mvcursor();
      };
      window.onkeyup = function(e){
        if(e.keyCode == 32){
          e.preventDefault();
          spacebarPressed = false;
        }
      };
      window.onkeydown = function(e){
        switch(e.keyCode){
          case 32:
            e.preventDefault();
            spacebarPressed = true;
            break;
          case 37:
            movecursor = function(){ Cursor.moveCursorOneLeft(); };
            hit = true;
            break;
          case 38:
            movecursor = function(){ Cursor.moveCursorOneUp(); };
            hit = true;
            break;
          case 39:
            movecursor = function(){ Cursor.moveCursorOneRight(); };
            hit = true;
            break;
          case 40:
            movecursor = function(){ Cursor.moveCursorOneDown(); };
            hit = true;
            break;
        }
        if(hit)
          arrowkey(e, movecursor);
      };
    }
  };
})();
