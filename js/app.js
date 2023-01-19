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
    constructor(){
        // this.boardBorder = "#ff5ae2";
        // this.boardBg = "#fff";
        // this.slickRicky = [{x: 200, y: 200}]
        this.img = document.getElementById('slickyRicky')
        
        this.score = 0;
        this.canvas = document.getElementById('canvas');
        this.canvasCtx = this.canvas.getContext('2d');
    
        
    
    }

    

}

//     init(){
//         let pos,key = 0;
//         let x = 360;
//         let y = 200;
//         const canvasCtx = this.canvasCtx;
//         const img = this.img;
//         // this.makeCanvas();
//         // this.drawRicky(x,y);
//         const canvas = this.canvas;

//         document.onkeydown = function(e){pos=1; key=e.keyCode;}
//         document.onkeyup = function(){pos=0;};

//         setInterval(function()
//         {
//             if(pos==0)return;
//             if(key==37)x-=2;
//             if(key==38)y-=2;
//             if(key==39)x+=2;
//             if(key==40)y+=2;
            
//             canvas.width=this.canvas.width;
//             canvasCtx.fillStyle = "#fff";
//             canvasCtx.strokeStyle = "#ff5ae2";
//             canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
//             canvasCtx.strokeRect(0, 0, canvas.width, canvas.height);
//             canvasCtx.drawImage(img, x, y, 60, 82);

//         },5);
//         //this.moveRicky(e);
//     }

//     drawCars() {


//     }

//     // makeCanvas(){
//     //     const canvasCtx = this.canvasCtx;
//     //     const canvas = this.canvas;

//     //     canvasCtx.fillStyle = this.boardBg;
//     //     canvasCtx.strokeStyle = this.boardBorder;
//     //     canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
//     //     canvasCtx.strokeRect(0, 0, canvas.width, canvas.height);
//     // }

//     // drawRicky(x,y){
//     //     const canvasCtx = this.canvasCtx;
//     //     // const canvas = this.canvas;
//     //     // const image = this.img;
//     //     const img = new Image
//     //     img.addEventListener("load", () => {
//     //         canvasCtx.drawImage(img, x, y, 60, 82);
//     //     })
//     //     img.src = "../media/SlickRicky.png"


//     // }

//     // moveRicky(e){
//     //     let dx = 0
//     //     let dy = 0

//     //     switch(e.keyCode) {
//     //         case 37:
//     //             dy = -10
//     //             // left key pressed
//     //             break;
//     //         case 38:
//     //             dx = +10
//     //             // up key pressed
//     //             break;
//     //         case 39:
//     //             dy = +10
//     //             // right key pressed
//     //             break;
//     //         case 40:
//     //             dx = -10
                
//     //             break;  
//     //     }
//     //     //this.drawRicky();
//     // }


//     // drawTriangle(context, img) {
//     // // the triangle
//     // context.beginPath();
//     // context.moveTo(-200, 0);
//     // context.drawImage(img, 200, 100, 60, 82);
//     // context.closePath();
    
//     // // // the outline
//     // // context.lineWidth = 10;
//     // // context.strokeStyle = "rgba(102, 102, 102, 1)";
//     // // context.stroke();
    
//     // // // the fill color
//     // // context.fillStyle = "rgba(255, 204, 0, 1)";
//     // // context.fill();
//     // }

// }




// const slickRickyGame = new Game;
// var key,pos=0;

// const startBtn = document.getElementById('startBtn')
// startBtn.addEventListener('click', ()=>{
//     slickRickyGame.init();
// })
// // document.addEventListener('keydown', ()=> {slickRickyGame.moveRicky(event)})slickRickyGame.moveRicky(this)



