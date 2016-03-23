var pp = function(containerId) {

  var container = document.querySelector(containerId);

  var pixelPainter = function(opts) {
    var canvas = Canvas(container, opts);
    canvas.drawColorSwatch()
    canvas.drawGrid();
    canvas.addButtons();
    canvas.addEventListeners();

  }

  return {
    pixelPainter : pixelPainter
  }
}

pp('#pixelPainter').pixelPainter({colorSize: 30});

