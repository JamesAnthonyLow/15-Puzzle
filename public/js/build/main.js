function Piece(e){if(null!==e){var t=function(){return e.getBoundingClientRect()};return{dom:e,top:t().top,left:t().left,right:t().right,bottom:t().bottom,center:{x:(t().right+t().left)/2,y:(t().bottom+t().top)/2}}}}var Board=function(){var e=[];return{getPieces:function(){if(e.length)return e;for(var t=document.getElementsByClassName("piece"),n=0;n<t.length;n++)e.push(Piece(t[n]));return e},getChosen:function(){return Piece(document.getElementsByClassName("chosen")[0])},getRandomPieceNearEmpty:function(){var e,t,n,o=function(e){return Math.floor(Math.random()*e)};switch(t=this.getEmpty(),e=this.getPieceOneUp(t),o(2)){case 1:if(e){for(n=0;n<o(3);n++)e=this.getPieceOneUp(t);return e}if(e){for(n=0;n<o(3);n++)e=this.getPieceOneDown(t);return e}if(e){for(n=0;n<o(3);n++)e=this.getPieceOneLeft(t);return e}if(e){for(n=0;n<o(3);n++)e=this.getPieceOneRight(t);return e}break;case 2:if(e){for(n=0;n<o(3);n++)e=this.getPieceOneLeft(t);return e}if(e){for(n=0;n<o(3);n++)e=this.getPieceOneRight(t);return e}if(e){for(n=0;n<o(3);n++)e=this.getPieceOneUp(t);return e}if(e){for(n=0;n<o(3);n++)e=this.getPieceOneDown(t);return e}}return e},getPieceByNumber:function(e){for(var t=this.getPieces(),n=0;n<t.length;n++)if(t[n].dom.innerHTML==e)return t[n];return t[0]},getEmpty:function(){return Piece(document.getElementsByClassName("empty")[0])},pieceSide:{top:void 0,left:void 0},getPieceSize:function(e){if(void 0!==this.pieceSide[e])return this.pieceSide[e];for(var t=0,n=this.getPieces(),o=0;o<n.length-1;o++)if(t=Math.abs(n[o][e]-n[o+1][e]),t>0)return this.pieceSide[e]=t,this.pieceSide[e];return 0},getPieceHeight:function(){return this.getPieceSize("top")},getPieceWidth:function(){return this.getPieceSize("left")},getSideBoundary:function(e,t){for(var n=this.getPieces(),o=n[0][e],i=0;i<n.length;i++)t(o,n[i][e])&&(o=n[i][e]);return o},getTopBoundary:function(){return this.getSideBoundary("top",function(e,t){return e>t})},getBottomBoundary:function(){return this.getSideBoundary("bottom",function(e,t){return e<t})},getLeftBoundary:function(){return this.getSideBoundary("left",function(e,t){return e>t})},getRightBoundary:function(){return this.getSideBoundary("right",function(e,t){return e<t})},exceedsTopBoundary:function(e){return e.top<=this.getTopBoundary()},exceedsBottomBoundary:function(e){return e.bottom>=this.getBottomBoundary()},exceedsLeftBoundary:function(e){return e.left==this.getLeftBoundary()},exceedsRightBoundary:function(e){return e.right==this.getRightBoundary()},getPieceOneUp:function(e){if(!this.exceedsTopBoundary(e)){var t=e.center.x,n=e.center.y-Board.getPieceHeight();return Piece(document.elementFromPoint(t,n))}},getPieceOneDown:function(e){if(!this.exceedsBottomBoundary(e)){var t=e.center.x,n=e.center.y+Board.getPieceHeight();return Piece(document.elementFromPoint(t,n))}},getPieceOneLeft:function(e){if(!this.exceedsLeftBoundary(e)){var t=e.center.x-Board.getPieceWidth(),n=e.center.y;return Piece(document.elementFromPoint(t,n))}},getPieceOneRight:function(e){if(!this.exceedsRightBoundary(e)){var t=e.center.x+Board.getPieceWidth(),n=e.center.y;return Piece(document.elementFromPoint(t,n))}}}}(),Cursor=function(){return{moveOneSpace:function(e){var t=Board.getChosen(),n=e(t);void 0!==n&&(t.dom.classList.remove("chosen"),n.dom.classList.add("chosen"))},moveCursorOneUp:function(){this.moveOneSpace(function(e){return Board.getPieceOneUp(e)})},moveCursorOneLeft:function(){this.moveOneSpace(function(e){return Board.getPieceOneLeft(e)})},moveCursorOneRight:function(){this.moveOneSpace(function(e){return Board.getPieceOneRight(e)})},moveCursorOneDown:function(){this.moveOneSpace(function(e){return Board.getPieceOneDown(e)})},moveTileOne:function(e,t){var n,o=t(e);void 0!==o&&(n=e.dom.innerHTML,e.dom.innerHTML=o.dom.innerHTML,o.dom.innerHTML=n)},moveTileUpOne:function(e){this.moveTileOne(e,function(e){return Board.getPieceOneUp(e)})},moveTileLeftOne:function(e){this.moveTileOne(e,function(e){return Board.getPieceOneLeft(e)})},moveTileRightOne:function(e){this.moveTileOne(e,function(e){return Board.getPieceOneRight(e)})},moveTileDownOne:function(e){this.moveTileOne(e,function(e){return Board.getPieceOneDown(e)})},moveTiles:function e(t,n,o){if(void 0!==o||(o=Board.getChosen(),!o.dom.classList.contains("empty"))){var i=t(o);if(void 0!==i)return e(t,n,i),i.dom.classList.contains("empty")?(n(o),o.dom.classList.add("empty"),i.dom.classList.remove("empty"),o):void 0}},moveTilesRight:function(){var e=this,t=function(e){return Board.getPieceOneRight(e)},n=function(t){return e.moveTileRightOne(t)};this.moveTiles(t,n)},moveTilesLeft:function(){var e=this,t=function(e){return Board.getPieceOneLeft(e)},n=function(t){return e.moveTileLeftOne(t)};this.moveTiles(t,n)},moveTilesUp:function(){var e=this,t=function(e){return Board.getPieceOneUp(e)},n=function(t){return e.moveTileUpOne(t)};this.moveTiles(t,n)},moveTilesDown:function(){var e=this,t=function(e){return Board.getPieceOneDown(e)},n=function(t){return e.moveTileDownOne(t)};this.moveTiles(t,n)},makeChosen:function(e){if(void 0!==e){var t=Board.getChosen();t.dom.classList.remove("chosen"),e.dom.classList.add("chosen")}},moveTilesRandomly:function(){var e,t,n,o=function(e){return Math.floor(Math.random()*e)};t=o(1e3);for(var i=0;i<t;i++)for(var r=0;r<10;r++)n=Board.getRandomPieceNearEmpty(),this.makeChosen(n),e=this.moveTilesUp(),void 0===e&&(e=this.moveTilesDown(),void 0===e&&(e=this.moveTilesLeft(),void 0===e&&(e=this.moveTilesRight(),void 0===e&&this.makeChosen(Board.getPieceByNumber(o(15))))))}}}(),Keys=function(){var e=!1;return{listen:function(){window.onkeyup=function(t){32==t.keyCode&&(t.preventDefault(),e=!1)},window.onkeydown=function(t){var n,o,i=!1,r=function(t,n,o){t.preventDefault(),e&&o(),n()};switch(t.keyCode){case 32:t.preventDefault(),e=!0;break;case 37:n=function(){Cursor.moveCursorOneLeft()},o=function(){Cursor.moveTilesLeft()},i=!0;break;case 38:n=function(){Cursor.moveCursorOneUp()},o=function(){Cursor.moveTilesUp()},i=!0;break;case 39:n=function(){Cursor.moveCursorOneRight()},o=function(){Cursor.moveTilesRight()},i=!0;break;case 40:n=function(){Cursor.moveCursorOneDown()},o=function(){Cursor.moveTilesDown()},i=!0}i&&r(t,n,o)}}}}(),Helpers={fail:function(e){console.error("%c FAIL "+e,"color: red"),alert("FAIL "+e)},pass:function(e){console.log("%c PASS "+e,"color: blue")},expect:function(e,t){t?this.pass(e):this.fail(e)}},RunTests=function(e){console.clear();for(var t in e)e[t](t.toString())},TestBoard={test_getPieceHeight:function(e){var t=Board.getPieceHeight();Helpers.expect(e+" height is defined",void 0!==t),Helpers.expect(e+" height is greater than 0",t>0)},test_getBoardWidth:function(e){var t=Board.getPieceWidth();Helpers.expect(e+" width is defined",void 0!==t),Helpers.expect(e+" width is greater than 0",t>0)},test_getChosen:function(e){var t=Board.getChosen();Helpers.expect(e,void 0!==t)},test_getPieceByNumber:function(e){var t=Board.getPieceByNumber(3);Helpers.expect(e,void 0!==t)},test_getRandomPieceNearEmpty:function(e){var t=Board.getRandomPieceNearEmpty();Helpers.expect(e,void 0!==t)},test_getEmpty:function(e){var t=Board.getEmpty();Helpers.expect(e,void 0!==t)},test_getTopBoundarygetBottomBoundary:function(e){var t=Board.getTopBoundary(),n=Board.getBottomBoundary();Helpers.expect(e+" top < bottom",t<n)},test_get_LeftBoundaryget_RightBoundary:function(e){var t=Board.getLeftBoundary(),n=Board.getRightBoundary();Helpers.expect(e+" left < right",t<n)},test_getPieceOneUp:function(e){var t=Board.getChosen(),n=Board.getPieceOneUp(t);Board.exceedsTopBoundary(t)?Helpers.expect(e+"piece is undefined if next piece up exceeds TopBoundary",void 0===n):(Helpers.expect(e+" piece is defined",void 0!==n),Helpers.expect(e+" oneUp should be one piece size up from chosen",t.top-Board.getPieceHeight()==n.top),Helpers.expect(e+" oneUp should be same column as chosen",t.left==n.left&&t.right==n.right))},test_getPieceOneDown:function(e){var t=Board.getChosen(),n=Board.getPieceOneDown(t);Board.exceedsBottomBoundary(t)?Helpers.expect(e+"piece is undefined if next piece down exceeds BottomBoundary",void 0===n):(Helpers.expect(e+" piece is defined",void 0!==n),Helpers.expect(e+" oneDown should be one piece size down from chosen",t.bottom+Board.getPieceHeight()==n.bottom),Helpers.expect(e+" oneDown should be same column as chosen",t.left==n.left&&t.right==n.right))},test_getPieceOneLeft:function(e){var t=Board.getChosen(),n=Board.getPieceOneLeft(t);Board.exceedsLeftBoundary(t)?Helpers.expect(e+"piece is undefined if next piece left exceeds BottomBoundary",void 0===n):(Helpers.expect(e+" piece is defined",void 0!==n),Helpers.expect(e+" oneLeft should be one piece size left from chosen",t.left-Board.getPieceWidth()==n.left),Helpers.expect(e+" oneLeft should be same row as chosen",t.top==n.top&&t.bottom==n.bottom))},test_getPieceOneRight:function(e){var t=Board.getChosen(),n=Board.getPieceOneRight(t);Board.exceedsRightBoundary(t)?Helpers.expect(e+"piece is undefined if next piece right exceeds BottomBoundary",void 0===n):(Helpers.expect(e+" piece is defined",void 0!==n),Helpers.expect(e+" oneRight should be one piece size right from chosen",t.right+Board.getPieceWidth()==n.right),Helpers.expect(e+" oneRight should be same row as chosen",t.top==n.top&&t.bottom==n.bottom))}};