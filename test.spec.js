function Tennis() {
	this.love = function(){
		return 'Love - Love';
	}
  this.fifteenlove = function(){
    return 'Fifteen - Love';
  }
  this.thirtylove = function(){
    return 'Thirty - Love';
  }
  this.fourtylove = function(){
    return 'Fourty - Love';
  }
  this.lovefifteen = function(){
    return 'Love - Fifteen';
  }
  this.lovethity = function(){
    return 'Love - Thirty';
  }

}
describe("Tennis", function() {
  it('should echo "Love - Love" when start game',function() {
    var tennis = new Tennis();
    expect(tennis.love()).toEqual('Love - Love');
  })
	it('should echo "Fifteen - Love" when 15 - 0',function() {
    var tennis = new Tennis();
    expect(tennis.fifteenlove()).toEqual('Fifteen - Love');
  })
  it('should wcho "Thirty - Love" when 30 - 0',function(){
    var tennis = new Tennis();
    expect(tennis.thirtylove()).toEqual('Thirty - Love');
  })
  it('should wcho "Thirty - Love" when 40 - 0',function(){
    var tennis = new Tennis();
    expect(tennis.fourtylove()).toEqual('Fourty - Love');
  })
  it('should wcho "Love - Fifteen" when 0 - 15',function(){
    var tennis = new Tennis();
    expect(tennis.lovefifteen()).toEqual('Love - Fifteen');
  })
  it('should wcho "Fifteen - Fifteen" when 15 - 15',function(){
    var tennis = new Tennis();
    expect(tennis.fifteenfifteen()).toEqual('Fifteen - Fifteen');
  })
  it('should wcho "Thirty - Fifteen" when 30 - 15',function(){
    var tennis = new Tennis();
    expect(tennis.thirtyfifteen()).toEqual('Thirty - Fifteen');
  })
  it('should wcho "Fourty - Fifteen" when 40 - 15',function(){
    var tennis = new Tennis();
    expect(tennis.fourtyfifteen()).toEqual('Fourty - Fifteen');
  })
});
