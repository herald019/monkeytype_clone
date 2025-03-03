const words = 'apple banana chair dog elephant frog giraffe house island jump kite lamp mountain nose open piano queen river star tree umbrella vacation wall xylophone yellow zebra airplane bottle car dance energy fire grape heart idea joy king leaf moon night orange park queen rock sun turtle unit vehicle water box cat dream egg fruit gold hope ice joy king love music new open play question red song tree use very win exit yard zip arm ball cloud dare easy fast gate help iron joke king lake map near owl push quiz read safe top up voice word yellow zero act bird cup dig end fan glow harp ink jar'.split(' ');
const wordCount = words.length;

function randomWord() {
    const randomIndex =Math.ceil( Math.random() * wordCount);
    return words[randomIndex];
}

function newGame() {
    document.getElementById('words').innerHTML = '';
    for (let i=0 ; i <200 ; i++) {
        document.getElementById('words').innerHTML += randomWord();
    }
}

newGame();