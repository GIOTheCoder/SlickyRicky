const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

const tileW = 51;
const tileH = 51;

const tileRows = 8;
const tileCols = 8;

let score = 0;



const map = [
    17, 9, 1, 1, 1, 1, 13, 5,
    1, 1, 1, 1, 1, 1, 1, 1,
    2, 10, 1, 1, 1, 1, 14, 6,
    1, 1, 1, 1, 1, 1, 1, 1,
    3, 11, 1, 1, 1, 1, 15, 7,
    1, 1, 1, 1, 1, 1, 1, 1,
    4, 12, 1, 1, 1, 1, 16, 8,
    1, 1, 1, 1, 1, 1, 1, 1,
]

const carSelections = [
    orange = { x: 52, y: 0 },
    suv = { x: 52, y: 106 },
    pickup = { x: 52, y: 206 },
    sports = { x: 52, y: 310 },
    taxi = { x: 322, y: 2 },
    police = { x: 322, y: 104 },
    murica = { x: 322, y: 212 },
    scam = { x: 322, y: 310 }
]

const myMusic = document.getElementById("music");

function play() {
    myMusic.play();
}

function pause() {
    myMusic.pause();
}

// const startGame = () =>{
    
// }


let customers = [
    police = {
        id: 1,
        name: 'Officer Kyle',
        dialogue: 'I wrecked my squad car, get me another!',
        hasSelected: false,
        winningIndex: 5
    },
    bettiesue = {
        id: 2,
        name: 'Bettie Sue',
        dialogue: 'I need alot of seats for these kids.',
        hasSelected: false,
        winningIndex: 1
    },
    richierich = {
        id: 3,
        name: 'Richy Rich',
        dialogue: 'I need something expensive, sporty, and flashy.',
        hasSelected: false,
        winningIndex: 3

    },
    johnny = {
        id: 4,
        name: 'Illegal Johnny',
        dialogue: 'I need something plain, gotta stay hidden.',
        hasSelected: false,
        winningIndex: 0
    },
    pauliethedriver = {
        id: 5,
        name: 'Paulie the Driver',
        dialogue: 'Ubers are taking my money, I need a fast cab.',
        hasSelected: false,
        winningIndex: 4
    },
    unclesam = {
        id: 6,
        name: 'Uncle Sam',
        dialogue: 'MURICA!',
        hasSelected: false,
        winningIndex: 6
    },
    nocreditharry = {
        id: 7,
        name: 'No Credit Harry',
        dialogue: 'Give me something nice man, or else.',
        hasSelected: false,
        winningIndex: 7
    },
    hunter = {
        id: 8,
        name: 'Hunter The Hunter',
        dialogue: 'I want to be one with the woods.',
        hasSelected: false,
        winningIndex: 2
    }
    // defaults = {
    //     id: 9,
    //     name: '',
    //     dialogue: '',
    //     // selectedCar: '',

    // }
]



class Wall {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.previousX = null;
        this.previousY = null;
        this.height = 51;
        this.width = 51;

    }

    draw() {
        let image = new Image();
        image.src = './media/orangecar.png'

        ctx.drawImage(image, this.x, this.y, 51, 51)
    }

    draw2() {
        let image = new Image();
        image.src = './media/greensuv.png'

        ctx.drawImage(image, this.x, this.y, 51, 51)
    }

    draw3() {
        let image = new Image();
        image.src = './media/pickuptruck.png'

        ctx.drawImage(image, this.x, this.y, 51, 51)
    }

    draw4() {
        let image = new Image();
        image.src = './media/redsportscar.png'

        ctx.drawImage(image, this.x, this.y, 51, 51)
    }

    draw5() {
        let image = new Image();
        image.src = './media/taxicab.png'

        ctx.drawImage(image, this.x, this.y, 51, 51)
    }

    draw6() {
        let image = new Image();
        image.src = './media/policecar.png'

        ctx.drawImage(image, this.x, this.y, 51, 51)
    }

    draw7() {
        let image = new Image();
        image.src = './media/muricacar.png'

        ctx.drawImage(image, this.x, this.y, 51, 51)
    }

    draw8() {
        let image = new Image();
        image.src = './media/scamcar.png'

        ctx.drawImage(image, this.x, this.y, 51, 51)
    }

    draw9() {
        let image = new Image();
        image.src = './media/28.jpg'

        ctx.drawImage(image, this.x, this.y, 51, 51)
    }
    isCollision(rect1, rect2) {
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y) {

            player.x = player.previousX
            player.y = player.previousY


        }
    }
}

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.height = 35;
        this.width = 20;
        this.speed = 2;

    }

    draw() {
        let image = new Image();
        image.src = './media/SlickRicky.png'

        ctx.drawImage(image, this.x, this.y, 30, 45)
    }

    move() {
        if (keys.ArrowUp && player.y > 0) {
            player.y -= player.speed;
        }
        if (keys.ArrowDown && player.y < canvas.height - this.height) {
            player.y += player.speed;
        }
        if (keys.ArrowLeft && player.x > 0) {
            player.x -= player.speed;
        }
        if (keys.ArrowRight && player.x < canvas.width - this.width) {
            player.x += player.speed;
        }
        // console.log(player.x, player.y)
    }



    //     hasSelected(){
    //         for (let row = 0; row < tileRows; row++) {
    //             for (let col = 0; col < tileCols; col++) {
    //                 let arrayIndex = row * tileRows + col;


    //         if(keys.Enter && player.x && map[arrayIndex] === 16){

    //             console.log('has selected') 
    //             }
    //         }
    //     }
    // }


    getPreviousXandY() {
        this.previousX = this.x
        this.previousY = this.y
    }
}


