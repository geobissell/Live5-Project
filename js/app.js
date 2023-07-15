import {Keypad} from "./keypad.js";
import {InputScreen} from "./inputScreen.js";
import {ResetButton} from "./resetButton.js";
import {LuckyDipButton} from "./luckyDipButton.js";
import {StartGameButton} from "./startGameButton.js";
import {Background} from "./background.js";
import {WinningsScreen} from "./winningsScreen.js";

const app = new PIXI.Application(
    {
        width: 1280,
        height: 720,
        backgroundColor: 0xC2DFFF,
        antialias: false
    }
);

globalThis.__PIXI_APP__ = app;

document.body.appendChild(app.view);

const background = new Background(app);
background.createBackgroundSprite();

const inputScreen = new InputScreen(app, 59);
inputScreen.generateScreen();

const keypad = new Keypad(app, 70, 0.7, 59, inputScreen);
keypad.generateKeypad();

const luckyDipButton = new LuckyDipButton(app, keypad);
luckyDipButton.createButtonSprite();

const winningsScreen = new WinningsScreen(app, keypad);
winningsScreen.generateScreen();

const startGameButton = new StartGameButton(app, keypad.inputScreen, winningsScreen);
startGameButton.createButtonSprite();

const resetButton = new ResetButton(app, keypad.inputScreen, winningsScreen, keypad);
resetButton.createButtonSprite();
