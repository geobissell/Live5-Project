export class ball{
    constructor(app, number){
        this.app = app;
        this.number = number;
        this.colour = 0x000000;
        this.sprite = null;
        
        this.text = new PIXI.Text(number, {
            fontFamily: "Impact",
            fontSize: 24,
            fill: 0xff1010,
            align: "center",
        });
    }

    createBall(){
        const container = new PIXI.Container();
        container.name = "Ball " + this.number ;
        this.app.stage.addChild(container);
        this.sprite = PIXI.Sprite.from("./images/ball.png");
        container.addChild(this.sprite);
        container.addChild(this.text);
        this.text.position.x = 12;
        this.text.position.y = 10;

        container.position.x = 500;
        container.position.y = 400;
        container.pivot.x = 25;
        container.pivot.y = 25;

        gsap.fromTo(container, {rotation: 0, x: 0}, {rotation: 27, x: 600, duration: 1});
    }
}