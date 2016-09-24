function Tennis() {

}
describe("Tennis", function() {
  it('should echo "Love - Love" when start game',function() {
    var tennis = new Tennis();
    expect(tennis.love()).toEqual('Love - Love');
  })
});
