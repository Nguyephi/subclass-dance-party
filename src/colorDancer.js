var makeColorDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};
makeColorDancer.prototype = Object.create(makeDancer.prototype);
makeColorDancer.prototype.constructor = makeColorDancer;

makeColorDancer.prototype.step = function() {
  var colors = ['green', 'purple', 'yellow', 'pink'];
  color = colors[Math.floor(Math.random() * 4)];
  this.$node.css({ 'border': '10px solid ' + color});
  makeDancer.prototype.step.call(this);
};