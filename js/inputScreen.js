export class InputScreen{
    constructor(app, keypadSize){
        this.app = app;
        this.keypadSize = keypadSize;
        this.chosenNumbers = [];
        this.maxNumbers = 6;
        
        this.text = new PIXI.Text("Choose 6 numbers to play!", {
            fontFamily: "Arial",
            fontSize: 24,
            fill: 0xff1010,
            align: "center",
        });
    }

    generateScreen(){
        const container = new PIXI.Container();
        this.app.stage.addChild(container);

        container.addChild(this.text);
        this.text.position.x = 460;
        this.text.position.y = 300;
        this.text.alpha = 0;
    }

    updateNumbers(input){
        if(this.chosenNumbers.length < 6){
            if(!this.chosenNumbers.includes(input)){
                this.chosenNumbers.push(input);
                this.text.text = this.chosenNumbers.toString();
            }
        }
    }

    clearNumbers(){
        this.chosenNumbers = [];
        this.text.text = "";
    }

    createLuckyDip(numberButtons){
        this.chosenNumbers = [];
        while(this.chosenNumbers.length < 6){
            let number = Math.floor(Math.random() * 59) + 1;
            if(!this.chosenNumbers.includes(number)){
                this.chosenNumbers.push(number);
            }
        }

        this.text.text = this.chosenNumbers.toString();
        for(let i = 0; i < numberButtons.length; i++){
            numberButtons[i].markAsUnselected();
            if(this.chosenNumbers.includes(numberButtons[i].number)){
                numberButtons[i].markAsSelected();
            }
        }
    }

    removeNumber(number){
        this.chosenNumbers = this.chosenNumbers.filter(value => value !== number);
        this.text.text = this.chosenNumbers.toString();
    }
}