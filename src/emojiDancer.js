var makeEmojiDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = this.step;
  this.$node = $('<div class="emoji_1"></div>');
};
makeEmojiDancer.prototype = Object.create(makeDancer.prototype);
makeEmojiDancer.prototype.constructor = makeEmojiDancer;

makeEmojiDancer.prototype.step = function() {
//  this.$node.class("emoji_1");
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};