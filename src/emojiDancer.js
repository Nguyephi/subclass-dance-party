var EmojiDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.makeNode();
  this.setPosition(this.top, this.left);
};
EmojiDancer.prototype = Object.create(Dancer.prototype);
EmojiDancer.prototype.constructor = EmojiDancer;

EmojiDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

EmojiDancer.prototype.makeNode = function() {
  var arr = ['cow', 'hamster', 'penguin', 'bear', 'teddy', 'blob'];
  var r = Math.floor(Math.random() * arr.length);
  this.$node = $('<div class="emoji_1" style="background-image: url(src/images/' + arr[r] + '.gif)"></div>');
};