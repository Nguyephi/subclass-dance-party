window.numHorse = 0;
var HorseDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<div class="horse"></div>');
  this.setPosition(this.top, this.left);
  window.numHorse++;
};
HorseDancer.prototype = Object.create(Dancer.prototype);
HorseDancer.prototype.constructor = HorseDancer;

HorseDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};
