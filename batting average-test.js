describe('get batting average', function () {
    it('should calculate batting average', function(){
        // arrange
        const hits = 400;
        const atBats = 1000;

        // act
        const result = battingAvg(hits, atBats);

        // assert
        expect(result).toEqual(0.4);
    });

    it('should call appendResults() when battingAvg() is called', function () {
        spyOn(window, "appendResults");

        // Creating the element inputs and assigning their values
        const hits = document.createElement('input');
        const atBats = document.createElement('input');
        hits.type = 'number';
        atBats.type = 'number';
        hits.value = 400;
        atBats.value = 1000;

        // Creating the submit button and adding the event listener
        const submitButton = document.createElement('button');
        submitButton.addEventListener('click', function (event) {
            event.preventDefault();
            battingAvg(hits.value, atBats.value);
            appendResults();
        });

        // Appending the input and button to the DOM
        document.body.append(hits);
        document.body.append(atBats);
        document.body.append(submitButton);

        // Triggering the "click" event on the submit button
        submitButton.dispatchEvent(new Event('click'));

        // Checking to see if appendResults() was called
        expect(appendResults).toHaveBeenCalled();
    });
});
