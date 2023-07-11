export class resetButton {
    constructor(app, inputScreen, outputScreen, keypad) {
        this.app = app;
        this.inputScreen = inputScreen;
        this.outputScreen = outputScreen;
        this.keypad = keypad;
        this.sprite = null;
    }
  
    createButtonSprite() {
        this.sprite = PIXI.Sprite.from("./images/button_reset.png");
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        this.app.stage.addChild(this.sprite);

        this.sprite.position.x = 300;
        this.sprite.position.y = 345;

        this.pointerDownEvent();
    }

    pointerDownEvent = () => {
        this.sprite.on("pointerdown", this.pointerDown.bind(this));
    }

    pointerDown(){
        this.inputScreen.clearNumbers();
        this.outputScreen.clearNumbers();
        this.unselectAllKeys();
    }

    unselectAllKeys(){
        for(let i = 0; i < this.keypad.numberButtons.length; i++){
            this.keypad.numberButtons[i].markAsUnselected();
        }
    }
  }