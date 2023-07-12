import {ball} from "./ball.js";

export class outputScreen{
    constructor(app, keypadSize, winningsScreen){
        this.app = app;
        this.keypadSize = keypadSize;
        this.winningsScreen = winningsScreen;
        this.winningNumbers = [];
        this.maxNumbers = 6;
        this.winningBalls = [];
        
        this.text = new PIXI.Text("CLICK START GAME!", {
            fontFamily: "Arial",
            fontSize: 24,
            fill: 0xff1010,
            align: "center",
        });
    }

    generateScreen(){
        const container = new PIXI.Container();
        container.name = "Output Screen";
        this.app.stage.addChild(container);

        container.addChild(this.text);
        this.text.position.x = 440;
        this.text.position.y = 200;

        //Hide numbers as may not be needed
        this.text.alpha = 0;
    }

    clearNumbers(){
        this.winningNumbers = [];
        this.text.text = "";
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

        this.rollOutBalls();
    }

    rollOutBalls(){
        for(let i = 0; i < this.winningNumbers.length; i++){
            let winningBall = new ball(this.app, this.winningNumbers[i]);
            this.winningBalls.push(winningBall);
            winningBall.createBall();
            winningBall.rollTo(770 - (i * 60), i / 3);
        }
    }

    removeBalls(){
        for(let i = 0; i < this.winningBalls.length; i++){
            this.app.stage.removeChild(this.winningBalls[i].container);
        }
        this.winningBalls = [];
    }
}