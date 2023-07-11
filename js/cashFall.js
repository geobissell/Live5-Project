import {cash} from "./cash.js";

export class cashFall {
    constructor(app) {
        this.app = app;
        this.notes = [];
    }
  
    makeCashFall() {
        this.notes.push(new cash(this.app));
        this.notes[0].createCashSprite(100);
    }
  }