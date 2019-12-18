var makeEmojiDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //  this.$node = $('<div class="emoji_1"></div>');
  this.makeNode();
  this.setPosition(this.top, this.left);

};
makeEmojiDancer.prototype = Object.create(makeDancer.prototype);
makeEmojiDancer.prototype.constructor = makeEmojiDancer;

makeEmojiDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};

makeEmojiDancer.prototype.makeNode = function() {
  var arr = [ 'cow', 'hamster', 'penguin', 'bear', 'teddy', 'blob' ];
  var r = Math.floor(Math.random() * arr.length);
  console.log(arr[r]);
  this.$node = $('<div class="emoji_1" style="background-image: url(src/images/' + arr[r] + '.gif)"></div>');
};