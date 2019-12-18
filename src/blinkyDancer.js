var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // var this = Object.create(makeBlinkyDancer.prototype);
  makeDancer.call(this, top, left, timeBetweenSteps);
  // return this;
};
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  this.$node.toggle();
  makeDancer.prototype.step.call(this);
};