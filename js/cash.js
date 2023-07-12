export class cash {
    constructor(app) {
        this.app = app;
        this.sprite = null;
    }
  
    createCashSprite(x) {
        this.sprite = PIXI.Sprite.from("./images/cash.png");
        this.app.stage.addChild(this.sprite);
        this.sprite.position.x = x;

        let fallPromise = new Promise((resolve, reject) => {
                gsap.fromTo(this.sprite, {
                    y: Math.floor(Math.random() * -20) + -80,
                    rotation: 0
                },
                {
                    y: 850, rotation: Math.floor(Math.random() * 7) + -7,
                    duration: Math.floor(Math.random() * 4) + 2, onComplete: resolve 
                });
            }
        );

        fallPromise.then(() => {
            this.app.stage.removeChild(this.sprite);
        });
    }
}
