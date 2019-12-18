var PulsateDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};
PulsateDancer.prototype = Object.create(Dancer.prototype);
PulsateDancer.prototype.constructor = PulsateDancer;

PulsateDancer.prototype.step = function() {
  this.$node.toggleClass('pulsate');
  Dancer.prototype.step.call(this);
};