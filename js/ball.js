export class ball{
    constructor(app, number){
        this.app = app;
        this.number = number;
        this.colour = 0x000000;
        this.sprite = null;
        this.winColour = 0xf5f242;
        this.container;
        
        this.text = new PIXI.Text(number, {
            fontFamily: "Impact",
            fontSize: 24,
            fill: 0x000000,
            align: "center",
        });
    }

    createBall(){
        this.container = new PIXI.Container();
        if(this.number > 9){
            this.text.text = this.number;
            this.container.name = "Ball " + this.number;
        }
        else{
            this.text.text = "0" + this.number;
            this.container.name = "Ball 0" + this.number;
        }
        this.app.stage.addChild(this.container);
        this.sprite = PIXI.Sprite.from("./images/ball.png");
        this.container.addChild(this.sprite);
        this.container.addChild(this.text);
        
        this.text.position.x = 12;
        this.text.position.y = 10;

        this.container.position.x = 500;
        this.container.position.y = 200;
        this.container.pivot.x = 25;
        this.container.pivot.y = 25;
    }

    markAsWin(){
        this.sprite.tint = this.winColour;
    }
}