export class WinAnimation{
    constructor(app){
        this.app = app;
        this.colour = 0x000000;
        this.container;
        this.text = new PIXI.Text("WIN!", {
            fontFamily: "Impact",
            fontSize: 200,
            fill: 0xf5f242,
            align: "center",
            stroke: 0x000000,
            strokeThickness: 15,
        });
    }

    createWinAnimation(matches, amount){
        this.container = new PIXI.Container();
        this.container.name = "Win Animation Container";
        this.app.stage.addChild(this.container);
        this.container.addChild(this.text);
        this.text.text = matches + " MATCHES\n" + "£" + amount;
        this.text.position.x = 407;
        this.text.position.y = 350;
        this.text.pivot.x = 250;
        this.text.pivot.y = 250;

        let winPromise = new Promise((resolve, reject) => {
            TweenMax.to(this.text.scale, 1, {x:1.2, y:1.2, yoyo: true, repeat: 3, onComplete: resolve});
            }
        );

        winPromise.then(() => {
            this.app.stage.removeChild(this.container);
        });
    }
}