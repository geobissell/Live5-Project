export class winningsScreen{
    constructor(app){
        this.app = app;
        
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
}