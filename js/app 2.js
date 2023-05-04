/*
Import Assets
Make board
Import Character
Import Cars
Import Customers
move character
assign spaces to select
Assign score and bnous to spaces based on customers and selection
tally score
end the game
loop


*/

class Game {
    constructor() {
        this.boardBorder = "#ff5ae2";
        this.boardBg = "#fff";
        // this.slickRicky = [{x: 200, y: 200}]
        this.img = document.getElementById('slickyRicky')

        this.score = 0;
        this.canvas = document.getElementById('canvas');
        this.canvasCtx = this.canvas.getContext('2d');



    }

    init() {
        this.makeCanvas();
        this.drawRicky();
        //this.moveRicky(e);
    }

    makeCanvas() {
        const canvasCtx = this.canvasCtx;
        const canvasBoard = this.canvasBoard;

        canvasCtx.fillStyle = this.boardBg;
        canvasCtx.strokeStyle = this.boardBorder;
        canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
        canvasCtx.strokeRect(0, 0, canvas.width, canvas.height);
    }

    drawRicky() {
        const canvasCtx = this.canvasCtx;
        // const canvas = this.canvas;
        // const image = this.img;
        const img = new Image
        img.addEventListener("load", () => {
            canvasCtx.drawImage(img, 360, 200, 60, 82);
        })
        img.src = "../media/SlickRicky.png"


    }



    moveRicky(e) {
        let dx = 0
        let dy = 0

        console.log(e.keyCode);

        switch (e.keyCode) {
            case 37:
                dy = -10
                    // left key pressed
                break;
            case 38:
                dx = +10
                    // up key pressed
                break;
            case 39:
                dy = +10
                    // right key pressed
                break;
            case 40:
                dx = -10
                    //     // console.log('Down key pressed');
                    //     // this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height); //instead if just clearing redraw rectangle after clearing
                    // this.drawTriangle(this.canvasCtx, this.img);
                    // // down key pressed
                break;
        }
        //this.drawRicky();
    }



    //     drawTriangle(context, img) {
    //         // the triangle
    //         context.beginPath();
    //         context.moveTo(-10, 0);
    //         context.drawImage(img, 200, 100, 60, 82);
    //         context.closePath();

    //         // // the outline
    //         // context.lineWidth = 10;
    //         // context.strokeStyle = "rgba(102, 102, 102, 1)";
    //         // context.stroke();

    //         // // the fill color
    //         // context.fillStyle = "rgba(255, 204, 0, 1)";
    //         // context.fill();
    //     }

    // }


}

const slickRickyGame = new Game

const startBtn = document.getElementById('startBtn')
startBtn.addEventListener('click', () => {
        slickRickyGame.init();
    })
    // document.addEventListener('keydown', ()=> {slickRickyGame.moveRicky(event)})slickRickyGame.moveRicky(this)

// document.addEventListener('keydown', slickRickyGame.moveRicky());

// function myfunction(e) {
//     // alert(e);
//     const sr = new Game;
//     sr.moveRicky(e);
// }