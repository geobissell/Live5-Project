export class background {
    constructor(app) {
        this.app = app;
        this.sprite = null;
    }
  
    createBackgroundSprite() {
        this.sprite = PIXI.Sprite.from("./images/background.png");
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        this.app.stage.addChild(this.sprite);

        this.sprite.position.x = 0;
        this.sprite.position.y = -400;
        this.sprite.scale.x = 1.5;
        this.sprite.scale.y = 1.5;
    }
  }