var ColorDancer = function(top, left, timeBetweenSteps) {
  // var this = Object.create(ColorDancer.prototype);
  Dancer.call(this, top, left, timeBetweenSteps);
};
ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;

ColorDancer.prototype.step = function() {
  var colors = ['green', 'purple', 'yellow', 'pink'];
  color = colors[Math.floor(Math.random() * 4)];
  this.$node.css({ 'border': '10px solid ' + color});
  Dancer.prototype.step.call(this);
};