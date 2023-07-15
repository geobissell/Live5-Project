export class StartGameButton {
    constructor(app, keypad, winningScreen) {
        this.app = app;
        this.keypad = keypad;
        this.winningScreen = winningScreen;
        this.sprite = null;
    }
  
    createButtonSprite() {
        this.sprite = PIXI.Sprite.from("./images/button_start-game.png");
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        this.app.stage.addChild(this.sprite);

        gsap.fromTo(this.sprite, {y: 800}, {y: 345, duration: 1});

        this.sprite.position.x = 470;
        this.sprite.position.y = 345;

        this.pointerDownEvent();
    }

    pointerDownEvent = () => {
        this.sprite.on("pointerdown", this.pointerDown.bind(this));
    }

    pointerDown(){
        if(this.keypad.inputScreen.chosenNumbers.length >= 6){
            this.winningScreen.removeBalls();
            this.winningScreen.generateWinningNumbers();
            this.winningScreen.displayWinnings(this.keypad.inputScreen.chosenNumbers);
            this.winningScreen.rollOutBalls(this.activate.bind(this));
            this.deactivate();
        }
    }

    activate(){
        this.sprite.buttonMode = true;
        this.sprite.interactive = true;
        this.sprite.alpha = 1;
    }

    deactivate(){
        this.sprite.buttonMode = false;
        this.sprite.interactive = false;
        this.sprite.alpha = 0.5;
    }
  }