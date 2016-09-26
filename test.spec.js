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
  this.getScoreB = function(){
    
  }
}


describe("Tennis", function() {
  it('should echo "Love - Love" when start game',function() {
    var tennis = new Tennis();
		tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  })

});
