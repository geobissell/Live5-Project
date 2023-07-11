export class luckyDipButton {
    constructor(app, inputScreen, keypad) {
        this.app = app;
        this.inputScreen = inputScreen;
        this.keypad = keypad;
        this.sprite = null;
    }
  
    createButtonSprite() {
        this.sprite = PIXI.Sprite.from("./images/button_lucky-dip.png");
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        this.app.stage.addChild(this.sprite);

        this.sprite.position.x = 725;
        this.sprite.position.y = 345;

        this.pointerDownEvent();
    }

    pointerDownEvent = () => {
        this.sprite.on("pointerdown", this.pointerDown.bind(this));
    }

    pointerDown(){
        this.inputScreen.createLuckyDip(this.keypad.numberButtons);
        // this.markNumbersAsSelected();
    }

    // markNumbersAsSelected(){
        
    // }
  }