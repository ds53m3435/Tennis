function Tennis() {
	this.love = function(){
		return 'Love - Love';
	}
  this.fiftylove = function(){
    return 'Fifty - Love';
  }
}
describe("Tennis", function() {
  it('should echo "Love - Love" when start game',function() {
    var tennis = new Tennis();
    expect(tennis.love()).toEqual('Love - Love');
  })
	it('should echo "Fifty - Love" when 15 - 0',function() {
    var tennis = new Tennis();
    expect(tennis.fiftylove()).toEqual('Fifty - Love');
  })
  it('should wcho "Thirty - Love" when 30 - 0',function(){
    var tennis = new Tennis();
    expect(tennis.thirtylove()).toEqual('Thirty - Love');
  })
  it('should wcho "Thirty - Love" when 40 - 0',function(){
    var tennis = new Tennis();
    expect(tennis.thirtylove()).toEqual('Fourty - Love');
  })
});
