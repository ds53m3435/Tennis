function Tennis(){
	var ScoreA;
	var ScoreB;
   this.start = function() {
	    ScoreA = 0;
	    ScoreB = 0;
  }
	this.echo = function(){
		if(ScoreA ===0 && ScoreB === 0){
			return 'Love - Love';
		}
	}
}


describe("Tennis", function() {
  it('should echo "Love - Love" when start game',function() {
    var tennis = new Tennis();
		tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  })
	/*it('should echo "Fifteen - Love" when 15 - 0',function() {
    var tennis = new Tennis();
    expect(tennis.fifteenlove()).toEqual('Fifteen - Love');
  })
  it('should echo "Thirty - Love" when 30 - 0',function(){
    var tennis = new Tennis();
    expect(tennis.thirtylove()).toEqual('Thirty - Love');
  })
  it('should echo "Thirty - Love" when 40 - 0',function(){
    var tennis = new Tennis();
    expect(tennis.fourtylove()).toEqual('Fourty - Love');
  })
  it('should echo "Love - Fifteen" when 0 - 15',function(){
    var tennis = new Tennis();
    expect(tennis.lovefifteen()).toEqual('Love - Fifteen');
  })
  it('should echo "Fifteen - Fifteen" when 15 - 15',function(){
    var tennis = new Tennis();
    expect(tennis.fifteenfifteen()).toEqual('Fifteen - Fifteen');
  })
  it('should echo "Thirty - Fifteen" when 30 - 15',function(){
    var tennis = new Tennis();
    expect(tennis.thirtyfifteen()).toEqual('Thirty - Fifteen');
  })
  it('should echo "Fourty - Fifteen" when 40 - 15',function(){
    var tennis = new Tennis();
    expect(tennis.fourtyfifteen()).toEqual('Fourty - Fifteen');
  })*/
});
