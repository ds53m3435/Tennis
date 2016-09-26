function Tennis() {
    var ScoreA;
    var ScoreB;
    this.start = function() {
        ScoreA = 0;
        ScoreB = 0;
    }
    this.getScoreA = function() {
        if (ScoreA === 0) ScoreA = 15;
        else if (ScoreA === 15) ScoreA = 30;
        else if (ScoreA === 30) ScoreA = 40;
    }
    this.getScoreB = function() {
        if (ScoreB === 0) ScoreB = 15;
        else if (ScoreB === 15) ScoreB = 30;
        else if (ScoreB === 30) ScoreB = 40;
    }
    this.echo = function() {
        if (ScoreA === 0 && ScoreB === 0) {
            return 'Love - Love';
        } else if (ScoreA === 0 && ScoreB === 15) {
            return 'Love - Fifteen';
        } else if (ScoreA === 0 && ScoreB === 30) {
            return 'Love - Thirty';
        } else if (ScoreA === 0 && ScoreB === 40) {
            return 'Love - Fourty';
        } else if (ScoreA === 15 && ScoreB === 0) {
            return 'Fifteen - Love';
        } else if (ScoreA === 15 && ScoreB === 15) {
            return 'Fifteen - Fifteen';
        } else if (ScoreA === 15 && ScoreB === 30) {
            return 'Fifteen - Thirty';
        } else if (ScoreA === 15 && ScoreB === 40) {
            return 'Fifteen - Fourty';
        }
        if (ScoreA === 30 && ScoreB === 0) {
            return 'Thirty - Love';
        } else if (ScoreA === 30 && ScoreB === 15) {
            return 'Thirty - Fifteen';
        } else if (ScoreA === 30 && ScoreB === 30) {
            return 'Thirty - Thirty';
        } else if (ScoreA === 30 && ScoreB === 40) {
            return 'Thirty - Fourty';
        } else if (ScoreA === 40 && ScoreB === 0) {
            return 'Fourty - Love';
        } else if (ScoreA === 40 && ScoreB === 15) {
            return 'Fourty - Fifteen';
        } else if (ScoreA === 40 && ScoreB === 30) {
            return 'Fourty - Thirty';
        } else if (ScoreA === 40 && ScoreB === 40) {
            return 'Fourty - Fourty';
        }
    }
}
describe("Tennis", function() {
    var tennis = new Tennis();
    it('should echo "Love - Love" when start game', function() {
        tennis.start();
        expect(tennis.echo()).toEqual('Love - Love');
    })
    it('should echo "Fifteen - Love" when get score A', function() {
        tennis.getScoreA();
        expect(tennis.echo()).toEqual('Fifteen - Love');
    })
    it('should echo "Fifteen - Fifteen" when get score B', function() {
        tennis.getScoreB();
        expect(tennis.echo()).toEqual('Fifteen - Fifteen');
    })
    it('should echo "Thirty - Fifteen" when get score A', function() {
        tennis.getScoreA();
        expect(tennis.echo()).toEqual('Thirty - Fifteen');
    })
    it('should echo "Fourty - Fifteen" when get ScoreA', function() {
        tennis.getScoreA();
        expect(tennis.echo()).toEqual('Fourty - Fifteen');
    })
});