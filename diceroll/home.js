let img1 = document.querySelector('.player1>h1+img')
img1.setAttribute('src', "images/6.svg")//providing bydefault images to img tag
let img2 = document.querySelector('.player2>h1+img')
img2.setAttribute('src', "images/6.svg")
let show = document.querySelector('.container>h1+p')
updatedom();//calling fucntion to keep dom updated with local storage


document.addEventListener('keydown', function () {
    let player1 = Math.ceil(Math.random() * 6);//providing nearest biggest integer using ceil method
    let player2 = Math.ceil(Math.random() * 6);
    let src1 = 'images/' + player1 + ".svg";//concate math number with string to use as img address
    let src2 = 'images/' + player2 + ".svg";
    img1.setAttribute('src', src1)//using src as img address
    img2.setAttribute('src', src2)
    if (player1 == player2) {
        show.textContent = 'draw'
    }
    else if (player1 > player2) {
        show.textContent = 'player 1 wins!'
        let player1_score = localStorage.getItem('player1_score') || 0;
        player1_score++;
        localStorage.setItem('player1_score', player1_score);
        updatedom();
    }
    else if (player2 > player1) {
        show.textContent = 'player 2 wins!'
        let player2_score = localStorage.getItem('player2_score') || 0;
        player2_score++;
        localStorage.setItem('player2_score', player2_score);
        updatedom();
    }
})

function updatedom() {
    //show score on dom by catching element
    document.getElementById('score1').textContent = localStorage.getItem('player1_score') || 0;
    document.getElementById('score2').textContent = localStorage.getItem('player2_score') || 0;
}
let reset = document.querySelector('#reset');
reset.addEventListener('click', function () {
    //change the images as bydefault
    img1.setAttribute('src', "images/6.svg")
    img2.setAttribute('src', "images/6.svg")
    localStorage.clear();
    //updating players score in DOM using localstorage value
    updatedom();
    //change the heading
    show.textContent = 'start again!'
})
