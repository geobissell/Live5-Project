export class winningsScreen{
    constructor(app){
        this.app = app;
        this.matchingNumbers = 0;
        
        this.text = new PIXI.Text("WINNINGS!", {
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
        console.log(winningNumbers, chosenNumbers);
        for(let i = 0; i < winningNumbers.length; i++){
            if(chosenNumbers.includes(winningNumbers[i])){
                this.matchingNumbers++;
            }
        }

        if(this.matchingNumbers > 0){
            this.text.text = this.matchingNumbers;
        }else{
            this.text.text = "TRY AGAIN!";
        }

        this.matchingNumbers = 0;

    }
}