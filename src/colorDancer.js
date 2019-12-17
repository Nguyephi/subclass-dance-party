var makeColorDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = this.step;
};
makeColorDancer.prototype = Object.create(makeDancer.prototype);
makeColorDancer.prototype.constructor = makeColorDancer;

makeColorDancer.prototype.step = function() {
  var colors = ['green','purple','yellow', 'pink']
  color = colors[Math.floor(Math.random() * 4)];
  console.log(color);
  this.$node.css({ "border": "10px solid " + color});
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};