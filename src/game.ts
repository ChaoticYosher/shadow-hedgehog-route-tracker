import 'phaser';
import { GameConfig } from "./core/GameConfig";
import { GameController } from './core/GameController';


window.addEventListener('load', () => {
    const game = new GameController(GameConfig);
});