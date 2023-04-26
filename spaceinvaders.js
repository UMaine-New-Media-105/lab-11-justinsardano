var y = A;
function C() {
  var l = [
    "4527590CCxUQw",
    "10722630hHboxN",
    "2984ZrxFpv",
    "33dLavLU",
    "push",
    "2779EzzKgt",
    "6XAQUiW",
    "width",
    "333ytaZns",
    "7422GoHcAY",
    "Space\x20key\x20to\x20shoot",
    "height",
    "101974QrCCQp",
    "forEach",
    "splice",
    "Press\x20space\x20to\x20start",
    "7577072jpYeRr",
    "repeat",
    "Game\x20over!\x20Press\x20space\x20to\x20restart",
    "34776ztJyZb",
  ];
  C = function () {
    return l;
  };
  return C();
}
(function (G, Z) {
  var J = A,
    i = G();
  while (!![]) {
    try {
      var e =
        (parseInt(J(0x141)) / 0x1) * (-parseInt(J(0x13b)) / 0x2) +
        (parseInt(J(0x13d)) / 0x3) * (parseInt(J(0x137)) / 0x4) +
        -parseInt(J(0x135)) / 0x5 +
        (-parseInt(J(0x13e)) / 0x6) * (parseInt(J(0x13a)) / 0x7) +
        -parseInt(J(0x145)) / 0x8 +
        parseInt(J(0x134)) / 0x9 +
        (-parseInt(J(0x136)) / 0xa) * (-parseInt(J(0x138)) / 0xb);
      if (e === Z) break;
      else i["push"](i["shift"]());
    } catch (Y) {
      i["push"](i["shift"]());
    }
  }
})(C, 0x9f9e4);
var canvasSize = { width: 0x258, height: 0x190 },
  player = { x: canvasSize[y(0x13c)] / 0x2, y: canvasSize[y(0x140)] },
  bulletSize = 0x5,
  enemySize = 0x14,
  bullets = [],
  bulletColor = !![],
  level = 0x0,
  enemies = [],
  lastTime = null,
  lives = 0x3,
  isDead = ![],
  isInitial = !![];
function setup() {
  var w = y;
  createCanvas(canvasSize[w(0x13c)], canvasSize[w(0x140)]),
    setFrameRate(0x1e),
    (lastTime = millis()),
    insertEnemy();
}
function draw() {
  var r = y;
  if (isInitial) {
    push(),
      textSize(0x20),
      background(0xdc),
      fill(0x0, 0x66, 0x99),
      text("Xpace\x20Invaders", 0x28, 0x3c),
      fill(0x0, 0x0, 0x0),
      textSize(0x14),
      text("Arrow\x20keys\x20to\x20move", 0x28, 0x64),
      text(r(0x13f), 0x28, 0x78),
      text(r(0x144), 0x28, 0x8c),
      noLoop(),
      pop();
    return;
  }
  update(),
    clear(),
    background(0xdc),
    drawPlayer(),
    drawEnemies(),
    drawBullets(),
    push(),
    fill(color(0xff, 0x0, 0x0)),
    lives
      ? text("❤️"[r(0x146)](lives), 0xa, 0x14)
      : ((isDead = !![]),
        text("💀", 0xa, 0x14),
        fill(0x0, 0x0, 0x0),
        textSize(0x14),
        text(r(0x133), 0x3c, 0x50),
        noLoop()),
    pop();
}
function drawBullets() {
  //creates the visual for the bullets
  push(),
    bulletColor ? fill(color(0xff, 0x0, 0x0)) : fill(color(0xff, 0xff, 0x0)),
    (bulletColor = !bulletColor),
    bullets["forEach"](function (G) {
      square(G["x"], G["y"], bulletSize);
    }),
    pop();
}
// lets the bullets fly when the mouse is pressed
function mousePressed() {
  bullets["push"]({ x: player["x"], y: player["y"] });
}
//lets the bullets fly when the spacebar is pressed
function keyPressed() {
  var L = y,
    G = 0x20;
  if (keyCode == G) {
    if (isInitial) {
      (isInitial = ![]), loop();
      return;
    }
    if (isDead) {
      (isDead = ![]), (enemies = []), (bullets = []), (lives = 0x3), loop();
      return;
    }
    bullets[L(0x139)]({ x: player["x"], y: player["y"] });
  }
}
//draw the visual for the enemies
function drawEnemies() {
  var a = y;
  push(),
    fill(color(0x64, 0x64, 0xff)),
    enemies[a(0x142)](function (G) {
      square(G["x"], G["y"], enemySize);
    }),
    pop();
}
//draw the visual for the player
function drawPlayer() {
  var G = player["x"],
    Z = player["y"],
    i = 0x14,
    e = 0x14;
  rectMode(CENTER),
    push(),
    translate(G, Z),
    rect(0x0, 0x0, i, e),
    fill(0xff, 0x0, 0x0),
    rect(0x0, -i / 0x2, i / 0x4, e / 0x4),
    pop();
}
//make the bullets move
function updateBullets() {
  var h = y;
  bullets[h(0x142)](function (G, Z) {
    (G["y"] -= 0xa), G["y"] < 0x0 && bullets["splice"](Z, 0x1);
  });
}
//make the enemies spawn at random
function insertEnemy() {
  var s = y;
  enemies[s(0x139)]({ x: random(0x0, canvasSize[s(0x13c)]), y: 0x0 });
}
//make the enemies move, and if hit then disappear when hit by bullets
function updateEnemies() {
  var o = y,
    G = millis();
  G - lastTime > 0x7d0 && ((lastTime = G), insertEnemy());
  var Z = max(0x1, max(floor(lastTime / 0x2710), 0xa));
  enemies[o(0x142)](function (i, e) {
    var B = o;
    (i["y"] += 0x1 * Z),
      bullets[B(0x142)](function (Y, m) {
        var f = B,
          N = rectCollision(
            i["x"],
            i["y"],
            enemySize,
            enemySize,
            Y["x"],
            Y["y"],
            bulletSize,
            bulletSize
          );
        N && (enemies["splice"](e, 0x1), bullets[f(0x143)](m, 0x1));
      }),
      i["y"] > canvasSize["height"] &&
        (enemies[B(0x143)](e, 0x1), (lives = max(0x0, lives - 0x1)));
  });
}
// make the sprite move when pressing the keys
function update() {
  var H = y;
  updateEnemies(), updateBullets();
  var G = 0xc;
  keyIsDown(DOWN_ARROW) &&
    (player["y"] = min(canvasSize[H(0x140)], player["y"] + G)),
    keyIsDown(UP_ARROW) &&
      (player["y"] = max(canvasSize[H(0x140)] * 0.75, player["y"] - G)),
    keyIsDown(LEFT_ARROW) && (player["x"] = max(0x0, player["x"] - G)),
    keyIsDown(RIGHT_ARROW) &&
      (player["x"] = min(canvasSize[H(0x13c)], player["x"] + G));
}
function A(G, Z) {
  var i = C();
  return (
    (A = function (e, Y) {
      e = e - 0x133;
      var m = i[e];
      return m;
    }),
    A(G, Z)
  );
}
//make the collision 
function rectCollision(G, Z, i, e, Y, m, N, D) {
  if (G + i >= Y && G <= Y + N && Z + e >= m && Z <= m + D) return !![];
  return ![];
}
