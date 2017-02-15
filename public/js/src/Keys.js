var Keys = (function(){
  var spacebarPressed = false;
  return {
    listen: function(){
      window.onkeyup = function(e){
        if(e.keyCode == 32){
          e.preventDefault();
          spacebarPressed = false;
        }
      };
      window.onkeydown = function(e){
        var movecursor, movetiles, hit = false;
        var arrowkey = function(e, mvcursor, mvtiles){
          e.preventDefault();
          if(spacebarPressed)
            mvtiles();
          mvcursor();
        };
        switch(e.keyCode){
          case 32:
            e.preventDefault();
            spacebarPressed = true;
            break;
          case 37:
            movecursor = function(){ Cursor.moveCursorOneLeft(); };
            movetiles = function(){ Cursor.moveTilesLeft(); };
            hit = true;
            break;
          case 38:
            movecursor = function(){ Cursor.moveCursorOneUp(); };
            movetiles = function(){ Cursor.moveTilesUp(); };
            hit = true;
            break;
          case 39:
            movecursor = function(){ Cursor.moveCursorOneRight(); };
            movetiles = function(){ Cursor.moveTilesRight(); };
            hit = true;
            break;
          case 40:
            movecursor = function(){ Cursor.moveCursorOneDown(); };
            movetiles = function(){ Cursor.moveTilesDown(); };
            hit = true;
            break;
        }
        if(hit){
          arrowkey(e, movecursor, movetiles);
        }
      };
    }
  };
})();
