function Tennis(){
	var ScoreA;
	var ScoreB;
   this.start = function() {
	    ScoreA = 0;
	    ScoreB = 0;
  }
	this.getScoreA = function() {

	}  
	this.getScoreB = function(){
    	if(ScoreB===0)
    		ScoreB===15;
    	else if(ScoreB===15)
    		ScoreB===30;
    	else if(ScoreB===30)
    		ScoreB===40;
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
