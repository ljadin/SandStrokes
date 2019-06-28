'use strict';

var sketch = function(p) {
  
  var sweeps = [];
  var tests = [];
  var dim = 1000;
  var k = 7;
  var num = 0;

  var maxnum = k+1;
  var time;

  p.setup = function() {
    p.createCanvas(1000, 1000);
    
    p.colorMode(myp5.RGB, 255);
    p.background(255);
    //p.rect(0, 0, p.width, p.height);
    
    var g = myp5.int(dim/k);
    
    for (var y=0;y<k;y++) {
      sweeps[y] = new Sweep(0, myp5.random(dim),g*2);
  }

  };
  
  p.draw = function() {
    //time++;
    //p.noStroke();

    for (var y=0;y<k;y++) {
      sweeps[y].render();
    }
  };
  

  p.keyReleased = function() {
    if (p.key == 's' || p.key == 'S') p.saveCanvas('sweep1', 'png');

    if (p.key == ' ') {
      var new_noise_seed = p.floor(p.random(10000));
      console.log('newNoiseSeed', new_noise_seed);
      p.noiseSeed(new_noise_seed);
    }
    if (p.keyCode == p.DELETE || p.keyCode == p.BACKSPACE) p.background(255);
  };

};

var myp5 = new p5(sketch);
