export class LuckyDipButton {
    constructor(app, keypad) {
        this.app = app;
        this.keypad = keypad;
        this.inputScreen = keypad.inputScreen;
        this.sprite = null;
    }
  
    createButtonSprite() {
        this.sprite = PIXI.Sprite.from("./images/button_lucky-dip.png");
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        this.app.stage.addChild(this.sprite);

        gsap.fromTo(
            this.sprite, 
            {x: 1380},
            {x: 725, duration: 1}
        );

        this.sprite.position.x = 725;
        this.sprite.position.y = 345;

        this.pointerDownEvent();
    }

    pointerDownEvent = () => {
        this.sprite.on("pointerdown", this.pointerDown.bind(this));
    }

    pointerDown(){
        this.inputScreen.createLuckyDip(this.keypad.numberButtons);
    }
  }