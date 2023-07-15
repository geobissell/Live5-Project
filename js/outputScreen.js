export class OutputScreen{
    constructor(app, keypadSize, winningsScreen){
        this.app = app;
        this.keypadSize = keypadSize;
        this.winningsScreen = winningsScreen;
        this.winningNumbers = [];
        this.maxNumbers = 6;
        
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
}