const player = new Player(200, 200)

const display = document.getElementById('customer')
const scoredisplay = document.getElementById('score')
const restart = document.getElementById('restart')
let customerindex = Math.floor(Math.random() * customers.length);

const displayWinnings = () => {
    scoredisplay.innerText = "BANG! Got em!! Click NEXT!";
}

const displayTryAgain = () => {
    scoredisplay.innerText = "You tryna go broke? Try Again!";

}

const displayGameOver = () => {
    scoredisplay.innerText = "Game Over! Thanks for playing!";
    startBtn.style.visibility = 'hidden';

}

const reset = () =>{
    restart.innerHTML = "";
    for(let i = 0; i<customers.length; i++){
        customers[i].hasSelected = false
    }
    startBtn.style.visibility = 'visible';
    startGame()


}

const displayRestart = () =>{
    restart.innerHTML = `<p class="text-light text-center restart">Start Over</p>`
    restart.addEventListener('click', ()=>{
        reset();
    })
    
}

const startGame = () => {
    init();
    startBtn.blur();
    clearDisplay();
}

const clearDisplay = () => {
    scoredisplay.innerText = "";
}

let getCustomer = () => {
    do {
        customerindex = Math.floor(Math.random() * customers.length);
    } while (customers[customerindex].hasSelected == true && checkAllHasSelected() != -1);

    if (checkAllHasSelected() == -1) {
        displayGameOver();
        displayRestart();
    } else
        return customers[customerindex];
}

let checkAllHasSelected = () => {
    return customers.findIndex(x => x.hasSelected == false);
}

const displayCustomer = () => {
    startBtn.innerText = 'Next!'
    const customer = getCustomer();
    if(customer != null && customer != undefined){
        const customerDisplay = document.getElementById('customer');
        customerDisplay.innerHTML = `<h2 class="h4 text-light">${customer.name}:</h2>
            <p>"${customer.dialogue}"</p>`
    }
}


let hasSelected = () => {
    let currentcustomer = customers[customerindex];
    let winspot = currentcustomer.winningIndex;
    let carsel = carSelections[winspot];

    let xrange = [];
    for (let i = 0; i < 20; i++) {
        if (i < 11)
            xrange.push(carsel.x - i);
        else xrange.push(carsel.x + i);
    }
    let yrange = [];
    for (let i = 0; i < 20; i++) {
        if (i < 11)
            yrange.push(carsel.y - i);
        else yrange.push(carsel.y + i);
    }
    if (xrange.includes(player.x) && yrange.includes(player.y)) {
        customers[customerindex].hasSelected = true;
        displayWinnings();
    } else {
        displayTryAgain();
    }
}

// const toggleScreen = (id, toggle) => {
//     let element = document.getElementById(id);
//     let display = (toggle) ? 'block' : 'none';
//     element.style.display = display;
// }

const updateAll = () => {
    // toggleScreen('start-screen', false);
    // toggleScreen('canvas', true);
    window.requestAnimationFrame(updateAll)
    drawMap();
    player.draw();
    player.getPreviousXandY();
    player.move();
}



const init = () => {
    displayCustomer();
}


const startBtn = document.getElementById('startBtn')
startBtn.addEventListener('click', () => {
    startGame();

})

window.onload = () => {
    window.requestAnimationFrame(updateAll);
}

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
    Enter: false
}

window.addEventListener('keydown', (e) => {
    keys[e.key] = true;

})

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
    if (e.key === 'Enter') {
        hasSelected();
    }


})



const drawMap = () => {
    for (let row = 0; row < tileRows; row++) {
        for (let col = 0; col < tileCols; col++) {
            let arrayIndex = row * tileRows + col;

            if (map[arrayIndex] === 1) {
                let wall = new Wall(tileW * col, tileH * row)
                wall.draw9();
            } else if (map[arrayIndex] === 2) {
                let wall = new Wall(tileW * col, tileH * row)
                wall.draw2();
                wall.isCollision(wall, player);
            } else if (map[arrayIndex] === 3) {
                let wall = new Wall(tileW * col, tileH * row)
                wall.draw3();
                wall.isCollision(wall, player);
            } else if (map[arrayIndex] === 4) {
                let wall = new Wall(tileW * col, tileH * row)
                wall.draw4();
                wall.isCollision(wall, player);
            } else if (map[arrayIndex] === 5) {
                let wall = new Wall(tileW * col, tileH * row)
                wall.draw5();
                wall.isCollision(wall, player);
            } else if (map[arrayIndex] === 6) {
                let wall = new Wall(tileW * col, tileH * row)
                wall.draw6();
                wall.isCollision(wall, player);
            } else if (map[arrayIndex] === 7) {
                let wall = new Wall(tileW * col, tileH * row)
                wall.draw7();
                wall.isCollision(wall, player);
            } else if (map[arrayIndex] === 8) {
                let wall = new Wall(tileW * col, tileH * row)
                wall.draw8();
                wall.isCollision(wall, player);
            } else if (map[arrayIndex] === 17) {
                let wall = new Wall(tileW * col, tileH * row)
                wall.draw();
                wall.isCollision(wall, player);
            } else {
                ctx.fillRect(tileW * col, tileH * row, tileW, tileH)
                ctx.fillStyle = "#1a0124"
            }
        }
    }
}