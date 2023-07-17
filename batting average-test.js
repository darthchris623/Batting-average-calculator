describe('get batting average', function () {
    beforeEach(function(){
        const hits = document.getElementById('hits');
        const atBats = document.getElementById('at-bats');

        hits.value = 400;
        atBats.value = 1000;
    });

    it('should calculate batting average', function(){
        // arrange
        

        // act
        const result = battingAvg();

        // assert
        expect(result).toEqual(0.4);
    });

    afterEach(function () {
        hits.value = '';
        atBats.value = '';
    });
});