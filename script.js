const interval = 10;

const countDown = moment('01/04/2024');

let $days = $('#days'),
    $hours = $('#hours'),
    $minutes = $('#minutes'),
    $seconds = $('#seconds');


setInterval(function() {
    let now = moment();
    let gradDate = moment.duration(countDown.diff(now));
    convertTime(gradDate);
}, interval);

function convertTime(timeRemainder) {
    let day = Math.floor(timeRemainder.asDays()),
        hour = Math.floor(timeRemainder.asHours()) % 24,
        minute = Math.floor(timeRemainder.asMinutes()) % 60,
        second = Math.floor(timeRemainder.asSeconds()) % 60;


        $('#days').text(roundNumber(day));
        $('#hours').text(roundNumber(hour));
        $('#minutes').text(roundNumber(minute));
        $('#seconds').text(roundNumber(second));
}

function roundNumber(number) {
    let roundedNum = number;
    if (number< 10) {
        roundedNum = "0" + roundedNum;
    }

    return roundedNum;
}