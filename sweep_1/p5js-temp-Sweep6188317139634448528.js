var Sweep = function(x, y, gage) {
  this.x = x;
  this.y = y;
  this.gage = gage;
  this.col = myp5.random(50, 200);
  this.sg = myp5.random(0.01, 0.1);
  this.vx = 1.0;
  
};

Sweep.prototype.display = function(tpoint_x, tpoint_y, tpoint_col, tpoint_alpha) {
    myp5.stroke(tpoint_col, tpoint_alpha);
    myp5.point(tpoint_x, tpoint_y);
    
}

Sweep.prototype.render = function(){
  this.x += this.vx;
  var wd = 200;
  var w = this.sg/wd;
  
  if (this.x < myp5.width) {
    this.display(this.x, this.y, this.col, 50);
    this.sg += myp5.random(-0.042, 0.042);
    
    if (this.sg<-0.3) {
      this.sg=-0.3;
    } else if (this.sg>0.3) {
      this.sg=0.3;
    } 
    
    for (var i = 0 ; i < wd; i++) {
      this.display(this.x, this.y + (this.gage * myp5.sin(i*w)), this.col, 25-i/(wd*0.04+0.04));
      this.display(this.x, this.y - (this.gage * myp5.sin(i*w)), this.col, 25-i/(wd*0.04+0.04));
    }
    
  }
};
