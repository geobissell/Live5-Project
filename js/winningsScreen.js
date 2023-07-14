import {cashFall} from "./cashFall.js";
import {ball} from "./ball.js";

export class winningsScreen{
    constructor(app, keypad){
        this.app = app;
        this.keypad = keypad;
        this.matchingNumbers = 0;
        this.winnings = 0;
        this.winningBalls = [];
        this.chosenNumbers = [];
        this.winningNumbers = [];
        this.startGameButton;
        
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

    displayWinnings(chosenNumbers){
        this.chosenNumbers = chosenNumbers;
        for(let i = 0; i < this.winningNumbers.length; i++){
            if(this.chosenNumbers.includes(this.winningNumbers[i])){
                this.matchingNumbers++;
            }
        }
        
        console.log(this.winningNumbers, chosenNumbers, "Matches: " + this.matchingNumbers);

        if(this.matchingNumbers >= 3){
            this.text.text = "£" + this.winnings;
        }

        this.matchingNumbers = 0;
    }

    generateWinningNumbers(){
        this.winningNumbers = [];
        while(this.winningNumbers.length < 6){
            let number = Math.floor(Math.random() * 59) + 1;
            if(!this.winningNumbers.includes(number)){
                this.winningNumbers.push(number);
            }
        }

        this.text.text = this.winningNumbers.toString();
    }

    rollOutBalls(callback){
        for(let i = 0; i < this.winningNumbers.length; i++){
            let winningBall = new ball(this.app, this.winningNumbers[i]);
            this.winningBalls.push(winningBall);
            winningBall.createBall();
            let isMatch = false;
            if(this.chosenNumbers.includes(this.winningNumbers[i])){
                isMatch = true;
            }else{
                isMatch = false;
            }
            this.rollBall(winningBall.container, 770 - (i * 60), i / 3, i+1, callback);
            
        }
    }

    removeBalls(){
        for(let i = 0; i < this.winningBalls.length; i++){
            this.app.stage.removeChild(this.winningBalls[i].container);
        }
        this.winningBalls = [];
    }

    rollBall(ball, x, delay, ballNumber, callback){
        let rollPromise = new Promise((resolve, reject) => {
            gsap.fromTo(ball, {x: -50, rotation: 0}, {x: x, rotation: 12.55, duration: 0.7, delay: delay, onComplete: resolve});
        }
        );
        rollPromise.then(() => {
            if(ballNumber === 6){
                console.log("FINISHED");
                this.displayWinAnimation();
                callback();
            }
        });
    }

    displayWinAnimation(){
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
                    gameCashFall.makeCashFall(20 * this.matchingNumbers);
                break;
            }
            this.text.text = "£" + this.winnings;
        }
    }

    clearNumbers(){
        this.winningNumbers = [];
        this.text.text = "";
    }
}