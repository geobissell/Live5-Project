import {cashFall} from "./cashFall.js";

export class winningsScreen{
    constructor(app){
        this.app = app;
        this.matchingNumbers = 0;
        this.winnings = 0;
        
        this.text = new PIXI.Text("£0", {
            fontFamily: "Arial",
            fontSize: 24,
            fill: 0xff1010,
            align: "center",
        });
    }

    generateScreen(){
        const container = new PIXI.Container();
        container.name = "Winnings Screen";
        this.app.stage.addChild(container);

        container.addChild(this.text);
        this.text.position.x = 460;
        this.text.position.y = 100;
    }

    displayWinnings(winningNumbers, chosenNumbers){
        for(let i = 0; i < winningNumbers.length; i++){
            if(chosenNumbers.includes(winningNumbers[i])){
                this.matchingNumbers++;
            }
        }
        
        console.log(winningNumbers, chosenNumbers, "Matches: " + this.matchingNumbers);

        if(this.matchingNumbers >= 3){
            const gameCashFall = new cashFall(this.app);
            switch(this.matchingNumbers) {
                case 3:
                    this.winnings += 50;
                    
                    gameCashFall.makeCashFall(10 * this.matchingNumbers);
                break;
                case 4:
                    this.winnings += 100;
                    gameCashFall.makeCashFall(10 * this.matchingNumbers);
                break;
                case 5:
                    this.winnings += 200;
                    gameCashFall.makeCashFall(10 * this.matchingNumbers);
                break;
                case 6:
                    this.winnings += 600;
                    gameCashFall.makeCashFall(10 * this.matchingNumbers);
                break;
            }
            this.text.text = "£" + this.winnings;
        }

        this.matchingNumbers = 0;
    }
}