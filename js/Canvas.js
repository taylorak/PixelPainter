var Canvas = function(container, opts) {
  var cellWidth = opts.width || settings.width;
  var cellHeight = opts.height || settings.width;
  var cellSize = opts.size || settings.gridSize;

  var cellColors = opts.colorSwatch || settings.colorSwatch;
  var cellColorSize = opts.colorSize || settings.colorSize;

  var currColor = '#000000'
  var canvas = null;
  var colorSwatch = null;
  var otherButtons = null;

  var drawGrid = function() {
    canvas = document.createElement('div');
    canvas.id = 'canvas'
    for(var i = 0; i < cellWidth; i++) {
      var row = document.createElement('div');
      row.className = 'row';
      row.style.width = cellSize * cellWidth + 1 + cellWidth;
      for(var j = 0; j < cellHeight; j++) {
        var cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.width =  cellSize;
        cell.style.height = cellSize;
        row.appendChild(cell);
      }
      canvas.appendChild(row);
    }
    container.appendChild(canvas)
  }

  var drawColorSwatch = function() {
    colorSwatch = document.createElement('div');
    colorSwatch.id = 'colorSwatch';
    colorSwatch.style.width = cellSize * cellWidth + 1 + cellWidth;



    var leftArrow = document.createElement('div');
    var rightArrow = document.createElement('div');
    leftArrow.id = 'leftArrow';
    leftArrow.className = 'arrow';
    leftArrow.innerHTML = '<';
    leftArrow.style.height = cellColorSize;

    rightArrow.id = 'rightArrow';
    leftArrow.className = 'arrow';
    rightArrow.innerHTML = '>';
    rightArrow.style.height = cellColorSize;

    colorSwatch.appendChild(leftArrow);
    colorSwatch.appendChild(rightArrow);

    for(i = 0; i < cellColors.length; i++) {
      var color = document.createElement('div');
      color.id = cellColors[i];
      color.className = 'colorCell';
      color.style.background = cellColors[i];
      color.style.width = cellColorSize;
      color.style.height = cellColorSize;
      colorSwatch.appendChild(color);
    }
    container.appendChild(colorSwatch);

    var erase = document.create
  }

  var addButtons = function() {
    otherButtons = document.createElement('div');
    otherButtons.id = 'otherButtons';

    var erase = document.createElement('button');
    var clear = document.createElement('button');
    erase.innerHTML = 'Erase';
    clear.innerHTML = 'Clear';

    erase.id = 'erase';
    clear.id = 'clear';

    erase.className = "ppButton";
    clear.className = "ppButton";

    otherButtons.appendChild(erase);
    otherButtons.appendChild(clear);

    container.appendChild(otherButtons);

  }

  var addEventListeners = function() {
    canvas.addEventListener('click', function(event) {
      if(event.target.classList.contains('cell')) {
        event.target.style.background = currColor
      }
    })

    canvas.addEventListener('dragover', function(event) {
      if(event.target.classList.contains('cell')) {
        event.target.style.background = currColor;
      }
    })

    colorSwatch.addEventListener('click', function(event) {
      if(event.target.classList.contains('colorCell')) {
        currColor = event.target.id;
        event.target.style.className = 'red';
      }
    })

    erase.addEventListener('click', function(event) {
      currColor = '#FFFFFF';
    })

    clear.addEventListener('click', function(event) {
      var canvasCells = canvas.getElementsByClassName('cell');
      for(var i = 0; i < canvasCells.length; i++) {
        canvasCells[i].style.background = '#FFFFFF'
      }
    })

  }

  return {
    drawGrid : drawGrid,
    drawColorSwatch : drawColorSwatch,
    addButtons : addButtons,
    addEventListeners : addEventListeners,
  }
}