export class numberButton {
    constructor(app, number, inputScreen) {
        this.app = app;
        this.number = number;
        this.inputScreen = inputScreen;
        this.sprite = null;
        this.selectedColour = 0x004cff;
        this.winningColour = 0x001aff;
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
        //HARD CODED 6 - REMOVE LATER
        if(this.inputScreen.chosenNumbers.length < 6 && this.selected === false){
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

    markAsWin(){
        this.sprite.tint = this.winningColour;
    }

    unmarkAsWin(){
        if(this.sprite.selected){
            this.sprite.tint = selectedColour;
        }else{
            this.sprite.tint = 0xFFFFFF;
        }
    }
  }