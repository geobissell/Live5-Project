import {keypad} from "./keypad.js";
import {inputScreen} from "./inputScreen.js";
import {resetButton} from "./resetButton.js";
import {luckyDipButton} from "./luckyDipButton.js";
import {startGameButton} from "./startGameButton.js";
import {outputScreen} from "./outputScreen.js";
import {background} from "./background.js";

const app = new PIXI.Application(
    {
        width: 1280,
        height: 720,
        backgroundColor: 0xC2DFFF,
        antialias: true
    }
);

globalThis.__PIXI_APP__ = app;

document.body.appendChild(app.view);

const gameBackground = new background(app);
gameBackground.createBackgroundSprite();

const playerInputScreen = new inputScreen(app, 59);
playerInputScreen.generateScreen();

const playerKeypad = new keypad(app, 70, 0.7, 59, playerInputScreen);
playerKeypad.generateKeypad();

const playerLuckyDipButton = new luckyDipButton(app, playerKeypad.inputScreen, playerKeypad);
playerLuckyDipButton.createButtonSprite();

const playerOutputScreen = new outputScreen(app);
playerOutputScreen.generateScreen();

const playerStartGameButton = new startGameButton(app, playerOutputScreen, playerKeypad.inputScreen);
playerStartGameButton.createButtonSprite();

const playerResetButton = new resetButton(app, playerKeypad.inputScreen, playerOutputScreen, playerKeypad);
playerResetButton.createButtonSprite();