var BlinkyDancer = function(top, left, timeBetweenSteps) {
  // var this = Object.create(BlinkyDancer.prototype);
  Dancer.call(this, top, left, timeBetweenSteps);
  // return this;
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  this.$node.toggle();
  Dancer.prototype.step.call(this);
};