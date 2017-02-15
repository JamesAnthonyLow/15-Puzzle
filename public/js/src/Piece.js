function Piece(domObj){
  if(domObj === null)
    return undefined;
  var pos = function(){
    return domObj.getBoundingClientRect();
  };
  return {
    dom: domObj,
    top: pos().top,
    left: pos().left,
    right: pos().right,
    bottom: pos().bottom,
    center: { 
      x: (pos().right + pos().left)/2.0, 
      y: (pos().bottom + pos().top)/2.0
    }
  }
}
