window.numHorse = 0;
var makeHorseDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<div class="horse"></div>');
  this.setPosition(this.top, this.left);
  window.numHorse++;
};
makeHorseDancer.prototype = Object.create(makeDancer.prototype);
makeHorseDancer.prototype.constructor = makeHorseDancer;

makeHorseDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};
