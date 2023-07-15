import {CashFall} from "./cashFall.js";
import {Ball} from "./ball.js";
import {WinAnimation} from "./winAnimation.js";

export class WinningsScreen{
    constructor(app, keypad){
        this.app = app;
        this.keypad = keypad;
        this.matchingNumbers = 0;
        this.winnings = 0;
        this.winningBalls = [];
        this.chosenNumbers = [];
        this.winningNumbers = [];
        this.startGameButton;
        this.forced = true;
        
        this.text = new PIXI.Text("£0", {
            fontFamily: "impact",
            fontSize: 54,
            fill: 0xf5f242,
            align: "center",
            stroke: 0x000000,
            strokeThickness: 7,
        });
    }

    generateScreen(){
        const container = new PIXI.Container();
        container.name = "Winnings Screen";
        this.app.stage.addChild(container);

        container.addChild(this.text);
        this.text.position.x = 580;
        this.text.position.y = 270;
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
    }

    generateWinningNumbers(){
        this.winningNumbers = [];
        if(!this.forced){
            while(this.winningNumbers.length < 6){
                let number = Math.floor(Math.random() * 59) + 1;
                if(!this.winningNumbers.includes(number)){
                    this.winningNumbers.push(number);
                }
            }
        }else{
            this.winningNumbers = [1,2,3,4,5,6];
        }
    }

    rollOutBalls(callback){
        for(let i = 0; i < this.winningNumbers.length; i++){
            let winningBall = new Ball(this.app, this.winningNumbers[i]);
            this.winningBalls.push(winningBall);
            winningBall.createBall();
            let isMatch = false;
            if(this.chosenNumbers.includes(this.winningNumbers[i])){
                isMatch = true;
            }else{
                isMatch = false;
            }
            this.rollBall(winningBall.container, 1080 - (i * 180), i / 6, i+1, callback);
        }
        this.tintWinningBalls();
    }

    removeBalls(){
        for(let i = 0; i < this.winningBalls.length; i++){
            this.app.stage.removeChild(this.winningBalls[i].container);
        }
        this.winningBalls = [];
    }

    rollBall(ball, x, delay, ballNumber, callback){
        let rollPromise = new Promise((resolve, reject) => {
            gsap.fromTo(ball, {x: -100, rotation: 0}, {x: x, rotation: 6.29, duration: 0.5, delay: delay, onComplete: resolve});
        }
        );
        rollPromise.then(() => {
            if(ballNumber === 6){
                console.log("FINISHED");
                this.displayWinAnimations();
                callback();
            }
        });
    }

    displayWinAnimations(){
        let thisWinAmount = 0;
        if(this.matchingNumbers >= 3){
            const gameCashFall = new CashFall(this.app);
            switch(this.matchingNumbers) {
                case 3:
                    this.winnings += 50;
                    thisWinAmount = 50;
                    gameCashFall.makeCashFall(10 * this.matchingNumbers);
                break;
                case 4:
                    this.winnings += 100;
                    thisWinAmount = 100;
                    gameCashFall.makeCashFall(25 * this.matchingNumbers);
                break;
                case 5:
                    this.winnings += 200;
                    thisWinAmount = 200;
                    gameCashFall.makeCashFall(35 * this.matchingNumbers);
                break;
                case 6:
                    this.winnings += 600;
                    thisWinAmount = 600;
                    gameCashFall.makeCashFall(50 * this.matchingNumbers);
                break;
            }
            this.text.text = "£" + this.winnings;
        }

        const winAnimation = new WinAnimation(this.app);
        winAnimation.createWinAnimation(this.matchingNumbers, thisWinAmount);        

        this.matchingNumbers = 0;
    }

    tintWinningBalls(){
        for(let i = 0; i < this.winningBalls.length; i++){
            if(this.chosenNumbers.includes(this.winningBalls[i].number)){
                this.winningBalls[i].markAsWin();
            }
        }
    }

    clearNumbers(){
        this.winningNumbers = [];
    }
}