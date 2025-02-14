let scoreHome = document.getElementById("homeScore")
let scoreAway = document.getElementById("awayScore")
let homeCount = 0
let awayCount = 0

// Home score additions

function plus1H() {
    homeCount = homeCount + 1
    scoreHome.innerText = homeCount
}

function plus2H() {
    homeCount = homeCount + 2
    scoreHome.innerText = homeCount
}

function plus3H() {
    homeCount = homeCount + 3
    scoreHome.innerText = homeCount
}

// Guest score additions

function plus1G() {
    awayCount = awayCount + 1
    scoreAway.innerText = awayCount
}

function plus2G() {
    awayCount = awayCount + 2
    scoreAway.innerText = awayCount
}

function plus3G() {
    awayCount = awayCount + 3
    scoreAway.innerText = awayCount
}

// Resets

function homeReset() {
    homeCount = 0
    scoreHome.innerText = homeCount
}

function awayReset() {
    awayCount = 0
    scoreAway.innerText = awayCount
}