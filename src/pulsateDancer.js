var makePulsateDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = this.step;
};
makePulsateDancer.prototype = Object.create(makeDancer.prototype);
makePulsateDancer.prototype.constructor = makePulsateDancer;

makePulsateDancer.prototype.step = function() {
  this.$node.toggleClass("pulsate");
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};