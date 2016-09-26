function Tennis(){
	var ScoreA;
	var ScoreB;
   this.start = function() {
	    ScoreA = 0;
	    ScoreB = 0;
  }
	this.getScoreA = function() {
		if(ScoreA === 0) {
			ScoreA = 15;
		}
		else if(ScoreA === 15) {
			ScoreA = 30;
		}
		else if(ScoreA === 30) {
			ScoreA = 40;
		}
	}
	this.getScoreB = function(){

  }
	this.echo = function(){
		if(ScoreA === 0 && ScoreB === 0){
			return 'Love - Love';
		}
		else if(ScoreA === 15 && ScoreB === 0){
			return 'Fifty - Love';
		}
	}

}
describe("Tennis", function() {
  it('should echo "Love - Love" when start game',function() {
    var tennis = new Tennis();
		tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  })

});
