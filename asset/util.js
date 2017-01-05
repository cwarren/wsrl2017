Game.util = {
  init2DArray: function(xSize,ySize,initVal) {
    var a = [];
    for (var x=0; x<xSize; x++) {
      a[x] = [];
      for (var y=0; y<ySize; y++) {
          a[x][y] = initVal;
      }
    }
    return a;
  }
};