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
        else if (ScoreA === 40) ScoreA = 41;
    }
    this.getScoreB = function() {
        if (ScoreB === 0) ScoreB = 15;
        else if (ScoreB === 15) ScoreB = 30;
        else if (ScoreB === 30) ScoreB = 40;
        else if (ScoreB === 40) ScoreB = 41;
    }
    this.echo = function() {
        if (ScoreA === 0 && ScoreB === 0) return 'Love - Love';
        else if (ScoreA === 0 && ScoreB === 15) return 'Love - Fifteen';
        else if (ScoreA === 0 && ScoreB === 30) return 'Love - Thirty';
        else if (ScoreA === 0 && ScoreB === 40) return 'Love - Forty';
        else if (ScoreA === 15 && ScoreB === 0) return 'Fifteen - Love';
        else if (ScoreA === 15 && ScoreB === 15) return 'Fifteen - Fifteen';
        else if (ScoreA === 15 && ScoreB === 30) return 'Fifteen - Thirty';
        else if (ScoreA === 15 && ScoreB === 40) return 'Fifteen - Forty';
        else if (ScoreA === 30 && ScoreB === 0) return 'Thirty - Love';
        else if (ScoreA === 30 && ScoreB === 15) return 'Thirty - Fifteen';
        else if (ScoreA === 30 && ScoreB === 30) return 'Thirty - Thirty';
        else if (ScoreA === 30 && ScoreB === 40) return 'Thirty - Forty';
        else if (ScoreA === 40 && ScoreB === 0) return 'Forty - Love';
        else if (ScoreA === 40 && ScoreB === 15) return 'Forty - Fifteen';
        else if (ScoreA === 40 && ScoreB === 30) return 'Forty - Thirty';
        else if (ScoreA === 40 && ScoreB === 40) return 'Forty - Forty';
        else if(ScoreA === 41) return 'A is winner';
        else if(ScoreB === 41) return 'B is winner';
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
    it('should echo "Forty - Fifteen" when get Score A', function() {
        tennis.getScoreA();
        expect(tennis.echo()).toEqual('Forty - Fifteen');
    })
    it('should echo "A is winner" when get Score A', function() {
        tennis.getScoreA();
        expect(tennis.echo()).toEqual('A is winner');
    })
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
    it('should echo "Fifteen - Thirty" when get score B', function() {
        tennis.getScoreB();
        expect(tennis.echo()).toEqual('Fifteen - Thirty');
    })
    it('should echo "Thirty - Thirty" when get Score A', function() {
        tennis.getScoreA();
        expect(tennis.echo()).toEqual('Thirty - Thirty');
    })
    it('should echo "Thirty - Forty" when get Score B', function() {
        tennis.getScoreB();
        expect(tennis.echo()).toEqual('Thirty - Forty');
    })
    it('should echo "B is winner" when get Score B', function() {
        tennis.getScoreB();
        expect(tennis.echo()).toEqual('B is winner');
    })
    it('should echo "Love - Love" when start game', function() {
        tennis.start();
        expect(tennis.echo()).toEqual('Love - Love');
    })
    it('should echo "Fifteen - Love" when get score A', function() {
        tennis.getScoreA();
        expect(tennis.echo()).toEqual('Fifteen - Love');
    })
    it('should echo "Thirty - Love" when get score A', function() {
        tennis.getScoreA();
        expect(tennis.echo()).toEqual('Thirty - Love');
    })
    it('should echo "Forty - Love" when get score A', function() {
        tennis.getScoreA();
        expect(tennis.echo()).toEqual('Forty - Love');
    })
    it('should echo "A is winner" when get score A', function() {
        tennis.getScoreA();
        expect(tennis.echo()).toEqual('A is winner');
    })
    it('should echo "Love - Love" when start game', function() {
        tennis.start();
        expect(tennis.echo()).toEqual('Love - Love');
    })
    it('should echo "Love - Fifteen" when get score B', function() {
        tennis.getScoreB();
        expect(tennis.echo()).toEqual('Love - Fifteen');
    })
    it('should echo "Love - Thirty" when get score B', function() {
        tennis.getScoreB();
        expect(tennis.echo()).toEqual('Love - Thirty');
    })
    it('should echo "Love - Forty" when get score B', function() {
        tennis.getScoreB();
        expect(tennis.echo()).toEqual('Love - Forty');
    })
    it('should echo "B is winner" when get score B', function() {
        tennis.getScoreB();
        expect(tennis.echo()).toEqual('B is winner');
    })
});
