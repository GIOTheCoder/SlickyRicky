class Game {
    constructor(){
        this.score = 0;
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');

        // this.index = this.map.row * this.map.cols + column;
        this.map = {
            cols: 5,
            rows: 5,
            tsize: 64,
            tiles: [
            1, 3, 3, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1,
            1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1,
            ],
            getTile(col, row) {
              return this.tiles[row * map.cols + col];
            },
            };
        
    
    }

    init(){
        this.tileAtlas = Loader.getImage('tiles');
        this.drawTiles();
        this.renderMap();
        this.mapLoad();
        
    }

    drawTiles(){
        const context = this.context;
        context.drawImage(atlasImage, 192, 0, 64, 64, 128, 320, 64, 64);
    }

    renderMap(){
        const context = this.context;
        const tileAtlas = this.img
        img.src = '../media/tiles.png'
        for(const key in this.map){
            const map = this.map[key];
            for (let c = 0; c < map.cols; c++) {
                for (let r = 0; r < map.rows; r++) {
                    const tile = map.getTile(c, r);
                    if (tile !== 0) {
                        // 0 => empty tile
                        context.drawImage(
                            tileAtlas, // image
                            (tile - 1) * map.tsize, // source x
                            0, // source y
                            map.tsize, // source width
                            map.tsize, // source height
                            c * map.tsize, // target x
                            r * map.tsize, // target y
                            map.tsize, // target width
                            map.tsize // target height
                            );
                        }
                    }
                }
            }
                
        }
            
    mapLoad() {
        return [
            Loader.loadImage('tiles', '../media/tiles.png')
        ];
    };

    

}

const slickyRicky = new Game
const button = document.getElementById('startBtn')
button.addEventListener('click', ()=>{
    slickyRicky.init();
})

