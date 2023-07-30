const hits = document.getElementById('hits');
const atBats = document.getElementById('at-bats');
const calcButton = document.getElementById('calc-average');
const resultBox = document.getElementById('batting-avg');

// function calculates batting average
function battingAvg(hits, atBats) {
    return Math.round((1000 * (hits / atBats))) / 1000;
};

// function displays the calculated batting average on the page
function appendResults() {
    const stats = document.createElement('h3');
    stats.innerText = `With ${hits.value} hits and ${atBats.value} at bats, your average is:`
    const result = document.createElement('p');
    result.innerText = `${battingAvg(hits.value, atBats.value)}`; // callback function which calculates batting average
    resultBox.append(stats, result);
};

// submit button
calcButton.addEventListener('click', (event) =>{
    event.preventDefault();
    appendResults(); // callback function that displays the batting average on the page
    hits.value = '';
    atBats.value = '';
});
