describe('pulsateDancer', function() {

  var pulsateDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pulsateDancer = new PulsateDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pulsateDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(pulsateDancer.$node, 'toggleClass');
    pulsateDancer.step();
    expect(pulsateDancer.$node.toggleClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(pulsateDancer, 'step');
      expect(pulsateDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(pulsateDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(pulsateDancer.step.callCount).to.be.equal(2);
    });
  });
});