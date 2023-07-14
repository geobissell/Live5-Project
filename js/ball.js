export class ball{
    constructor(app, number){
        this.app = app;
        this.number = number;
        this.colour = 0x000000;
        this.sprite = null;
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
        this.container.name = "Ball " + this.number ;
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

    rollTo(x, delay){
        let rollPromise = new Promise((resolve, reject) => {
            gsap.fromTo(this.container, {x: -50, rotation: 0}, {x: x, rotation: 12.55, duration: 0.7, delay: delay, onComplete: resolve});
        }
        );

        rollPromise.then(() => {

        });
    }
}