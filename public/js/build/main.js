var Piece={pieces:[],getPieces:function(){if(this.pieces.length)return this.pieces;for(var e=document.getElementsByClassName("piece"),t=0;t<e.length;t++)this.pieces.push(this.newPiece(e[t]));return this.pieces},pieceSide:{top:void 0,left:void 0},getPieceSize:function(e){if(void 0!==this.pieceSide[e])return this.pieceSide[e];for(var t=0,i=this.getPieces(),n=0;n<i.length-1;n++)if(t=Math.abs(i[n][e]-i[n+1][e]),t>0)return this.pieceSide[e]=t,this.pieceSide[e];return 0},getPieceHeight:function(){return this.getPieceSize("top")},getPieceWidth:function(){return this.getPieceSize("left")},newPiece:function(e){var t,i={};return i.dom=e,t=e.getBoundingClientRect(),i.top=t.top,i.left=t.left,i.right=t.right,i.bottom=t.bottom,i}},Board={getChosen:function(){return Piece.newPiece(document.getElementsByClassName("chosen")[0])},getEmpty:function(){return Piece.newPiece(document.getElementsByClassName("empty")[0])},getSideBoundary:function(e,t){for(var i=Piece.getPieces(),n=i[0][e],o=0;o<i.length;o++)t(n,i[o][e])&&(n=i[o][e]);return n},getTopBoundary:function(){this.getSideBoundary("top",function(e,t){return e<t})},getBottomBoundary:function(){this.getSideBoundary("bottom",function(e,t){return e>t})},getLeftBoundary:function(){this.getSideBoundary("left",function(e,t){return e<t})},getRightBoundary:function(){this.getSideBoundar("right",function(e,t){return e>t})},getPieceOneUp:function(e){var t=.05*Piece.getPieceHeight(),i=e.left+t,n=e.top-(Piece.getPieceHeight()-t);return Piece.newPiece(document.elementFromPoint(i,n))},getPieceOneDown:function(e){var t=.05*Piece.getPieceHeight(),i=e.left+t,n=e.top+(Piece.getPieceHeight()-t);return Piece.newPiece(document.elementFromPoint(i,n))},getPieceOneLeft:function(e){var t=.05*Piece.getPieceHeight(),i=e.left+t,n=e.top+(Piece.getPieceHeight()-t);return Piece.newPiece(document.elementFromPoint(i,n))},getPieceOneRight:function(e){var t=.05*Piece.getPieceHeight(),i=e.left+t,n=e.top+(Piece.getPieceHeight()-t);return Piece.newPiece(document.elementFromPoint(i,n))}},Helpers={fail:function(e){console.error("%c FAIL "+e,"color: red"),alert("FAIL "+e)},pass:function(e){console.log("%c PASS "+e,"color: blue")},expect:function(e,t){t?this.pass(e):this.fail(e)}},RunTests=function(e){console.clear();for(var t in e)e[t](t.toString())},TestPiece={test_getChosen:function(e){var t=Board.getChosen();Helpers.expect(e,void 0!==t)},test_getEmpty:function(e){var t=Board.getEmpty();Helpers.expect(e,void 0!==t)},test_newPiece:function(e){var t=document.getElementsByClassName("chosen")[0],i=Piece.newPiece(t);Helpers.expect(e+" has top",void 0!==i.top),Helpers.expect(e+" has left",void 0!==i.left),Helpers.expect(e+" has right",void 0!==i.right),Helpers.expect(e+" has bottom",void 0!==i.bottom)},test_getPieceHeight:function(e){var t=Piece.getPieceHeight();Helpers.expect(e+" height is defined",void 0!==t),Helpers.expect(e+" height is greater than 0",t>0)},test_getPieceWidth:function(e){var t=Piece.getPieceWidth();Helpers.expect(e+" width is defined",void 0!==t),Helpers.expect(e+" width is greater than 0",t>0)},test_getPieceOneUp:function(e){var t=Board.getChosen(),i=Board.getPieceOneUp(t);Helpers.expect(e+" piece is defined",void 0!==i),Helpers.expect(e+" oneUp should be one piece size up from chosen",t.top-Piece.getPieceHeight()==i.top),Helpers.expect(e+" oneUp should be same column as chosen",t.left==i.left&&t.right==i.right)}},TestBoard={test_getTopBoundarygetBottomBoundary:function(e){var t=Board.getTopBoundary(),i=Board.getBottomBoundary();Helpers.expect(e+" difference should be equal to piece height 4x",Math.abs(t-i)==4*Piece.getPieceHeight())}};