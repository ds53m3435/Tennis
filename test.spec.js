function Tennis() {
	this.love = function(){
		return 'Love - Love';
	}
}
describe("Tennis", function() {
  it('should echo "Love - Love" when start game',function() {
    var tennis = new Tennis();
    expect(tennis.love()).toEqual('Love - Love');
  })
	it('should echo "Fifty - Love" when 15 - 0',function() {
    var tennis = new Tennis();
    expect(tennis.fifty()).toEqual('Fifty - Love');
  })
});
