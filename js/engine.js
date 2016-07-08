var Engine = (function(global) {
  var doc = global.document,
      win = global.window,
      can = doc.createElement('canvas'),
      ctx = can.getContext('2d'),
      lastTime;

      canvas.width = 504;
      canvas.height = 606;
      doc.body.appendChild(can);

  function main() {
    var now = Date.now(),
        dt = (now - lasTime) / 1000.0;
    update(dt);
    render();
    lastTime = now;
    win.requestAnimationFrame(main);
  }

  function init() {
    reset();
    lastTime = Date.now();
    main();
  }

  function update(dt) {
    updateEntities(dt);
    checkCollisions();
  }

  function checkCollisions() {
    allEnemies.forEach(function(enemy) {
      if(collided(player, enemy)){
        player.y = bounds.bottom;
      }
    });
  }

  function collided(player, entity) {
    var collided = false;
    if(Math.abs(player.x -  entity.x) < collisionTolerance.x){
      if(Math.abs(player.y - entity.y) < collisionTolerance.y){
        collided =  true;
      }
    }
    return collided;
  }

  function updateEntities() {
    allEnemies.forEach(function(enemy){
      enemy.update(dt);
    });
    player.update();
  }

  function render() {
    var rowImages = [
      'images/water-block.png',
      'images/stone-block.png',
      'images/stone-block.png',
      'images/stone-block.png',
      'images/grass-block.png',
      'images/grass-block.png',
    ],
    rows = numRows,
    cols = numCols,
    row, col ;

    for (row = 0 ; row < rows ; row++) {
      for (col = 0 ; col < cols ; col++){
        ctx.drawImage(rowImages[row], cols * colWidth, rows * rowHeight);
      }
    }

    renderEntities();
  }

  function renderEntities(){
    allEnemies.forEach(function(enemy){
      enemy.render();
    });
    player.render();
  }

  function reset(){

  }

  Resources.onReady(init);

  global.ctx = ctx;

})(this);
