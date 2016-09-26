function Tennis() {
    var ScoreA;
    var ScoreB;
    this.start = function() {
        ScoreA = 0;
        ScoreB = 0;
    }
    this.getScoreA = function() {
        if (ScoreA === 0) {
            ScoreA = 15;
        } else if (ScoreA === 15) {
            ScoreA = 30;
        } else if (ScoreA === 30) {
            ScoreA = 40;
        }
    }
    this.getScoreB = function() {
        if (ScoreB === 0) ScoreB = 15;
        else if (ScoreB === 15) ScoreB = 30;
        else if (ScoreB === 30) ScoreB = 40;
    }
    this.echo = function() {
        if (ScoreA === 0 && ScoreB === 0) {
            return 'Love - Love';
        } 
        else if( ScoreA ===30 && ScoreB ===0){
        	return 'Thirty - Love'
        }
        else if( ScoreA ===30 && ScoreB ===15){
        	return 'Thirty - Fifteen'
        }
        else if( ScoreA ===30 && ScoreB ===30){
        	return 'Thirty - Thirty'
        }
        else if( ScoreA ===30 && ScoreB ===40){
        	return 'Thirty - Thirty'
        }
    }
}
describe("Tennis", function() {
    it('should echo "Love - Love" when start game', function() {
        var tennis = new Tennis();
        tennis.start();
        expect(tennis.echo()).toEqual('Love - Love');
    })
});