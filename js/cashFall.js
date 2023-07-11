import {cash} from "./cash.js";

export class cashFall {
    constructor(app) {
        this.app = app;
        this.notes = [];
    }
  
    makeCashFall(amount) {
        for(let i = 0; i < amount; i++){
            this.notes.push(new cash(this.app));
            this.notes[i].createCashSprite(Math.floor(Math.random() * 1240) + 40);
        }
    }
  }