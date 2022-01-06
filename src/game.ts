import 'phaser';
import { GameConfig } from "./core/GameConfig";

export class Game extends Phaser.Game {
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
    }
}

window.addEventListener('load', () => {
    const game = new Game(GameConfig);
});