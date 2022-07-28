const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const sissors = document.getElementById('sissors')
const pscore = document.getElementById('playerScore')
const hand = document.getElementById('hands')
const result = document.getElementById('result')
const endbut = document.getElementById('endGameButton')
const Hsel = document.getElementById('Hselection')
const Csel = document.getElementById('Cselection')
const center = document.getElementById('centerH')
const computerScore = document.getElementById('computerScore')
const computerhands = document.getElementById('computerhands')
const computerresult = document.getElementById('computerresult')
const Tname = document.getElementById('teamName')
const teamname = prompt("enter team name")

Tname.innerText = `${teamname}`

const rockPaperSissors = [rock.value, paper.value, sissors.value]

const rand = () => {
    const ran = Math.random() * 3
    return Math.floor(ran)
}

const symbol = ['👊🏻', '🖐🏻', '✌🏻']

const find = (val) => {
    if (val == "Rock") {
        return symbol[0]
    }
    else if (val == "Paper") {
        return symbol[1]
    }
    else {
        return symbol[2]
    }
}

const comp = () => {
    return rockPaperSissors[rand()]
}

let rps = document.querySelectorAll('.rpsButton')
let score = 0
let ps = 0
let cs = 0
let cscore = 0

rps.forEach(rps => {
    rps.onclick = () => {
        let val = comp()
        if (val == rockPaperSissors[0] && rps.value == paper.value) {
            score = 1
            ps = ps + 1
            cscore = -1
        }
        else if (val == rockPaperSissors[1] && rps.value == sissors.value) {
            score = 1
            ps = ps + 1
            cscore = -1
        }
        else if (val == rockPaperSissors[2] && rps.value == rock.value) {
            score = 1
            ps = ps + 1
            cscore = -1
        }
        else if (val == rps.value) {
            score = 0
            cscore = 0
        }
        else {
            score = -1
            cs = cs + 1
            cscore = 1
        }


        if (score == -1) {
            center.innerText = `LOST`
            pscore.innerText = `Total Score ${ps}`
            computerScore.innerText = `Total Score ${cs}`
            result.innerText = `Score : ${score}`
            computerresult.innerText = `Score ${cscore}`
        }
        else if (score == 0) {
            center.innerText = `DRAW`
            pscore.innerText = `Total Score ${ps}`
            computerScore.innerText = `Total Score ${cs}`
            result.innerText = `Score : ${score}`
            computerresult.innerText = `Score ${cscore}`
        }
        else if (score == 1) {
            center.innerText = ` WIN`
            pscore.innerText = `Total Score ${ps}`
            computerScore.innerText = `Total Score ${cs}`
            result.innerText = `Score : ${score}`
            computerresult.innerText = `Score ${cscore}`
        }
        hand.innerText = `${find(rps.value)}`
        computerhands.innerText = `${find(val)}`
    }
})

endbut.onclick = () => {
    if (ps > cs)
        center.innerText = ` WIN`
    else if (ps < cs)
        center.innerText = `LOST`
    else if (ps == cs)
        center.innerText = `DRAW`
    else {
        center.innerText = `INVALID`
    }
    pscore.innerText = ``
    hand.innerText = ``
    result.innerText = ``
    console.log(ps)
    console.log(cs)
    computerScore.innerText = ``
    computerhands.innerText = ``
    computerresult.innerText = ``
    ps = 0
    cs = 0
}