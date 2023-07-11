export class cash {
    constructor(app) {
        this.app = app;
        this.sprite = null;
    }
  
    createCashSprite(x) {
        this.sprite = PIXI.Sprite.from("./images/cash.png");
        this.app.stage.addChild(this.sprite);
        this.sprite.position.x = x;

        gsap.fromTo(this.sprite, {y: Math.floor(Math.random() * -30) + -60, rotation: 0}, {y: 850, rotation: 4, duration: Math.floor(Math.random() * 5) + 1});
    }
  }