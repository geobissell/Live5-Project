export class NumberButton {
    constructor(app, number, inputScreen) {
        this.app = app;
        this.number = number;
        this.inputScreen = inputScreen;
        this.sprite = null;
        this.selectedColour = 0xfc9803;
        this.selected = false;
    }
  
    createButtonSprite(number) {
        this.sprite = PIXI.Sprite.from("./images/" + number + ".png");
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        this.app.stage.addChild(this.sprite);

        this.pointerDownEvent();
    }

    pointerDownEvent = () => {
        this.sprite.on("pointerdown", this.pointerDown.bind(this));
    }

    pointerDown(){
        if(this.inputScreen.chosenNumbers.length < this.inputScreen.maxNumbers && this.selected === false){
            this.markAsSelected();
            this.inputScreen.updateNumbers(this.number);
        }
        else{
            this.markAsUnselected();
            this.inputScreen.removeNumber(this.number);
        }
    }

    markAsSelected(){
        this.sprite.tint = this.selectedColour;
        this.selected = true;
    }

    markAsUnselected(){
        this.sprite.tint = 0xFFFFFF;
        this.selected = false;
    }
  }