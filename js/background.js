export class Background {
    constructor(app) {
        this.app = app;
        this.sprite = null;
    }
  
    createBackgroundSprite() {
        this.sprite = PIXI.Sprite.from("./images/background.jpg");
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        this.app.stage.addChild(this.sprite);

        this.sprite.position.x = 0;
        this.sprite.position.y = 0;
        this.sprite.scale.x = 2.2;
        this.sprite.scale.y = 2.2;
    }
  }