var makeEmojiDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.makeNode();
  this.setPosition(this.top, this.left);
};
makeEmojiDancer.prototype = Object.create(makeDancer.prototype);
makeEmojiDancer.prototype.constructor = makeEmojiDancer;

makeEmojiDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};

makeEmojiDancer.prototype.makeNode = function() {
  var arr = ['cow', 'hamster', 'penguin', 'bear', 'teddy', 'blob'];
  var r = Math.floor(Math.random() * arr.length);
  console.log(arr[r]);
  this.$node = $('<div class="emoji_1" style="background-image: url(src/images/' + arr[r] + '.gif)"></div>');
};