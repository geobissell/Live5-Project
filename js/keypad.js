import {NumberButton} from "./numberButton.js";

export class Keypad{
    constructor(app, buttonSize, keypadSize, numberOfKeys, inputScreen){
        this.app = app;
        this.buttonSize = buttonSize;
        this.keypadSize = keypadSize;
        this.numberOfKeys = numberOfKeys;
        this.inputScreen = inputScreen;
        this.numberButtons = [];
    }

    generateKeypad(){
        const container = new PIXI.Container();
        container.name = "Keypad";
        this.app.stage.addChild(container);
        let xPosition = 540;
        let yPosition = 550;
        let rowCount = 0;

        for(let i = 0; i < this.numberOfKeys; i++){
            let button = new NumberButton(this.app, i + 1, this.inputScreen);

            button.createButtonSprite(i + 1);
            this.numberButtons.push(button);
            container.addChild(button.sprite);

            if(i % 10 === 0){
                yPosition += this.buttonSize;
                rowCount = 0;
            }

            button.sprite.position.x = xPosition + rowCount * this.buttonSize;
            button.sprite.position.y = yPosition;
            rowCount++;
        }

        container.scale.x = this.keypadSize;
        container.scale.y = this.keypadSize;
    }
}