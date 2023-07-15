export class ResetButton {
    constructor(app, winningsScreen, keypad) {
        this.app = app;
        this.winningsScreen = winningsScreen;
        this.keypad = keypad;
        this.sprite = null;
    }
  
    createButtonSprite() {
        this.sprite = PIXI.Sprite.from("./images/button_reset.png");
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        this.app.stage.addChild(this.sprite);

        gsap.fromTo(this.sprite, {x: -100}, {x: 300, duration: 1});

        this.sprite.position.x = 300;
        this.sprite.position.y = 345;

        this.pointerDownEvent();
    }

    pointerDownEvent = () => {
        this.sprite.on("pointerdown", this.pointerDown.bind(this));
    }

    pointerDown(){
        this.keypad.inputScreen.clearNumbers();
        this.winningsScreen.clearNumbers();
        this.unselectAllKeys();
    }

    unselectAllKeys(){
        for(let i = 0; i < this.keypad.numberButtons.length; i++){
            this.keypad.numberButtons[i].markAsUnselected();
        }
    }
  }