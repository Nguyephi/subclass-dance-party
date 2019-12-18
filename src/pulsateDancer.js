var makePulsateDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};
makePulsateDancer.prototype = Object.create(makeDancer.prototype);
makePulsateDancer.prototype.constructor = makePulsateDancer;

makePulsateDancer.prototype.step = function() {
  this.$node.toggleClass("pulsate");
  makeDancer.prototype.step.call(this);
};