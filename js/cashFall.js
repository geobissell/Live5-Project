import {Cash} from "./cash.js";

export class CashFall {
    constructor(app) {
        this.app = app;
        this.notes = [];
    }
  
    makeCashFall(amount) {
        for(let i = 0; i < amount; i++){
            this.notes.push(new Cash(this.app));
            this.notes[i].createCashSprite(Math.floor(Math.random() * 1240) + 40);
        }
    }
  }